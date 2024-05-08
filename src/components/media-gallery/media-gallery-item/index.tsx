'use client';

import Link from 'next/link';
import { ICloudinaryResource } from '@/types';
import { CldImage } from 'next-cloudinary';

interface Props {
  resource: ICloudinaryResource;
}

export const MediaGalleryItem = (props: Props) => {
  const { resource } = props;
  return (
    <Link href={`/${resource.public_id}`}>
      <div className="w-[200px]">
        <CldImage
          src={resource.public_id}
          alt="resource"
          width={resource.width}
          height={resource.height}
        />
      </div>
    </Link>
  );
};
