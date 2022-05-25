import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDraftingCopy, setDraftWithAccount, setCQA, setPQA, toggleStartTrans, changeStatus, collectFundraiserInputs } from '../features/fundraiser/fundraiserSlice';
import { RootState } from '../app/store';

const TransitionForm = ():React.ReactElement => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.fundraiser.details.status);
  const fundraiser = useSelector((state: RootState) => state.fundraiser)


  const collectInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(collectFundraiserInputs({inputType: e.target.name, value: e.target.value}));
  }
  
  const submitTrans = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch(status) {
      case "New Issue":
        dispatch(setDraftingCopy({value: fundraiser.guidanceForWriters}));
        dispatch(changeStatus({value: "Drafting Copy"}));
        dispatch(toggleStartTrans());
        break;
      case "Drafting Copy":
        dispatch(setDraftWithAccount(fundraiser));
        dispatch(changeStatus({value: "Copy Draft with Account"}));
        dispatch(toggleStartTrans());
        break;
      case "Copy Draft with Account":
        dispatch(setCQA(fundraiser));
        dispatch(changeStatus({value: "In Copy QA"}));
        dispatch(toggleStartTrans());
        break;
      case "In Copy QA":
        dispatch(setPQA(fundraiser));
        dispatch(changeStatus({value: "In Production QA"}));
        dispatch(toggleStartTrans());
        break;
    }
  }

  switch(status) {
    case "New Issue":
      return(
        <form id="transForm" className="transition-form" onSubmit={submitTrans}>
          <div className="field">
            <label className="field-label">Guidance for Writers</label>
            <input className="field-value" name="guidanceForWriters" onChange={collectInputs} required></input>
          </div>
        </form>
      ) 
    case "Drafting Copy":
      return(
        <form id="transForm" className="transition-form" onSubmit={submitTrans}>
          <div className="field">
            <label className="field-label">Guidance for Writers</label>
            <input className="field-value" name="guidanceForWriters" onChange={collectInputs} required value={fundraiser.guidanceForWriters}></input>
          </div>
          <div className="field">
            <label className="field-label">Copy Draft</label>
            <input className="field-value" name="copyDraft" onChange={collectInputs} required value={fundraiser.copyDraft}></input>
          </div>
        </form>
      )
    case "Copy Draft with Account":
      return(
        <form id="transForm" className="transition-form" onSubmit={submitTrans}>
          <div className="field">
            <label className="field-label">Guidance for Writers</label>
            <input className="field-value" name="guidanceForWriters" onChange={collectInputs} required value={fundraiser.guidanceForWriters}></input>
          </div>
          <div className="field">
            <label className="field-label">Copy Draft</label>
            <input className="field-value" name="copyDraft" onChange={collectInputs} required value={fundraiser.copyDraft}></input>
          </div>
          <div className="field">
            <label className="field-label">For Copy QA</label>
            <input className="field-value" name="forCopyQA" onChange={collectInputs} required value={fundraiser.forCopyQA}></input>
          </div>
          <div className="field">
            <label className="field-label">Copy Approved by Account</label>
            <input className="field-value" type="checkbox" onChange={collectInputs} required value={fundraiser.forCopyQA}></input>
          </div>
        </form>
      )
    case "In Copy QA":
      return(
        <form id="transForm" className="transition-form" onSubmit={submitTrans}>
          <div className="field">
            <label className="field-label">Email Message Type:</label>
            <input className="field-value" name="messageType" onChange={collectInputs} required value={fundraiser.messageType}></input>
          </div>
          <div className="field">
            <label className="field-label">Email Wrapper Type:</label>
            <input className="field-value" name="wrapperType" onChange={collectInputs} required value={fundraiser.wrapperType}></input>
          </div>
          <div className="field">
            <label className="field-label">Email Subject Line:</label>
            <input className="field-value" name="emailSubjectLine" onChange={collectInputs} required value={fundraiser.emailSubjectLine}></input>
          </div>
          <div className="field">
            <label className="field-label">Email From Name:</label>
            <input className="field-value" name="emailFromName" onChange={collectInputs} required value={fundraiser.emailFromName}></input>
          </div>
          <div className="field">
            <label className="field-label">Guidance for QA:</label>
            <input className="field-value" name="guidanceForQA" onChange={collectInputs} required value={fundraiser.guidanceForQA}></input>
          </div>
          <div className="field">
            <label className="field-label">Final Client Approved Copy:</label>
            <input className="field-value" name="finalClientApproved" onChange={collectInputs} required value={fundraiser.finalClientApproved}></input>
          </div>
          <div className="field">
            <label className="field-label">Email Versioning:</label>
            <input className="field-value" name="emailVersioning" onChange={collectInputs} required value={fundraiser.emailVersioning}></input>
          </div>
          <div className="field">
            <label className="field-label">Donation Page URL:</label>
            <input className="field-value" name="donationURL" onChange={collectInputs} required value={fundraiser.donationURL}></input>
          </div>
          <div className="field">
            <label className="field-label">Preview Text</label>
            <input className="field-value" name="previewText" onChange={collectInputs} required value={fundraiser.previewText}></input>
          </div>
          <div className="field">
            <label className="field-label">Graphic Alt Text</label>
            <input className="field-value" name="graphicAltText" onChange={collectInputs} required value={fundraiser.graphicAltText}></input>
          </div>
        </form>
      )
    case "In Production QA":
      return(
        <form id="transForm" className="transition-form" onSubmit={submitTrans}>
          <div className="field">
            <label className="field-label">Email Message Type:</label>
            <input className="field-value" name="messageType" onChange={collectInputs} required value={fundraiser.messageType}></input>
          </div>
          <div className="field">
            <label className="field-label">Email Wrapper Type:</label>
            <input className="field-value" name="wrapperType" onChange={collectInputs} required value={fundraiser.wrapperType}></input>
          </div>
          <div className="field">
            <label className="field-label">Email Subject Line:</label>
            <input className="field-value" name="emailSubjectLine" onChange={collectInputs} required value={fundraiser.emailSubjectLine}></input>
          </div>
          <div className="field">
            <label className="field-label">Email From Name:</label>
            <input className="field-value" name="emailFromName" onChange={collectInputs} required value={fundraiser.emailFromName}></input>
          </div>
          <div className="field">
            <label className="field-label">Guidance for QA:</label>
            <input className="field-value" name="guidanceForQA" onChange={collectInputs} required value={fundraiser.guidanceForQA}></input>
          </div>
          <div className="field">
            <label className="field-label">Final Client Approved Copy:</label>
            <input className="field-value" name="finalClientApproved" onChange={collectInputs} required value={fundraiser.finalClientApproved}></input>
          </div>
          <div className="field">
            <label className="field-label">Email Versioning:</label>
            <input className="field-value" name="emailVersioning" onChange={collectInputs} required value={fundraiser.emailVersioning}></input>
          </div>
          <div className="field">
            <label className="field-label">Donation Page URL:</label>
            <input className="field-value" name="donationURL" onChange={collectInputs} required></input>
          </div>
          <div className="field">
            <label className="field-label">Preview Text</label>
            <input className="field-value" name="previewText" onChange={collectInputs} required></input>
          </div>
          <div className="field">
            <label className="field-label">Graphic Alt Text</label>
            <input className="field-value" name="graphicAltText" onChange={collectInputs} required></input>
          </div>
        </form>
    )  
    default:
        return(
          <></>
        )  
  }
}

export default TransitionForm;