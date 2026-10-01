import {
  FaHeart,
  FaRegBookmark,
  FaRegComment,
  FaRetweet,
} from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useContext } from "react";
import { TemplateContext } from "../../context/TemplateContext";

function TemplateOneLight() {
  const { value } = useContext(TemplateContext);

  const user = value?.core?.user_result?.result;
  const legacy = user?.legacy;
  const tweet = value?.legacy;

  const profileImageUrl =
    legacy?.profile_image_url_https ||
    "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png";

  const isVerified = user?.is_blue_verified || false;
  const name = legacy?.name || "User";
  const username = legacy?.screen_name || "user";

  const content =
    tweet?.full_text ||
    "Lorem ipsum dolor sit amet consectetur adipiscing elit";

  const timestamp = tweet?.created_at
    ? new Date(tweet.created_at)
    : new Date();

  const reply = tweet?.reply_count || 0;
  const retweet = tweet?.retweet_count || 0;
  const like = tweet?.favorite_count || 0;
  const bookmark = tweet?.bookmark_count || 0;

  const imageUrl = tweet?.extended_entities?.media?.[0]?.media_url_https;

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-black">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            className="h-11 w-11 rounded-full object-cover"
            src={profileImageUrl}
            alt="Profile"
          />

          <div className="leading-tight">
            <div className="flex items-center gap-1">
              <span className="font-semibold">{name}</span>

              {isVerified && (
                <RiVerifiedBadgeFill
                  className="text-blue-500"
                  size={17}
                />
              )}
            </div>

            <p className="text-sm text-zinc-500">@{username}</p>
          </div>
        </div>

        <button className="rounded-full bg-black px-5 py-1.5 text-sm font-bold text-white">
          Follow
        </button>
      </div>

      {/* Content */}
      <p className="mt-4 text-[16px] leading-6 text-zinc-900">
        {content.split("https://")[0].trim()}
      </p>

      {/* Image */}
      {imageUrl && (
        <img
          className="mt-3 w-full rounded-lg"
          src={imageUrl}
          alt="Post media"
        />
      )}

      {/* Timestamp */}
      <div className="mt-4 border-b border-zinc-200 pb-3">
        <p className="text-sm text-zinc-500">
          {timestamp.toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            dateStyle: "medium",
            timeStyle: "medium",
          })}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-3 text-zinc-500">
        <span className="flex items-center gap-1.5">
          <FaRegComment size={16} />
          <span className="text-xs">{reply}</span>
        </span>

        <span className="flex items-center gap-1.5">
          <FaRetweet size={18} />
          <span className="text-xs">{retweet}</span>
        </span>

        <span className="flex items-center gap-1.5">
          <FaHeart size={16} />
          <span className="text-xs">{like}</span>
        </span>

        <span className="flex items-center gap-1.5">
          <FaRegBookmark size={16} />
          <span className="text-xs">{bookmark}</span>
        </span>

        <FiShare size={18} />
      </div>
    </div>
  );
}

export default TemplateOneLight;