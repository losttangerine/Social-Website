export interface SocialLink {
  id: string;
  label: string;
  url: string;
  username: string;
  brandColor: string;
  iconName: string;
}

export const socials: SocialLink[] = [
  {
    id: "twitch",
    label: "Twitch",
    url: "https://www.twitch.tv/lost_tangerine",
    username: "@lost_tangerine",
    brandColor: "#9146FF",
    iconName: "FaTwitch",
  },
  {
    id: "youtube",
    label: "YouTube",
    url: "https://www.youtube.com/@lost_tangerine",
    username: "@lost_tangerine",
    brandColor: "#FF0000",
    iconName: "FaYoutube",
  },
  {
    id: "tiktok",
    label: "TikTok",
    url: "https://www.tiktok.com/@lost.tangerine",
    username: "@lost.tangerine",
    brandColor: "#ffffff",
    iconName: "FaTiktok",
  },
  {
    id: "twitter",
    label: "X / Twitter",
    url: "https://x.com/LostTangerine",
    username: "@LostTangerine",
    brandColor: "#1DA1F2",
    iconName: "FaXTwitter",
  },
];
