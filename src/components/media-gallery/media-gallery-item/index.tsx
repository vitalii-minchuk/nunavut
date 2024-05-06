import { ICloudinaryResource } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  resource: ICloudinaryResource;
}

export const MediaGalleryItem = (props: Props) => {
  const { resource } = props;
  return (
    <Link href={`/${resource.public_id}`}>
      <Image
        src={resource.secure_url}
        alt="resource"
        width={resource.width}
        height={resource.height}
      />
    </Link>
  );
};
