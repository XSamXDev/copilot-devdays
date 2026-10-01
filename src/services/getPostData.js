import axios from "axios"

export const getTweetData = async (data) => {
    const response = await axios.post("http://localhost:8000/generate", {
        url: data.url,
    });
    return response.data
}