import axios from "axios"

const TWT_BASE_URL = "/api/twtapi/api/v1/twitter/TweetDetail";
const TWT_API_KEY = "5e70e833e5310c9e7849fb0ef7c416edbe52cdcb8e591864";

export const extractTweetId = (xUrl) => {
    const { pathname } = new URL(xUrl);
    const match = pathname.match(/\/status\/(\d+)/);

    if (!match) {
        throw new Error("The URL must contain a numeric tweet status ID.");
    }

    return match[1];
};

export const getTweetData = async (data) => {
    const tweetId = extractTweetId(data.url);
    const response = await axios.get(TWT_BASE_URL, {
        params: {
            tweet_id: tweetId,
            lang: "en",
        },
        headers: {
            "X-API-Key": TWT_API_KEY,
            "X-Lang": "en",
        },
        timeout: 30000,
    });
    return response.data?.data?.tweet_result?.result;
};

