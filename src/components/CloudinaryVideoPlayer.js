'use client';

import dynamic from "next/dynamic";
import "next-cloudinary/dist/cld-video-player.css";

const CldVideoPlayer = dynamic(
  () => import("next-cloudinary").then((mod) => mod.CldVideoPlayer),
  {
    ssr: false,
  }
);

const hasCloudinaryConfig = Boolean(
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
);

export default function CloudinaryVideoPlayer({
  className,
  fallbackClassName,
  fallbackMessage = "Video preview unavailable.",
  ...props
}) {
  if (!hasCloudinaryConfig) {
    return (
      <div
        className={
          fallbackClassName ||
          className ||
          "flex min-h-56 items-center justify-center rounded-2xl bg-slate-100 p-6 text-center text-sm text-slate-500"
        }
      >
        {fallbackMessage}
      </div>
    );
  }

  return <CldVideoPlayer className={className} {...props} />;
}
