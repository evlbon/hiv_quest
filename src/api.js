import axios from 'axios';
export const baseURL = 'https://server.goquest.online/api';

export const accessCode = (code, redirectURL) => axios({
    method: 'POST',
    url: `${baseURL}/core/accessCode`,
    headers: {
        'Content-Type': 'application/json',
    },
    data: {
        code,
        redirectURL
    }
});