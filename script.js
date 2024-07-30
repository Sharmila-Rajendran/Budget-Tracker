const ExpenseTrack = (event) => {
    event.preventDefault();

    let Type = document.getElementById('val').value;
    let Name = document.getElementById('name').value;
    let Amount = document.getElementById('amt').value;

    const table = document.getElementsByTagName('tbody')[0];

    let list = document.createElement('tr');

    list.innerHTML = `
        <td>${Type}</td>
        <td>${Name}</td>
        <td>${Amount}</td>
        <td><button class="buttn">Delete</button></td>
    `;

    table.appendChild(list);

    list.querySelector('.buttn').addEventListener('click', () => {
        list.remove();
    });
};
