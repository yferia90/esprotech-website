import axios from 'axios';
import Env from '../../env';

// Set config defaults when creating the instance
const fetchAxios = axios.create({
    baseURL: `${Env.REACT_APP_BACKEND}`
});

const updateFetchAxios = (token) => {
    fetchAxios.defaults.headers.common['Authorization'] = token;
}

export {
    updateFetchAxios,
    fetchAxios,
}
