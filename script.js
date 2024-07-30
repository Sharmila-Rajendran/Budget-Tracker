document.getElementById('frm').addEventListener('submit', function (e) {
    e.preventDefault();

    const type = document.getElementById('val').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amt').value;

    if (type && name && amount) {
        addTransaction(type, name, amount);
    } else {
        alert('Please fill in all fields');
    }
});

function addTransaction(type, name, amount) {
    const table = document.getElementById('table').getElementsByTagName('tr')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${type}</td>
        <td>${name}</td>
        <td>$${amount}</td>
        <td><button class="delete-btn" onclick="deleteTransaction(this)">Delete</button></td>
    `;
}

function deleteTransaction(butt) {
    const row = butt.parentNode.parentNode;
    row.parentNode.removeChild(row);
}