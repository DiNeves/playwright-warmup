import dotenv from 'dotenv';
dotenv.config({ quiet: true });

export const USERS = {

    validUser: {
        username: process.env.VALID_USERNAME,
        password: process.env.VALID_PASSWORD,
    },

    blockedUser: {
        username: process.env.BLOCKED_USERNAME,
        password: process.env.BLOCKED_PASSWORD,
    },

    invalidUsername: {
        username: process.env.INVALID_USER_USERNAME,
        password: process.env.INVALID_USER_PASSWORD,
    },
    
    invalidPassword: {
        username: process.env.INVALID_PASS_USERNAME,
        password: process.env.INVALID_PASS_PASSWORD,
    },
};

export const MESSAGES = {

    success: {
        validLogin: 'User successfully logged in!',
        authenticated: (user) => 'User ${user} authenticated',
        logout: 'You have been logged out. Please log in.'
    },

    errors: {
        failedBlocked: 'User blocked!',
        failedUsername: 'User not found!',
        failedPassword: 'Incorrect username or password!',
        failedExceedRetries: 'User temporarily blocked!'
    }
};

export const HELPER = {
    
    goTo: {
        loginUrl: '/login'
    },

    labels: {
        username: 'Type your username',
        password: 'Type your password',
        button: 'Login'
    }
};