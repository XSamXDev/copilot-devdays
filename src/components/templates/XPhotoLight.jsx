import { useContext } from "react";
import { TemplateContext } from "../../context/TemplateContext";
import { MdVerified } from "react-icons/md";
import { RiShare2Line, RiTwitterXFill } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart, FaRetweet } from "react-icons/fa6";

const XPhotoLight = () => {
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

  const imageUrl =
    tweet?.extended_entities?.media?.[0]?.media_url_https ||
    "https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-800x525.jpg";

  return (
    <div className="w-full max-w-sm rounded-xl bg-white p-3 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-2">
          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full">
            <img
              className="h-full w-full object-cover"
              src={profileImageUrl}
              alt="Profile"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <h1 className="truncate text-sm font-bold text-gray-900">
                {name}
              </h1>

              {isVerified && (
                <MdVerified
                  className="shrink-0 text-blue-500"
                  size={16}
                />
              )}
            </div>

            <h1 className="truncate text-sm text-gray-500">
              @{username}
            </h1>
          </div>
        </div>

        <RiTwitterXFill
          className="shrink-0 text-black"
          size={35    }
        />
      </div>

      <div className="mt-3">
        <p className="whitespace-pre-wrap wrap-break-word text-sm leading-5 text-gray-900">
          {content.split("https://")[0].trim()}
        </p>
      </div>

      <div className="mt-3 overflow-hidden rounded-xl">
        <img
          className="object-cover"
          src={imageUrl}
          alt="Tweet Media"
        />
      </div>

      <div className="mt-2 text-xs text-gray-500">
        {timestamp.toLocaleString()}
      </div>

      <div className="mt-3 flex items-center justify-between px-2 text-gray-500">
        <div className="flex items-center gap-1.5 text-sm">
          <FaRegComment size={15} />
          <span>{reply}</span>
        </div>

        <div className="flex items-center gap-1.5 text-sm">
          <FaRetweet size={16} />
          <span>{retweet}</span>
        </div>

        <div className="flex items-center gap-1.5 text-sm">
          <FaRegHeart size={16} />
          <span>{like}</span>
        </div>

        <RiShare2Line size={17} />
      </div>
    </div>
  );
};

export default XPhotoLight;