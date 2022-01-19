import useGetNations from 'hooks/api/useGetNations';
import styled from 'styled-components';

export const DropSelectBox = () => {
  const { data } = useGetNations();

  if (!data) return <div>loading ...</div>;
  console.log(data[0].continentName);
  return (
    <>
      <DropBox></DropBox>
    </>
  );
};

const DropBox = styled.div``;
