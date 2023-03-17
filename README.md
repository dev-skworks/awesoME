# awesoME

## Motivation

awesoME is a fullstack CRUD app for motivation and performance indicator tracking. This app allows the user to capture professional highlights using text which they can later edit or delete from their collection. The main objective is to help professionals maintain a record of their professional achievements which is well organized and easy to access.

## Technologies used

### Frontend

- JavaScript
- HTML/CSS
- EJS
- Bootstrap

### Backend

- Node.js/Express.js
- MongoDB
- Mongoose
- Passport.js

## Getting Started

### Installation

Clone the repo

```
git clone https://github.com/dev-skworks/awesoME.git
```

`npm install`

---

#### Things to add

- Create a `.env` file in the config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = your database URI
  - SESSION_SECRET = "your secret"
  - CLOUD_NAME = your cloudinary cloud name
  - API_KEY = your cloudinary api key
  - API_SECRET = your cloudinary api secret

---

#### Run

`npm run build`
`npm start`

##### Run in dev environment

`npm run dev`

## Optimizations and roadmap

- [X] UI Overhaul to improve the look and readability of the app
- [ ] Improvements for the accessibility of the app
- [ ] Create a filter feature that allows the user to filter highlights using categories
- [ ] Integrate the SM-2 algorithm into the randomly pulled highlights
- [ ] Make a carousel style section that stores randomly pulled highlights
- [ ] Add pagination to the carousel style section to allow navigating through the random highlights
- [ ] Expand the filter feature to allow filtering highlights using the From field
- [ ] Expand the filter feature to allow filtering highlights using the date
- [ ] Add data visualization using graphs/charts
