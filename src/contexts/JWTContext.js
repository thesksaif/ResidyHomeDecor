import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';

// third-party
import { Chance } from 'chance';
import jwtDecode from 'jwt-decode';

// reducer - state management
import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/accountReducer';

// project imports
import Loader from 'ui-component/Loader';
import axios from 'utils/axios';

const chance = new Chance();

// constant
const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

const verifyToken = (serviceToken) => {
    if (!serviceToken) {
        return false;
    }
    try {
        const decoded = jwtDecode(serviceToken);
        // Check if token has expiration
        if (decoded.exp) {
            return decoded.exp > Date.now() / 1000;
        }
        // If no expiration, assume token is valid
        return true;
    } catch (error) {
        console.error('Token verification failed:', error);
        return false;
    }
};

const setSession = (serviceToken) => {
    if (serviceToken) {
        localStorage.setItem('serviceToken', serviceToken);
        axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
    } else {
        localStorage.removeItem('serviceToken');
        delete axios.defaults.headers.common.Authorization;
    }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
const JWTContext = createContext(null);

export const JWTProvider = ({ children }) => {
    const [state, dispatch] = useReducer(accountReducer, initialState);

    useEffect(() => {
        const init = async () => {
            try {
                console.log('Initializing authentication...');
                const serviceToken = window.localStorage.getItem('serviceToken');
                console.log('Token found in localStorage:', !!serviceToken);

                if (serviceToken && verifyToken(serviceToken)) {
                    console.log('Token is valid, setting session...');
                    setSession(serviceToken);
                    // Try to verify token with backend, but don't logout if endpoint doesn't exist
                    try {
                        console.log('Attempting to verify token with backend...');
                        const response = await axios.get('/api/account/me');
                        const { user } = response.data;
                        console.log('Backend verification successful:', user);
                        dispatch({
                            type: LOGIN,
                            payload: {
                                isLoggedIn: true,
                                user
                            }
                        });
                    } catch (error) {
                        console.warn('Token verification endpoint not available, using local verification:', error);
                        // If the endpoint doesn't exist, just use the token from localStorage
                        // Extract user info from token if possible
                        try {
                            const decoded = jwtDecode(serviceToken);
                            const user = {
                                id: decoded.id || decoded.sub || 'user',
                                email: decoded.email || 'user@example.com',
                                name: decoded.name || decoded.firstName || 'User'
                            };
                            console.log('Using local token verification, user:', user);
                            dispatch({
                                type: LOGIN,
                                payload: {
                                    isLoggedIn: true,
                                    user
                                }
                            });
                        } catch (decodeError) {
                            console.error('Failed to decode token:', decodeError);
                            setSession(null);
                            dispatch({
                                type: LOGOUT
                            });
                        }
                    }
                } else {
                    console.log('No valid token found, logging out...');
                    dispatch({
                        type: LOGOUT
                    });
                }
            } catch (err) {
                console.error('Authentication initialization error:', err);
                dispatch({
                    type: LOGOUT
                });
            }
        };

        init();
    }, []);

    const login = async (email, password) => {
        try {
            console.log('Attempting login with email:', email);
            const response = await axios.post('/api/account/login', {
                email,
                password
            });

            console.log('Login response:', response.data);
            const { serviceToken, user } = response.data;

            if (serviceToken && user) {
                console.log('Login successful, setting session...');
                setSession(serviceToken);
                dispatch({
                    type: LOGIN,
                    payload: {
                        isLoggedIn: true,
                        user
                    }
                });
            } else {
                throw new Error('Invalid response from server');
            }
        } catch (error) {
            console.error('Login error:', error);
            if (error.response && error.response.data && error.response.data.message) {
                throw new Error(error.response.data.message);
            } else if (error.message) {
                throw new Error(error.message);
            } else {
                throw new Error('Login failed. Please try again.');
            }
        }
    };

    const register = async (email, password, firstName, lastName) => {
        // todo: this flow need to be recode as it not verified
        const id = chance.bb_pin();
        const response = await axios.post('/api/account/register', {
            id,
            email,
            password,
            firstName,
            lastName
        });
        let users = response.data;

        if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
            const localUsers = window.localStorage.getItem('users');
            users = [
                ...JSON.parse(localUsers),
                {
                    id,
                    email,
                    password,
                    name: `${firstName} ${lastName}`
                }
            ];
        }

        window.localStorage.setItem('users', JSON.stringify(users));
    };

    const logout = () => {
        setSession(null);
        dispatch({ type: LOGOUT });
    };

    const resetPassword = async (email) => {
        console.log(email);
    };

    const updateProfile = () => {};

    // Only show loader if not initialized yet
    if (!state.isInitialized) {
        return <Loader />;
    }

    return (
        <JWTContext.Provider
            value={{
                ...state,
                login,
                logout,
                register,
                resetPassword,
                updateProfile
            }}
        >
            {children}
        </JWTContext.Provider>
    );
};

JWTProvider.propTypes = {
    children: PropTypes.node
};

export default JWTContext;
