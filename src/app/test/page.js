'use client'
import CloudinaryVideoPlayer from "@/components/CloudinaryVideoPlayer";

const items = [
  { id: 0, duration: "1:00", publicId: "Video11_dnudcg" },      
];

export default function Page() {  // ← Fonction composant!
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <CloudinaryVideoPlayer
          key={item.id}
          src={item.publicId}
          className="w-full h-auto rounded-2xl"
          controls
          loop
          muted
          fallbackMessage="Add NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME to preview this test video."
        />
      ))}
    </div>
  );
}
