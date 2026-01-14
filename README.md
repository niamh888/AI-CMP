# AI-CMP: Compliance Review for AI-Enabled Medical Devices

This web application allows users to perform compliance reviews for AI-enabled medical devices by extracting questions from an existing Word document (.docx or .doc).

## Features

- Upload a Word document containing compliance questions.
- Automatically parse and extract questions from the document.
- Fill out a review form for each question.
- Submit the review (currently logs to console).

## How to Use

1. Open `index.html` in a web browser.
2. Click "Choose File" to select your Word document.
3. Click "Parse Questions" to extract the questions.
4. For each question, check if compliant and add notes.
5. Click "Submit Review" to submit.

## Requirements

- A modern web browser with JavaScript enabled.
- The Word document should have questions formatted as numbered lists (e.g., "1. Question text").

## Dependencies

- Mammoth.js for parsing Word documents (loaded via CDN).

## Development

- `index.html`: Main HTML structure.
- `styles.css`: Styling.
- `script.js`: JavaScript logic.