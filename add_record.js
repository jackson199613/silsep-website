(async () => {
    const addRecordBtn = document.querySelector('.add-record-button');
    if (!addRecordBtn) return { error: 'Add record button not found' };
    
    async function addRecord(type, host, value) {
        addRecordBtn.click();
        await new Promise(r => setTimeout(r, 1000));
        
        const rows = document.querySelectorAll('.editable-row');
        const lastRow = rows[rows.length - 1];
        
        // Select type
        const typeSelect = lastRow.querySelector('select[name="type"]');
        if (typeSelect) {
            typeSelect.value = type;
            typeSelect.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
             // If not a select, it might be a custom dropdown. Namecheap uses custom ones.
             // Let's try to find the dropdown toggle.
             const dropdown = lastRow.querySelector('.gb-dropdown');
             if (dropdown) {
                 dropdown.click();
                 await new Promise(r => setTimeout(r, 500));
                 const options = document.querySelectorAll('.gb-dropdown-menu li');
                 for (let opt of options) {
                     if (opt.textContent.trim() === type) {
                         opt.click();
                         break;
                     }
                 }
             }
        }
        await new Promise(r => setTimeout(r, 500));
        
        // Fill host and value
        const hostInput = lastRow.querySelector('input[name="host"]');
        const valueInput = lastRow.querySelector('input[name="value"]');
        
        if (hostInput) hostInput.value = host;
        if (valueInput) valueInput.value = value;
        
        // Save
        const saveBtn = lastRow.querySelector('.save-record-button');
        if (saveBtn) saveBtn.click();
        await new Promise(r => setTimeout(r, 2000));
    }

    // This is a complex UI, maybe it's better to do it one by one and verify.
    // For now, let's just try to click the button and see what happens.
    addRecordBtn.click();
    return { status: 'clicked' };
})();
