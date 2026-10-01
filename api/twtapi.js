const TWT_API_URL = "https://api.twtapi.com/api/v1/twitter/TweetDetail";
const TWT_API_KEY =
  globalThis.process?.env?.X_API_KEY ||
  "5e70e833e5310c9e7849fb0ef7c416edbe52cdcb8e591864";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const { tweet_id: tweetId } = request.query;

  if (!tweetId || !/^\d+$/.test(tweetId)) {
    return response.status(400).json({ error: "A numeric tweet_id is required" });
  }

  try {
    const apiResponse = await fetch(
      `${TWT_API_URL}?tweet_id=${encodeURIComponent(tweetId)}&lang=en`,
      {
        headers: {
          "X-API-Key": TWT_API_KEY,
          "X-Lang": "en",
        },
      },
    );

    const body = await apiResponse.text();
    response.status(apiResponse.status);
    response.setHeader(
      "Content-Type",
      apiResponse.headers.get("content-type") || "application/json",
    );
    return response.send(body);
  } catch (error) {
    return response.status(502).json({
      error: "Unable to reach the tweet API",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
