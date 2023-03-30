var users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
];
var table = document.getElementById('my-table');
var headerRow = table.createTHead().insertRow();
var row = table.insertRow();
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    var newRow = table.insertRow();
    newRow.insertCell().textContent = user.id.toString();
    newRow.insertCell().textContent = user.name;
    newRow.insertCell().textContent = user.email;
}
var idHeader = headerRow.insertCell();
idHeader.textContent = 'ID';
var nameHeader = headerRow.insertCell();
nameHeader.textContent = 'Name';
var emailHeader = headerRow.insertCell();
emailHeader.textContent = 'Email';
document.body.appendChild(table);
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            }
            else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = function () {
            reject(xhr.statusText);
        };
        xhr.send();
    });
}
function generateTable(data) {
    var table = document.createElement('table');
    var headerRow = document.createElement('tr');
    for (var key in data[0]) {
        var headerCell = document.createElement('th');
        headerCell.appendChild(document.createTextNode(key));
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
    data.forEach(function (item) {
        var row = document.createElement('tr');
        for (var key in item) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(item[key]));
            row.appendChild(cell);
        }
        table.appendChild(row);
    });
    var container = document.getElementById('container');
    container === null || container === void 0 ? void 0 : container.appendChild(table);
}
fetchData('https://jsonplaceholder.typicode.com/posts')
    .then(function (data) {
    generateTable(data);
})
    .catch(function (error) {
    console.error(error);
});
