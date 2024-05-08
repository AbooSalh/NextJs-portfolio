"use client";

export default function myImageLoader({ src, width, quality }) {
  return `https://ahmedsaleh.web.app/${src}?w=${width}&q=${quality || 75}`;
}
