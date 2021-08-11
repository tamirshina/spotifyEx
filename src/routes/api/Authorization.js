import axios from 'axios';
import config from '../../config';

const { api } = config;

export default async function Authenticate() {

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");

    return await axios({

        method: "post",
        url: "https://accounts.spotify.com/api/token",
        data: urlencoded,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Authorization": `Basic ${btoa(`${api.clientId}:${api.clientSecret}`)}`
        }
    })

}