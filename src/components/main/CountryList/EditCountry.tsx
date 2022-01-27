import { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import styled from 'styled-components';
import NationForm from 'components/common/NationForm';

interface ICountryFormProps {
  id: number;
  putImageUrl: string;
  putNationName: string;
  putContinentName: string;
  putIntroduce: string;
  putQuarantinePolicy: string;
}

export const EditCountry = ({
  id,
  putImageUrl,
  putNationName,
  putContinentName,
  putIntroduce,
  putQuarantinePolicy,
}: ICountryFormProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <ButtonIconStyle>
        <EditIcon onClick={() => setOpenModal((openModal) => !openModal)} />
      </ButtonIconStyle>

      {openModal && (
        <NationForm
          isOpenModal={openModal}
          setIsOpenModal={setOpenModal}
          id={id}
          imageUrl={putImageUrl}
          nationName={putNationName}
          continentName={putContinentName}
          introduce={putIntroduce}
          quarantinePolicy={putQuarantinePolicy}
        />
      )}
    </>
  );
};

const ButtonIconStyle = styled.span`
  padding: 5px;
`;
