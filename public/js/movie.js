const newReviewHandler = async (event) => {
    event.preventDefault();

    // const movie_id = document.querySelector('input[name="movie-id"]').value;
    const comment = document.querySelector('textarea[name ="comment"]').value;
    const score = document.querySelector('textarea[name="score"]').value;
    // const user_id = document.querySelector('input[name="user-id"]').value;
    const user_id = 4;
    const movie_id = 1;

    if (score && comment) {
        const newReview = await fetch(`/api/reviews/`, {
            method: 'POST',
            body: JSON.stringify({score, comment, movie_id, user_id}),
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