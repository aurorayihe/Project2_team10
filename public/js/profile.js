const delReviewHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id);

    const response = await fetch(`/api/reviews/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({id}),
      headers: {
        'Content-Type' : 'application/json',
      }
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete review');
    }
  }
};

  document
    .querySelector('.is-danger')
    .addEventListener('click', delReviewHandler);
  