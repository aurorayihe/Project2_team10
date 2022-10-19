const newReviewHandler = async (event) => {
    event.preventDefault();
    // const movieTitle = document.querySelector('#movie_title').value.trim();
    const score = document.querySelector('#score').value.trim();
    const comment = document.querySelector('#comment').value.trim();
    const movie_id = document.querySelector('#movieID').value;
    console.log(movie_id);
    if (score && comment) {
        const newReview = await fetch(`/api/reviews/`, {
            method: 'POST',
            body: JSON.stringify({score, comment, movie_id}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(newReview.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create review');
        }
    }
};

document    
    .querySelector('#new_review')
    .addEventListener('click', newReviewHandler);