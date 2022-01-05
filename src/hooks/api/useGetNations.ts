import useSWR from 'swr';
import { fetcher } from 'lib/api/fetcher';
import { INation } from 'modules/types';

function useGetNations() {
  const { data } = useSWR<INation[]>('/nations', fetcher);

  return { data };
}

export default useGetNations;
