function addContact() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');

    const name = nameInput.value;
    const phone = phoneInput.value;

    const table = document.getElementById('contactsTable');
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell();
    const phoneCell = newRow.insertCell();

    nameCell.textContent = name;
    phoneCell.textContent = phone;

    nameInput.value = '';
    phoneInput.value = '';
}