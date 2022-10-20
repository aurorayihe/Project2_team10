const newReviewHandler = async (event) => {
    event.preventDefault();
    // const movieTitle = document.querySelector('#movie_title').value.trim();
    // const score = document.querySelector('#score').value.trim();
    // const comment = document.querySelector('#comment').value.trim();
    // const movie_id = document.querySelector('#movieID').value;
    const movieId = document.querySelector('input[name="movie-id"]').value;
    const comment = document.querySelector('textarea[name ="comment"]').value;
    const score = document.querySelector('textarea[name="score"]').value;
    
    if (score && comment) {
        const newReview = await fetch(`/api/reviews/`, {
            method: 'POST',
            body: JSON.stringify({score, comment, movieId}),
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