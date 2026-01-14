document.getElementById('parseBtn').addEventListener('click', parseDocument);

document.getElementById('reviewForm').addEventListener('submit', submitReview);

function parseDocument() {
    const fileInput = document.getElementById('wordFile');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const arrayBuffer = event.target.result;
        mammoth.extractRawText({arrayBuffer: arrayBuffer})
            .then(function(result) {
                const text = result.value;
                const questions = extractQuestions(text);
                displayQuestions(questions);
            })
            .catch(function(err) {
                console.error(err);
                alert('Error parsing document.');
            });
    };
    reader.readAsArrayBuffer(file);
}

function extractQuestions(text) {
    // Assume questions are lines starting with number followed by dot and space
    const lines = text.split('\n');
    const questions = [];
    lines.forEach(line => {
        const trimmed = line.trim();
        if (/^\d+\.\s/.test(trimmed)) {
            questions.push(trimmed.replace(/^\d+\.\s/, ''));
        }
    });
    return questions;
}

function displayQuestions(questions) {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    questions.forEach((question, index) => {
        const div = document.createElement('div');
        div.className = 'question';
        div.innerHTML = `
            <label>${question}</label>
            <label><input type="checkbox" name="compliant${index}"> Compliant</label>
            <textarea name="notes${index}" placeholder="Notes"></textarea>
        `;
        container.appendChild(div);
    });
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