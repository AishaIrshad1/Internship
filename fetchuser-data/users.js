// Fetch user data from JSONPlaceholder
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const userList = document.getElementById('user-list');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(li);
    });
  })
  .catch(error => console.error('Error fetching users:', error));
