const signupHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#signup_username').value.trim();
    const email = document.querySelector('#signup_email').value.trim();
    const password = document.querySelector('#signup_password').value.trim();
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/main');
      } else {
        alert(response.statusText);
      }
    }
};

document
    .querySelector('#signup_submit')
    .addEventListener('click', signupHandler);