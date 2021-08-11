
import Authenticate from "./Authorization";
import fetchWithKey from "./FetchWithKey";

export default async function makeRequest(requestModel) {

    let result = {};

    await Authenticate()
        .then(async function (response) {

            console.log("data", response);

            return await fetchWithKey(requestModel, response.data.access_token)
                .then(res => {
                    console.log("two", res.data);

                    result = res.data;
                });
        })
        .catch(error => {
            console.log(error);
        });

    return result;

}