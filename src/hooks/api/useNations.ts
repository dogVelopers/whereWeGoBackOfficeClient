import { del } from 'lib/api/client';

import { INation } from 'types';

const useNations = () => {
  const postNation = (nation: INation) => {};

  const updateNation = () => {};

  const deleteNation = (id: number) => {
    del(`/nation-infos/${id}`);
  };

  return { postNation, updateNation, deleteNation };
};

export default useNations;
