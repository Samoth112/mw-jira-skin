import { createSlice } from '@reduxjs/toolkit';
import { EmailState } from '../../app/interfaces';
import { Action, StringPayload, BooleanPayload, BooleanInputTypePayload, CollectInputsPayload } from '../../app/interfaces'

export interface FundraiserState extends EmailState {
  donationURL: string;
}

const initialState: FundraiserState = {
  guidanceForWriters: "", 
  guidanceForQA: "", 
  copyDraft: "", 
  forCopyQA: "", 
  finalCopyForProd: "", 
  finalClientApproved: "", 
  emailVersioning: "",
  messageType: "", 
  wrapperType: "", 
  emailFromName: "", 
  emailSubjectLine: "",
  donationURL: "", 
  previewText: "", 
  graphicAltText: "",
  details: {
    status: "Drafting Copy",
    startTransition: false,
    assignee: "",
    assignCQATo: "", 
    assignPQAto: "", 
    draftDue: "",
    toPreProd: "", 
    toCopyQA: "",
    copyQADue: "",  
    copyToClient: "", 
    copyToAccount: "", 
    toProd: "", 
    toProdQA: "", 
    prodQADue: "",
    finalDueToProd: "",  
    sendDate: "mm/dd/yyyy",
    sendTime: "9:00",
    copyToAccountDate: "mm/dd/yyyy",
    copyToAccountTime: "9:00",
    copyToClientDate: "mm/dd/yyyy",
    copyToClientTime: "9:00",
    testToClientDate: "mm/dd/yyyy",
    testToClientTime: "9:00",
    qaChecklist: {
      qaRemind1: false,
      qaRemind2: false,
      qaRemind3: false
    },
    prodChecklist: {
      prodRemind1: false,
      prodRemind2: false,
      prodRemind3: false
    }
  }
}

interface FundraiserInputs {
  guidanceForWriters: string;
  guidanceForQA: string;
  copyDraft: string;
  forCopyQA: string;
  finalCopyForProd: string;
  finalClientApproved: string;
  emailVersioning: string;
  messageType: string;
  wrapperType: string;
  emailFromName: string;
  emailSubjectLine: string;
  donationURL: string;
  previewText: string;
  graphicAltText: string;
}

const fundraiserSlice = createSlice({
  name: "fundraiser",
  initialState,
  reducers: {
    transitionStatus(state: FundraiserState, action: Action<BooleanPayload>) {
      state.details.startTransition = action.payload.value;
    },
    setDraftingCopy(state: FundraiserState, action: Action<StringPayload>) {
      state.guidanceForWriters = action.payload.value;
      state.details.qaChecklist.qaRemind1 = false;
      state.details.qaChecklist.qaRemind2 = false;
      state.details.qaChecklist.qaRemind3 = false;
      state.details.prodChecklist.prodRemind1 = false;
      state.details.prodChecklist.prodRemind2 = false;
      state.details.prodChecklist.prodRemind3 = false;
    },
    setDraftWithAccount(state: FundraiserState, action: Action<FundraiserState>) {
      state.guidanceForWriters = action.payload.guidanceForWriters;
      state.copyDraft = action.payload.copyDraft;
      state.details.qaChecklist.qaRemind1 = false;
      state.details.qaChecklist.qaRemind2 = false;
      state.details.qaChecklist.qaRemind3 = false;
      state.details.prodChecklist.prodRemind1 = false;
      state.details.prodChecklist.prodRemind2 = false;
      state.details.prodChecklist.prodRemind3 = false;
    },
    setCQA(state: FundraiserState, action: Action<FundraiserState>) {
      state.messageType = action.payload.messageType;
      state.wrapperType = action.payload.wrapperType;
      state.emailSubjectLine = action.payload.emailSubjectLine;
      state.emailFromName = action.payload.emailFromName;
      state.guidanceForQA = action.payload.guidanceForQA;
      state.details.qaChecklist.qaRemind1 = false;
      state.details.qaChecklist.qaRemind2 = false;
      state.details.qaChecklist.qaRemind3 = false;
      state.details.prodChecklist.prodRemind1 = false;
      state.details.prodChecklist.prodRemind2 = false;
      state.details.prodChecklist.prodRemind3 = false;
    },
    setPQA(state: FundraiserState, action: Action<FundraiserState>) {
      state.messageType = action.payload.messageType;
      state.finalClientApproved = action.payload.finalClientApproved;
      state.emailVersioning = action.payload.emailVersioning;
      state.donationURL = action.payload.donationURL;
      state.previewText = action.payload.previewText;
      state.graphicAltText = action.payload.graphicAltText;
      state.details.qaChecklist.qaRemind1 = false;
      state.details.qaChecklist.qaRemind2 = false;
      state.details.qaChecklist.qaRemind3 = false;
      state.details.prodChecklist.prodRemind1 = false;
      state.details.prodChecklist.prodRemind2 = false;
      state.details.prodChecklist.prodRemind3 = false;
    },
    toggleStartTrans(state: FundraiserState) {
      state.details.startTransition = !state.details.startTransition;
    },
    changeStatus(state: FundraiserState, action: Action<StringPayload>) {
      state.details.status = action.payload.value;
    },
    collectFundraiserInputs(state: FundraiserState, action: Action<CollectInputsPayload>) {
      console.log(action.payload);
      const inputType = action.payload.inputType as keyof FundraiserInputs;
      state[inputType] = action.payload.value;
    },
    toggleChecklistItems(state: FundraiserState, action: Action<BooleanInputTypePayload>) {
      if(action.payload.inputType.includes("qa")) {
        const inputType = action.payload.inputType as keyof FundraiserState["details"]["qaChecklist"];
        state.details.qaChecklist[inputType] = action.payload.value;
      } else {
        const inputType = action.payload.inputType as keyof FundraiserState["details"]["prodChecklist"];
        state.details.prodChecklist[inputType] = action.payload.value;
      }     
    }
  }
})

export const { transitionStatus, setDraftingCopy, setDraftWithAccount, setCQA, setPQA, toggleStartTrans, changeStatus, collectFundraiserInputs, toggleChecklistItems } = fundraiserSlice.actions
export default fundraiserSlice.reducer