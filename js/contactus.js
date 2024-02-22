'use strict';

document.querySelector('#frmContact').addEventListener('submit', function(e) {
    e.preventDefault();

    if (!/[0-9]{8}/.test(document.querySelector('#txtPhone').value)) {
        document.querySelector('span[data-input=txtPhone]').classList.remove('hidden');
        return false;
    }
});