export interface EmailState extends Details {
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
  previewText: string;
  graphicAltText: string;
}

export interface Details {
  details: {
    status: string;
    startTransition: boolean;
    assignee: string;
    assignCQATo: string;
    assignPQAto: string;
    draftDue: string;
    toPreProd: string;
    toCopyQA: string;
    copyQADue: string;
    copyToClient: string;
    copyToAccount:string;
    toProd: string;
    toProdQA: string;
    prodQADue: string;
    finalDueToProd: string;
    sendDate: string;
    sendTime: string;
    copyToAccountDate: string;
    copyToAccountTime: string;
    copyToClientDate: string;
    copyToClientTime: string;
    testToClientDate: string;
    testToClientTime: string;
    qaChecklist: {
      qaRemind1: boolean;
      qaRemind2: boolean;
      qaRemind3: boolean
    };
    prodChecklist: {
      prodRemind1: boolean;
      prodRemind2: boolean;
      prodRemind3: boolean
    }
  }
}

export interface TicketState {
  ticketTitle: string;
  ticketClient: string; 
  ticketNumber: string;
  labels: string[];
  notes: string;
  comments: string;
}

export interface TransitionFormState {
  guidanceForWriters: string;
  copyDraft:string;
  forCopyQA: string;
  messageType: string;
  wrapperType: string;
  emailSubjectLine: string;
  emailFromName: string;
  guidanceForQA: string;
  finalClientApproved: string;
  emailVersioning: string;
  donationURL: string;
  previewText: string;
  graphicAltText: string
}

export interface Action<T> {
  type: string;
  payload: T;
}

export interface StringPayload {
  value: string;
}

export interface BooleanPayload {
  value: boolean;
}

export interface BooleanInputTypePayload {
  inputType: string;
  value: boolean;
}

export interface CollectInputsPayload {
  inputType: string;
  value: string
}