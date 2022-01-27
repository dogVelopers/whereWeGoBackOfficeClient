import { useSWRConfig } from 'swr';
import { del, post } from 'lib/api/client';

import { INation } from 'types';

// country post (기존 INation (img_url 제외) + img file)
type INationWithoutImage = Omit<INation, 'imageUrl'>;

interface IPostNationRequest extends Omit<INationWithoutImage, 'id'> {
  image: File;
}

interface IUpdateNationRequest extends INationWithoutImage {
  image: File;
}

const useNations = () => {
  // 데이터 최신화
  const { mutate } = useSWRConfig();

  const postNation = async ({
    continentName,
    nationName,
    introduce,
    image,
    quarantinePolicy,
  }: IPostNationRequest) => {
    const formData = new FormData();
    formData.append('file', image);

    const tempNationStringData = JSON.stringify({
      nationName,
      continentName,
      introduce,
      quarantinePolicy,
    });

    const blobNationData = new Blob([tempNationStringData], {
      type: 'application/json',
    });

    formData.append('nationInfoRequestDto', blobNationData);
    await post(`/nation-infos`, formData);

    mutate('/nation-infos');
  };

  const updateNation = async ({
    image,
    id,
    continentName,
    nationName,
    introduce,
    quarantinePolicy,
  }: IUpdateNationRequest) => {
    const formData = new FormData();
    formData.append('file', image);

    const tempNationStringData = JSON.stringify({
      nationName,
      continentName,
      introduce,
      quarantinePolicy,
    });

    const blobNationData = new Blob([tempNationStringData], {
      type: 'application/json',
    });

    formData.append('nationInfoRequestDto', blobNationData);
    await post(`/nation-infos/${id}`, formData);

    mutate('/nation-infos');
  };

  const deleteNation = async (id: number) => {
    await del(`/nation-infos/${id}`);

    mutate('/nation-infos');
  };

  return { postNation, updateNation, deleteNation };
};

export default useNations;
