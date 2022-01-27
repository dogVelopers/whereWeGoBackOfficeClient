import {
  useEffect,
  useState,
  useMemo,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import styled from '@emotion/styled';

import { INation } from 'types';
import { debounce } from 'lodash';

interface ISearchCountryProps {
  data: INation[] | undefined;
  setSearchedData: Dispatch<SetStateAction<INation[]>>;
}

export const SearchCountry = ({
  data,
  setSearchedData,
}: ISearchCountryProps) => {
  const [keyword, setKeyword] = useState<string>('');
  const [searchedKeyword, setSearchedKeyword] = useState<string>('');

  const debouncedUpdateKeyword = useMemo(
    () =>
      debounce((value: string) => {
        setSearchedKeyword(value);
      }, 300),
    []
  );

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);

    // 호출
    debouncedUpdateKeyword(value);
  };

  useEffect(() => {
    const updateSearchedData = () => {
      if (!data) return;
      if (searchedKeyword.length === 0) {
        setSearchedData(data);
        return;
      }
      const tempData: INation[] = [];
      data.forEach((nation) => {
        if (
          nation.nationName.includes(searchedKeyword) ||
          nation.continentName.includes(searchedKeyword)
        ) {
          tempData.push(nation);
        }
      });
      setSearchedData(tempData);
    };
    updateSearchedData();
  }, [data, searchedKeyword, setSearchedData]);

  return (
    <>
      {/* search */}
      <SearchWrapper>
        <Search
          type="text"
          value={keyword}
          onChange={onChangeKeyword}
          placeholder="Search"
        />
      </SearchWrapper>
    </>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  margin-top: 2vw;
  align-items: center;
  justify-content: center;
`;
const Search = styled.input`
  width: 30vw;
  height: 2vw;
  padding: 0.5vw;
  font-size: 1vw;
  border-radius: 10px;
`;
