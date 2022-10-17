const redirectAddReview = async (event) => {
    document.location.replace('/review');
}

document
    .querySelector('#add_review_btn')
    .addEventListener('click', redirectAddReview)