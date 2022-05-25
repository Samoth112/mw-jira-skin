import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTicket, collectTicketInputs } from '../features/ticket/ticketSlice';
import { changeStatus } from '../features/fundraiser/fundraiserSlice';
import { RootState } from '../app/store';

const TicketForm = ():React.ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ticketFormData = useSelector((state: RootState) => state.ticket);

  const collectTicketFormInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(collectTicketInputs({inputType: e.target.name, value: e.target.value}));
  }
  
  const submitTicket = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createTicket(ticketFormData));
    dispatch(changeStatus({value: "New Issue"}));
    //normally, the ticket would be created and then returned from Jira, and those values, including the Jira ticket 
    //number, will be used to create this ticket
    navigate(`/fundraiser-tickets/${ticketFormData.ticketClient}-001`);
  }

  return(
    <section className="ticket-layout">
      <form id="fundTicketForm" className="ticket-form" onSubmit={submitTicket}>
        <input className="ticket-title-field" name="ticketTitle" onChange={collectTicketFormInputs} placeholder="Ticket Title" required></input>
        <input className="ticket-num-field" name="ticketClient" onChange={collectTicketFormInputs} placeholder="Client Code" required></input>
        <input type="submit" className="submit-new" value="submit"></input>
      </form>
    </section>
  )
}

export default TicketForm;