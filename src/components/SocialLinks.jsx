import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";

function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      <img
        src={facebookIcon}
        alt="facebook-icon"
        className="w-8 h-8 cursor-pointer transition-all hover:opacity-60"
      />
      <img
        src={instagramIcon}
        alt="instagram-icon"
        className="w-9 h-9 cursor-pointer transition-all hover:opacity-60"
      />
      <img
        src={youtubeIcon}
        alt="youtube-icon"
        className="w-9 h-9 cursor-pointer transition-all hover:opacity-60"
      />
    </div>
  );
}

export default SocialLinks;
