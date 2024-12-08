import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/surf1.jpg",
            alt: "UrbanSurf",
            href: "",
          },
          {
            src: "/photos/surf2.jpg",
            alt: "UrbanSurf",
            href: "",
          },
          {
            src: "/photos/jungle3.jpg",
            alt: "Jungle",
            href: "",
          },
          {
            src: "/photos/palmeras4.jpg",
            alt: "Palmeras",
            href: "",
          },
          {
            src: "/photos/road5.jpg",
            alt: "Road",
            href: "",
          },
          {
            src: "/photos/mountain.jpg",
            alt: "Mountain",
            href: "",
          },
        ]}
      /> 
    </section>
  );
}
