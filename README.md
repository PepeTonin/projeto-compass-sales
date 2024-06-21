# Compass Sales

## Description
This project involves implementing the authentication part of a mobile application using React Native and Expo. It includes screens for sign up, login, reset password, and a home page accessible upon successful authentication. TypeScript was used throughout the project to ensure static typing.

## Features
- **Sign Up:** Allows new users to register using the Firebase Auth REST API.
- **Login:** Authentication for registered users to access the application.
- **Reset Password:** Functionality to reset the user's password via email.
- **Home Page:** Main page accessible after login, providing a personalized user experience.
- **Firebase Integration:** Utilized Firebase for user authentication and secure data storage.

## Technologies Used
<span>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.1.3-blue.svg?style=flat-square" alt="ts version">
  </a>
  <a href="https://reactnative.dev/">
    <img src="https://img.shields.io/badge/ReactNative-0.72.5-blue.svg?style=flat-square" alt="rn version">
  </a>
  <a href="https://docs.expo.dev/">
    <img src="https://img.shields.io/badge/Expo-49.0.10-blue.svg?style=flat-square" alt="expo version">
  </a>
</span>

- Expo Font, Splashscreen, Statusbar, Vector Icons
- React Navigation
- React Native Async Storage
- Axios (for HTTP requests)
- Firebase Auth REST API

## Dependencies
- Node.js version 12.5.1 or later
- Mobile device emulator (Android Studio or Xcode for macOS) installed and updated or Expo Go app downloaded on your mobile device

## Installation
To run the project locally, follow these steps:
1. Clone the repository to your local machine

```bash
git clone https://github.com/PepeTonin/projeto-compass-sales.git
```

2. Navigate to the project directory
   
```bash
cd projeto-compass-sales
```

3. Run the 

```bash
npm install
# or
yarn install
```

4. Start the project

```bash
npx expo start
```

5. Now you can follow the steps in the terminal to run the project or in your emulator or in your mobile device

## Running App Screenshots:

Sign up

![sign up screen](./images/readme_file/signup_screen.jpg)

Login

![login screen](./images/readme_file/login_screen.jpg)

Forgot password

![forgot pass screen](./images/readme_file/forgotpass_screen.jpg)

Home page for authenticated user

![home page screen](./images/readme_file/main_screen.jpg)
