(async () => {
    async function addRecord(type, host, value) {
        console.log(`Adding ${type} record: ${host} -> ${value}`);
        const addBtn = document.querySelector('a.nc_add_new_record');
        if (!addBtn) {
            console.error('Add New Record button not found');
            return;
        }
        addBtn.click();
        await new Promise(r => setTimeout(r, 1000));

        const rows = document.querySelectorAll('tr.nc_row_editable');
        const lastRow = rows[rows.length - 1];
        if (!lastRow) {
            console.error('New record row not found');
            return;
        }

        // Select type
        const typeSelect = lastRow.querySelector('select.nc_type');
        if (typeSelect) {
            const option = Array.from(typeSelect.options).find(o => o.text.trim().toUpperCase() === type.toUpperCase());
            if (option) {
                typeSelect.value = option.value;
                typeSelect.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
        await new Promise(r => setTimeout(r, 500));

        // Fill host
        const hostInput = lastRow.querySelector('input.nc_host');
        if (hostInput) {
            hostInput.value = host;
            hostInput.dispatchEvent(new Event('input', { bubbles: true }));
        }

        // Fill value
        const valueInput = lastRow.querySelector('input.nc_value');
        if (valueInput) {
            valueInput.value = value;
            valueInput.dispatchEvent(new Event('input', { bubbles: true }));
        }

        // Save
 NC_SAVE_BTN_HERE? No, usually it's a checkmark icon
        const saveBtn = lastRow.querySelector('a.nc_save');
        if (saveBtn) {
            saveBtn.click();
        }
        await new Promise(r => setTimeout(r, 2000));
    }

    // Records to add
    // TXT (@): v=spf1 include:spf.protection.outlook.com -all
    // TXT (_dmarc): v=DMARC1; p=quarantine; rua=mailto:admin@silsep.com
    // CNAME (track): instantly.ai

    // For TXT records, Namecheap might have "TXT Record" in the dropdown
    await addRecord('TXT Record', '@', 'v=spf1 include:spf.protection.outlook.com -all');
    await addRecord('TXT Record', '_dmarc', 'v=DMARC1; p=quarantine; rua=mailto:admin@silsep.com');
    await addRecord('CNAME Record', 'track', 'instantly.ai');

    return { success: true };
})();
