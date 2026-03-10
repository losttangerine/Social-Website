"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Artwork } from "@/data/portfolio";

interface ArtworkModalProps {
  artworks: Artwork[];
  index: number;
  open: boolean;
  onClose: () => void;
}

export default function ArtworkModal({
  artworks,
  index,
  open,
  onClose,
}: ArtworkModalProps) {
  const slides = artworks.map((a) => ({
    src: a.src,
    width: a.width,
    height: a.height,
  }));

  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Thumbnails]}
    />
  );
}
