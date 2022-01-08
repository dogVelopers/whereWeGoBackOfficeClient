import { useSWRConfig } from 'swr';
import { del, post, put } from 'lib/api/client';

import { INation } from 'types';

// country post (기존 INation (img_url 제외) + img file)
// image_url, id 2개 props omit 시 에러 발생.
// type INationWithoutImage = Omit<INation, 'image_url'>;

// interface IPostNationRequest extends INationWithoutImage {
//   image_record: File;
// }

interface IPostNationRequest {
  introduce: string;
  nation_name: string;
  continent_name: string;
  quarantine_policy: string;
  image_record: File;
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

  const updateNation = (id: number, setForm: FormData) => {
    put(`/nation-infos/${id}`, {
      ...setForm,
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
