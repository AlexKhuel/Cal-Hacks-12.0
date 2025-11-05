# Project Architecture (before refactor)

## 1. Frontend

### /src/components/

- Navbar.jsx -> navigation header
- Dashboard.jsx -> main UI for user data
- TaskList.jsx -> renders list of tasks
- TaskItem.jsx -> individual task with delete/complete logic

## 2. Backend

### /src/config/

- firebase.js -> configure the firebase connection

### /src/middleware

- errorHandler.js -> {
  Has two parts. The first part is errorHandler which takes in an error and responds with text thats useful to debugging e.g. 404, 500, etc. The second part is asyncHandler which catches error when a function is run instead of having try catch in the scenario that bad data is received or data routing is incorrect.
  }

- rateLimiter.js -> protects us from users spam clicking generation to avoid many costly API calls and database writes

### /src/routes

- firebase.js ->
