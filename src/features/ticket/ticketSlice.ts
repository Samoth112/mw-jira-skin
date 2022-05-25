import { createSlice } from '@reduxjs/toolkit';
import { TicketState, Action, CollectInputsPayload } from '../../app/interfaces';

const initialState: TicketState = {
  ticketTitle: "",
  ticketClient: "",
  ticketNumber: "",
  labels: [],
  notes: "",
  comments: ""
}

interface TicketInputs {
  ticketTitle: "",
  ticketClient: "",
  ticketNumber: "",
  notes: "",
  comments: ""
}

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    createTicket(state, action) {
      state.ticketNumber = `${action.payload.ticketClient}-001`;
      state.ticketTitle = action.payload.ticketTitle
    },
    collectTicketInputs(state: TicketState, action: Action<CollectInputsPayload>) {
      const inputType = action.payload.inputType as keyof TicketInputs;
      state[inputType] = action.payload.value;
    }
  }
})

export const { createTicket, collectTicketInputs } = ticketSlice.actions;
export default ticketSlice.reducer
