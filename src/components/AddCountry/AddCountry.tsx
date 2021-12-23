import { ReactElement, useState, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import AddModal from './AddModal';

const AddCountry = (): ReactElement => {
  const [showReq, setShowReq] = useState<boolean>(false);

  function openReq() {
    setShowReq(!showReq);
  }

  function closeReq() {
    setShowReq(!showReq);
  }

  return (
    <div>
      <AddIcon className="request_btn" onClick={openReq} />
      <AddModal open={showReq} close={closeReq} />
    </div>
  );
};

export default AddCountry;
