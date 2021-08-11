import axios from 'axios';
import config from '../../config';

const { api } = config;

export default async function fetchWithKey(requestModel, key) {

    return await axios({

        method: "get",
        url: `${api.baseUrl}/browse/${requestModel}?locale=en_US`,
        headers: { Authorization: `Bearer ${key}` }

    })
}