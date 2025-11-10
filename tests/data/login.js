export const USERS = {

    validUser: {
        username: 'test',
        password: 'password123',
    },

    blockedUser: {
        username: 'testblock',
        password: 'password123'
    },

    invalidUsername: {
        username: 'test123',
        password: 'password123'
    },
    
    invalidPassword: {
        username: 'test',
        password: 'password1234',
    }
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