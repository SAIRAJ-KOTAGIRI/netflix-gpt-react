# NETFLIX GPT
    - Can be accessed with below link
    https://netflixgpt-55be6.web.app/

# Creating React Project
    npx create-react-app nextflix-gpt

# Tailwind CSS Configuration
    - npm install -D tailwindcss
      npx tailwindcss init

# Formik
    - Form Validations

# Firebase Configuration
    - Create Account in firebase.google.com
    - Create Project
        - Project Name
        - Project Id
        - Google analytics
    - Click on Web (</>)
        - Register App (NetflixGPT)
        - Check the Checkbox For Hosting
        - Register App
    - npm install firebase
        - add the config code in the utils/firebase.js
    - Authentication Enabling
        - Project Overview => Authentication
        - Sign-in Method (Enable the Email/Password)
    - Deploying the APP
        Commands
        - npm install -g firebase-tools
        - firebase login
        - firebase init
            -    Hosting: Configure Files for Firebase Hosting and (optinally) setup GitHub Action Deploys (Press Space for selection)
            - Use an Existing Project
            - Netflix-GPT
            - What do you want to use as you public directory? (build)
            - Configure as a single-page app (rewrite all urls to /index.html) ? No
            - Set up automatic build and deploys with GitHub? n
        - npm run build (For generating the build folder)
        - firebase deploy

# Redux
    - npm i -D @reduxjs/toolkit
    - npm i react-redux
    
# TMDB 
    - Used to get the Movies Data
    - Create Account
        - Edit Profile
            - API
            - Create APP
    - Documentation
        - developer.themoviedb.org
    