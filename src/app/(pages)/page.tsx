import { v2 as cloudinary } from 'cloudinary';

import { MediaGallery } from '@/components/media-gallery';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function Home() {
  const { resources } = await cloudinary.api.resources({ max_results: 7 });

  return (
    <main>
      <MediaGallery resources={resources} />
    </main>
  );
}
