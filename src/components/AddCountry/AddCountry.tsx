import { ReactElement, useState, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import AddModal from './AddModal';

const AddCountry = (): ReactElement => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <AddIcon className="addModal-btn" onClick={openModal} />
      <AddModal open={showModal} close={closeModal} />
    </div>
  );
};

export default AddCountry;
