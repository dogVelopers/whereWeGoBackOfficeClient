import useSWR from 'swr';
import { fetcher } from 'lib/api/fetcher';
import { INation } from 'types';

function useGetNations() {
  const { data } = useSWR<INation[]>('/nation-infos', fetcher);

  return { data };
}

export default useGetNations;
