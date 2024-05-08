import { ICloudinaryResource } from '@/types';
import { MediaGalleryItem } from './media-gallery-item';

interface Props {
  resources?: ICloudinaryResource[];
}

export const MediaGallery = (props: Props) => {
  const { resources } = props;

  const showContent =
    resources && Array.isArray(resources) && resources?.length;
  return (
    <div>
      {showContent &&
        resources.map((el) => (
          <MediaGalleryItem key={el.public_id} resource={el} />
        ))}
    </div>
  );
};
