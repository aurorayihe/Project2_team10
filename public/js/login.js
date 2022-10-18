const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#login_username').value.trim();
    const password = document.querySelector('#login_password').value.trim();
    console.log(username);
    console.log(password);
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
};

document
    .querySelector('#login-submit-btn')
    .addEventListener('click', loginHandler);