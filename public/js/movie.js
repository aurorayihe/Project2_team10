const redirectAddReview = async (event) => {
    document.location.replace('/reviews');
}

document
    .querySelector('#add_review_btn')
    .addEventListener('click', redirectAddReview)