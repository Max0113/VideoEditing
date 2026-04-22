'use client'
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

const items = [
  { id: 0, duration: "1:00", publicId: "Video11_dnudcg" },      
];

export default function Page() {  // ← Fonction composant!
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <CldVideoPlayer
          key={item.id}
          src={item.publicId}
          className="w-full h-auto rounded-2xl"
          controls
          loop
          muted
        />
      ))}
    </div>
  );
}