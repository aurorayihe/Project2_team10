const newReviewHandler = async (event) => {
    event.preventDefault();

    // const movieTitle = document.querySelector('#movie_title').value.trim();
    const score = document.querySelector('#score').value.trim();
    const comment = document.querySelector('#comment').value.trim();

    if (score && comment) {
        const newReview = await fetch(`/api/review`, {
            method: 'POST',
            body: JSON.stringify({score, comment}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(newReview.ok) {
            document.location.replace('/review');
        } else {
            alert('Failed to create review');
        }
    }
};

document    
    .querySelector('#new_review')
    .addEventListener('click', newReviewHandler);
