import axios from "axios"

const TWT_BASE_URL = "/api/twtapi";

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
            "X-Lang": "en",
        },
        timeout: 30000,
    });
    return response.data?.data?.tweet_result?.result;
};

