# Business Card Digitization Using OCR

## Overview

Business Card Digitization Using OCR is a web application that extracts information from business cards using Optical Character Recognition (OCR). Users can upload a business card image, automatically extract contact details, edit the extracted information if needed, and save it for future use.

## Features

- Upload business card images
- OCR-based text extraction
- Automatic detection of:
  - Name
  - Company Name
  - Designation
  - Phone Number
  - Email Address
  - Website
  - Address
- Edit extracted information
- Save contact details
- Modern and responsive user interface

## Technology Stack

### Frontend
- React.js
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express.js

### OCR
- Tesseract OCR

### Database
- MySQL

## Project Structure

```
MajorProject/
│
├── src/
├── server/
├── dist/
├── node_modules/
├── package.json
├── package-lock.json
├── index.html
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/Business-Card-Digitization-Using-OCR.git
cd Business-Card-Digitization-Using-OCR
```

### Install Dependencies

```bash
npm install
```

## Run the Project

Start both frontend and backend:

```bash
npm start
```

Or start them separately:

Frontend

```bash
npm run dev
```

Backend

```bash
npm run server
```

## Future Enhancements

- QR Code generation
- Contact export (CSV, Excel, PDF) 
- Cloud storage
- AI-powered data validation
- Multi-language OCR
- Mobile application support

## Author

Shaik Unnis

## License

This project is developed for educational purposes as a B.Tech Major Project.
