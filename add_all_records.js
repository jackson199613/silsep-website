(async () => {
    const results = [];
    async function addRecord(type, host, value) {
        const addRecordBtn = Array.from(document.querySelectorAll('a')).find(el => el.textContent.includes('Add New Record'));
        if (!addRecordBtn) throw new Error('Add New Record button not found');
        addRecordBtn.click();
        await new Promise(r => setTimeout(r, 2000));

        const rows = Array.from(document.querySelectorAll('tr.editable-row'));
        const lastRow = rows[rows.length - 1];
        if (!lastRow) throw new Error('New row not found');

        // Select type
        const dropdown = lastRow.querySelector('.gb-dropdown');
        if (dropdown) {
            dropdown.click();
            await new Promise(r => setTimeout(r, 500));
            const options = Array.from(document.querySelectorAll('.gb-dropdown-menu li'));
            const option = options.find(opt => opt.textContent.trim() === type);
            if (option) {
                option.click();
            } else {
                throw new Error(`Option ${type} not found`);
            }
        }
        await new Promise(r => setTimeout(r, 1000));

        // Fill host and value
        const hostInput = lastRow.querySelector('input[placeholder="Host"], input[name$="Host"]');
        const valueInput = lastRow.querySelector('input[placeholder="Value"], input[name$="Value"], input[placeholder="Target"], input[name$="Target"]');
        
        if (hostInput) {
            hostInput.value = host;
            hostInput.dispatchEvent(new Event('input', { bubbles: true }));
            hostInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        if (valueInput) {
            valueInput.value = value;
            valueInput.dispatchEvent(new Event('input', { bubbles: true }));
            valueInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        await new Promise(r => setTimeout(r, 500));

        // Save
        const saveBtn = lastRow.querySelector('.save-record-button, .gb-icon-check');
        if (saveBtn) {
            saveBtn.click();
        } else {
             // Try finding by class
             const btn = lastRow.querySelector('.gb-icon-check');
             if (btn) btn.click();
        }
        await new Promise(r => setTimeout(r, 3000));
        results.push({ type, host, value, status: 'Attempted' });
    }

    try {
        await addRecord('TXT Record', '@', 'v=spf1 include:_spf.google.com ~all');
        await addRecord('TXT Record', '_dmarc', 'v=DMARC1; p=quarantine; rua=mailto:admin@silsep.com');
        await addRecord('CNAME Record', 'track', 'instantly.ai');
        return { ok: true, results };
    } catch (e) {
        return { ok: false, error: e.message, results };
    }
})();
