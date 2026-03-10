export interface Artwork {
  id: string;
  title: string;
  description?: string;
  src: string;
  width: number;
  height: number;
  objectPosition?: string;
  bgColor?: string;
}

export interface AnimationItem {
  id: string;
  title: string;
  description?: string;
  type: "local" | "youtube" | "gif";
  src: string;
  poster?: string;
}

export const artworks: Artwork[] = [
  {
    id: "art-01",
    title: "Artwork Title 1",
    src: "/artworks/FSDJp-qWUAAHdtr.jpg",
    width: 1200,
    height: 900,
    objectPosition: "center top",
  },
  {
    id: "art-02",
    title: "Artwork Title 2",
    src: "/artworks/FdXw0WCWYAcagT8.jpg",
    width: 1200,
    height: 900,
    objectPosition: "center top",
  },
  {
    id: "art-03",
    title: "Artwork Title 3",
    src: "/artworks/FuH7r4EXoAEAY4l.jpg",
    width: 1200,
    height: 900,
    objectPosition: "center top",
  },
  {
    id: "art-04",
    title: "Artwork Title 4",
    src: "/artworks/G2jUAJXXMAAuhLE.jpg",
    width: 1200,
    height: 900,
    objectPosition: "center top",
  },
  {
    id: "art-05",
    title: "Artwork Title 5",
    src: "/artworks/G2yyNF7WQAAxCus.jpg",
    width: 1200,
    height: 900,
    objectPosition: "center top",
  },
  {
    id: "art-06",
    title: "Artwork Title 6",
    src: "/artworks/GELlsHTWkAAso-N.jpg",
    width: 1200,
    height: 900,
    objectPosition: "center top",
  },
];

export const emotes: Artwork[] = [
  {
    id: "emote-01",
    title: "Emote Title 1",
    src: "/emotes/FumP-R7WYAEiUkF.jpg",
    width: 512,
    height: 512,
  },
  {
    id: "emote-02",
    title: "Emote Title 2",
    src: "/emotes/G-HPywkWsAATCK1.jpg",
    width: 512,
    height: 512,
  },
  {
    id: "emote-03",
    title: "Emote Title 3",
    src: "/emotes/G1_Psd7XEAA_LMl.png",
    width: 512,
    height: 512,
    bgColor: "#ffffff",
  },
  {
    id: "emote-04",
    title: "Emote Title 4",
    src: "/emotes/G2DyKYSXYAAxQJy.jpg",
    width: 512,
    height: 512,
  },
  {
    id: "emote-05",
    title: "Emote Title 5",
    src: "/emotes/G98HoDnWYAAyLDR.png",
    width: 512,
    height: 512,
  },
  {
    id: "emote-06",
    title: "Emote Title 6",
    src: "/emotes/G9nPqYvWQAIAkIZ.png",
    width: 512,
    height: 512,
  },
];

export const animations: AnimationItem[] = [
  {
    id: "anim-01",
    title: "Ganyu Sleep",
    type: "gif",
    src: "/animations/ganyusleep.gif",
  },
  {
    id: "anim-02",
    title: "Raiden Sip",
    type: "gif",
    src: "/animations/raidensip.gif",
  },
  {
    id: "anim-03",
    title: "Yae Wow",
    type: "gif",
    src: "/animations/yaewow.gif",
  },
];
