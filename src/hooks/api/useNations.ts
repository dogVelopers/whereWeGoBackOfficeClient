import { useSWRConfig } from 'swr';
import { del, post, put } from 'lib/api/client';

import { INation } from 'types';

// country post (기존 INation (img_url 제외) + img file)
type INationWithoutImage = Omit<INation, 'image_url'>;

interface IPostNationRequest extends Omit<INationWithoutImage, 'id'> {
  imageRecord: File;
}

interface IUpdateNationRequest extends INationWithoutImage {
  imageRecord: File;
}

const useNations = () => {
  // 데이터 최신화
  const { mutate } = useSWRConfig();

  const postNation = (nation: IPostNationRequest) => {
    post(`/nation-infos`, {
      ...nation,
    });

    mutate('/nations');
  };

  const updateNation = (nation: IUpdateNationRequest) => {
    put(`/nation-infos/${nation.id}`, {
      ...nation,
    });

    mutate('/nations');
  };

  const deleteNation = (id: number) => {
    del(`/nation-infos/${id}`);

    mutate('/nations');
  };

  return { postNation, updateNation, deleteNation };
};

export default useNations;
