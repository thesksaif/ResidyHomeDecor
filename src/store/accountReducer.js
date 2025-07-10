// action - state management
import { LOGIN, LOGOUT, REGISTER } from './actions';

// ==============================|| ACCOUNT REDUCER ||============================== //

const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

// eslint-disable-next-line
const accountReducer = (state = initialState, action) => {
    console.log('Account reducer action:', action.type, action.payload);

    switch (action.type) {
        case REGISTER: {
            const { user } = action.payload;
            return {
                ...state,
                user
            };
        }
        case LOGIN: {
            const { user } = action.payload;
            console.log('LOGIN action - setting user:', user);
            return {
                ...state,
                isLoggedIn: true,
                isInitialized: true,
                user
            };
        }
        case LOGOUT: {
            console.log('LOGOUT action');
            return {
                ...state,
                isInitialized: true,
                isLoggedIn: false,
                user: null
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default accountReducer;
