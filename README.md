# AI-CMP: Compliance Review for AI-Enabled Medical Devices

This web application provides a compliance review form for AI-enabled medical devices, based on extracted questions from a PDF document.

## Features

- Pre-loaded compliance questions from sections 17-36 of the AI CMP Assessment document.
- Each section includes questions with text areas for responses and blue guidance text.
- Submit the review (currently logs to console).

## How to Use

1. Open `index.html` in a web browser.
2. Click "Parse Questions" to display the review form.
3. For each question, provide details in the text area.
4. Click "Submit Review" to submit.

## Requirements

- A modern web browser with JavaScript enabled.

## Development

- `index.html`: Main HTML structure with embedded questions.
- `styles.css`: Styling for the form and blue guidance text.
- `script.js`: JavaScript logic to show the form.