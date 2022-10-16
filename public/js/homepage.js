const loginRedirect = async (event) => {
    document.location.replace('/login')
};

const movieRedirect = async (event) => {
    document.location.replace('/movie')
}

document
    .querySelector('#home-login')
    .addEventListener('click', loginRedirect);
