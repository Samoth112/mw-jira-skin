import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transitionStatus } from  '../features/fundraiser/fundraiserSlice';
import { RootState } from '../app/store';

const Status = ():React.ReactElement => {
  const details = useSelector((state: RootState) => state.fundraiser.details);
  const status = details.status;
  const startTrans = details.startTransition; 
  const dispatch = useDispatch();

  const transition = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(transitionStatus({value: !startTrans}));
  };
  
  return(
    <div className="status-bar">
      <p className="status">{status}</p>
      <div className="chevron" onClick={transition}></div>
    </div>
  )
}

export default Status;