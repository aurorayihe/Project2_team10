const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#login_username').value.trim();
    const password = document.querySelector('#login_password').value.trim();
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
};

const directSignup = async (event) => {
  document.location.replace('/signup')
}


document
    .querySelector('#login-submit-btn')
    .addEventListener('submit', loginHandler);

document
    .querySelector("signup-btn")
    .addEventListener('click', directSignup);
