(async () => {
    async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
    
    async function addRecord(type, host, value) {
        console.log(`Adding ${type} record for ${host}...`);
        const addBtn = document.querySelector('a.nc_addrecord, .add-record-link, [data-action="add-record"]');
        if (!addBtn) {
            // Fallback to finding by text if ref failed
            const allLinks = Array.from(document.querySelectorAll('a'));
            const target = allLinks.find(a => a.innerText.includes('Add New Record'));
            if (target) target.click();
            else throw new Error('Add New Record button not found');
        } else {
            addBtn.click();
        }
        await sleep(1500);
        
        const rows = document.querySelectorAll('tr.new-record-row, tr.edit-record-row');
        const row = rows[rows.length - 1];
        if (!row) throw new Error('New record row not found');
        
        const typeSelect = row.querySelector('select');
        if (typeSelect) {
            // Map common types to Namecheap internal values if needed, but usually text works or exact value
            for (let i = 0; i < typeSelect.options.length; i++) {
                if (typeSelect.options[i].text.toLowerCase().includes(type.toLowerCase())) {
                    typeSelect.selectedIndex = i;
                    typeSelect.dispatchEvent(new Event('change', { bubbles: true }));
                    break;
                }
            }
        }
        await sleep(1000);
        
        const inputs = row.querySelectorAll('input[type="text"]');
        if (inputs.length >= 2) {
            inputs[0].value = host;
            inputs[0].dispatchEvent(new Event('input', { bubbles: true }));
            inputs[1].value = value;
            inputs[1].dispatchEvent(new Event('input', { bubbles: true }));
        }
        
        const saveBtn = row.querySelector('.nc_saverecord, .save-record, [data-action="save-record"]');
        if (saveBtn) saveBtn.click();
        else {
            // Try checkmark icon
            const check = row.querySelector('.icon-check, .nc_saverecord');
            if (check) check.click();
        }
        await sleep(3000);
    }

    async function updateRedirect(newUrl) {
        console.log(`Updating redirect to ${newUrl}...`);
        const rows = Array.from(document.querySelectorAll('tr'));
        const redirectRow = rows.find(r => r.innerText.includes('URL Redirect Record') && r.innerText.includes('@'));
        
        if (redirectRow) {
            const editBtn = redirectRow.querySelector('.nc_editrecord, .edit-record, .icon-edit');
            if (editBtn) editBtn.click();
            else {
                // Click on the row or value?
                redirectRow.click();
            }
            await sleep(1500);
            
            const inputs = redirectRow.querySelectorAll('input[type="text"]');
            if (inputs.length >= 2) {
                inputs[1].value = newUrl;
                inputs[1].dispatchEvent(new Event('input', { bubbles: true }));
            }
            
            const selects = redirectRow.querySelectorAll('select');
            for (const s of selects) {
                if (s.innerText.includes('Unmasked') || s.innerText.includes('Masked') || s.innerText.includes('Permanent')) {
                    for (let i = 0; i < s.options.length; i++) {
                        if (s.options[i].text.includes('301')) {
                            s.selectedIndex = i;
                            s.dispatchEvent(new Event('change', { bubbles: true }));
                            break;
                        }
                    }
                }
            }
            
            const saveBtn = redirectRow.querySelector('.nc_saverecord, .save-record, .icon-check');
            if (saveBtn) saveBtn.click();
        }
        await sleep(3000);
    }

    try {
        // 1. Update Redirect
        await updateRedirect('https://silsep.com');
        
        // 2. Add CNAME (track) -> instantly.ai
        await addRecord('CNAME Record', 'track', 'instantly.ai');
        
        // 3. Add TXT (_dmarc) -> v=DMARC1; p=quarantine; rua=mailto:admin@silsep.com
        await addRecord('TXT Record', '_dmarc', 'v=DMARC1; p=quarantine; rua=mailto:admin@silsep.com');
        
        // 4. Update/Add TXT (@) -> v=spf1 include:spf.protection.outlook.com -all
        // Note: The @ SPF record is often "Locked by Domain Redirect" in Namecheap.
        // We might need to delete the redirect or change mail settings first if it blocks us.
        // However, I'll try to add it as a new TXT record first.
        await addRecord('TXT Record', '@', 'v=spf1 include:spf.protection.outlook.com -all');
        
        return { success: true };
    } catch (e) {
        return { success: false, error: e.message };
    }
})()