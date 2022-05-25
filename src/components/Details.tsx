import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Details as DetailsProps } from '../app/interfaces'; 
import { toggleChecklistItems } from '../features/fundraiser/fundraiserSlice';
import Status from './Status';
import { RootState } from '../app/store';


const Details = ({details}: DetailsProps) => {
  const startTrans = details.startTransition;
  const qaRemind1 = useSelector((state: RootState) => state.fundraiser.details.qaChecklist.qaRemind1);
  const qaRemind2 = useSelector((state: RootState) => state.fundraiser.details.qaChecklist.qaRemind2);
  const qaRemind3 = useSelector((state: RootState) => state.fundraiser.details.qaChecklist.qaRemind3);
  const prodRemind1 = useSelector((state: RootState) => state.fundraiser.details.prodChecklist.prodRemind1);
  const prodRemind2 = useSelector((state: RootState) => state.fundraiser.details.prodChecklist.prodRemind2);
  const prodRemind3 = useSelector((state: RootState) => state.fundraiser.details.prodChecklist.prodRemind3);
  let disabled;
  const dispatch = useDispatch();

  const toggleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleChecklistItems({inputType: e.target.name, value: e.target.checked}))
  }

  if(qaRemind1 && qaRemind2 && qaRemind3 && prodRemind1 && prodRemind2 && prodRemind3) {
    disabled = false;
  } else {
    disabled = true;
  }

  return(
    <section className="details">
      <Status />
      {startTrans  &&
        <div className="checklist">
          <h4>QA Checklist</h4>
          <ul>
            <li>
              <input type="checkbox" className="checkbox" name="qaRemind1" onChange={toggleCheckbox} />
              <label className="checklist-label">Since this ticket is the only information QA will receive, it's helpful to provide clear, explicit instructions, especially if there is anything you'd like QA to pay particular attention to.</label>
            </li>
            <li>
              <input type="checkbox" className="checkbox" name="qaRemind2" onChange={toggleCheckbox} />
              <label className="checklist-label">Are there any obscure or hard-to-verify facts in your copy? Please provide your sources! QA will fact-check, but providing sources will save time.</label>
            </li>
            <li>
              <input type="checkbox" className="checkbox" name="qaRemind3" onChange={toggleCheckbox} />
              <label className="checklist-label">Remember to accept all changes!</label>  
            </li>
            <li>
              <input type="checkbox" className="checkbox" name="qaRemind3" onChange={toggleCheckbox} />
              <label className="checklist-label">Resend with copy edits? Don't forget to send back through copy QA!</label>  
            </li>
          </ul>
          <h4>Prod Checklist</h4>
          <ul>
            <li>
              <input type="checkbox" className="checkbox" name="prodRemind1" onChange={toggleCheckbox} />
              <label className="checklist-label">Start resends with "RS" !</label>  
            </li>
            <li>
              <input type="checkbox" className="checkbox" name="prodRemind2" onChange={toggleCheckbox} />
              <label className="checklist-label">Not for segmentation: image updates, changing links, setting up survey test or new survey variant, significant copy changes</label> 
            </li>
            <li>
              <input type="checkbox" className="checkbox" name="prodRemind3" onChange={toggleCheckbox} />
              <label className="checklist-label"><strong>WHEN IN DOUBT, put it in data issue!</strong> This will make the segmentation process much smoother with less stress and surprises. If there isn't time to make a data ticket, flag for prod in channel that new groups will need to be made to send the email AND amke it clear in the "segmentaion" field in the ticket.</label>
            </li>
          </ul>
          <input form="transForm" type="submit" disabled={disabled} />  
        </div>
      }   
      <div>
        <p>Details</p>
        <p>{details.assignee}</p>
        <p>{details.sendDate}</p>
        <p>{details.sendTime}</p>
        <p>{details.copyToAccountDate}</p>
        <p>{details.copyToAccountTime}</p>
        <p>{details.copyToClientDate}</p>
        <p>{details.copyToClientTime}</p>
        <p>{details.testToClientDate}</p>
        <p>{details.testToClientTime}</p>
      </div>
    </section>
  );
}

export default Details