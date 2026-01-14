document.getElementById('parseBtn').addEventListener('click', showReview);

document.getElementById('reviewForm').addEventListener('submit', submitReview);

document.getElementById('deleteCheckbox').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('review-section').style.display = 'none';
    }
});

function showReview() {
    document.getElementById('review-section').style.display = 'block';
}

function submitReview(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const review = {};
    for (let [key, value] of formData.entries()) {
        review[key] = value;
    }
    console.log('Review submitted:', review);
    alert('Review submitted successfully!');
}