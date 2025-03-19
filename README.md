# Notes-Website

Welcome to the Notes-Website project! This web application allows users to create, manage, and organize their notes efficiently. It uses modern web technologies and integrates Google OAuth for user authentication.

## Screenshots

### First Page

![2024-07-22 (5)](https://github.com/user-attachments/assets/4b640cb1-e62b-4a7f-8b7e-1a51dc208c63)

### Home Page

![2024-07-22 (6)](https://github.com/user-attachments/assets/e4931a7e-ea74-41ca-857f-16f94163b13a)

### Add Post

![2024-07-22 (9)](https://github.com/user-attachments/assets/cb8afd9e-4362-4363-abb0-e964fccdfe0c)

### Update Post

![2024-07-22 (7)](https://github.com/user-attachments/assets/7af76d5f-ecca-47a9-b34e-0d4e738caa1b)

### Delete Post

![2024-07-22 (8)](https://github.com/user-attachments/assets/3d9d1751-7004-4ceb-9006-7e09ae49d7c8)



## Features:

- **Register/Login**: Users can sign up or log in using their Google account.
- **Add Note**: Users can create new notes.
- **View Notes**: Users can view all their saved notes.
- **Update Note**: Users can edit their existing notes.
- **Delete Note**: Users can delete notes they no longer need.
- **Search Notes**: Users can search through their notes.
- **Logout**: Users can log out of their account.
- **OAuth Integration**: Secure and easy login with Google OAuth 2.0.

### Technologies Used:

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing notes.
- **Mongoose**: MongoDB object modeling tool.
- **EJS**: Embedded JavaScript templating.
- **Passport**: Authentication middleware for Node.js.
- **Google OAuth 2.0**: For secure user authentication.

## You need:

- Database (MongoDB)
- Google Console Account to create the API Auth Key's

## Create .env file

Create a .env file to store your credentials. Example below:

```
MONGODB_URI = mongodb+srv://<username>:<password>@mongodburlhere
GOOGLE_CLIENT_ID= YOUR_GOOGLE_ID_HERE
GOOGLE_CLIENT_SECRET= YOUR_GOOGLE_CLIENT_SECRET_HERE
GOOGLE_CALLBACK_URL=http://localhost:3000/google/callback
```

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/notes-website.git
    cd notes-website
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```

4. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```
