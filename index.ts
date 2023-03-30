interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
];

const table = document.getElementById('my-table') as HTMLTableElement;

const headerRow = table.createTHead().insertRow();
const row = table.insertRow();

for (const user of users) {
  const newRow = table.insertRow();
  newRow.insertCell().textContent = user.id.toString();
  newRow.insertCell().textContent = user.name;
  newRow.insertCell().textContent = user.email;
}



const idHeader = headerRow.insertCell();
idHeader.textContent = 'ID';

const nameHeader = headerRow.insertCell();
nameHeader.textContent = 'Name';

const emailHeader = headerRow.insertCell();
emailHeader.textContent = 'Email';

document.body.appendChild(table);


function fetchData(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = function() {
        reject(xhr.statusText);
      };
      xhr.send();
    });
  }
  
  function generateTable(data: any[]) {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
  
    for (const key in data[0]) {
      const headerCell = document.createElement('th');
      headerCell.appendChild(document.createTextNode(key));
      headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
  
    data.forEach(item => {
      const row = document.createElement('tr');
      for (const key in item) {
        const cell = document.createElement('td');
        cell.appendChild(document.createTextNode(item[key]));
        row.appendChild(cell);
      }
      table.appendChild(row);
    });
  
    const container = document.getElementById('container');
    container?.appendChild(table);
  }
  
  fetchData('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
      generateTable(data);
    })
    .catch(error => {
      console.error(error);
    });
  