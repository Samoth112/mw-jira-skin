// Balance resuability and specilization. In other words, don't make one component or pattern do too much.
import React, { PropsWithChildren } from 'react';
import { store } from '../app/store'

export default function Ticket ({children}: PropsWithChildren<Record<never, never>>): React.ReactElement {
  const ticketNum = store.getState().ticket.ticketNumber;
  const ticket = store.getState().ticket.ticketTitle;
  
  return(
    <section className="ticket-layout">
      <p className="ticket-title">{ticket}</p>
      <p className="ticket-num">{ticketNum}</p>
      <div className="ticket-children">
        {children}
      </div>
      <div className="ticket-notes">
        <p className="field-label">Notes</p>
        <p className="notes"></p>
      </div>
      <div className="ticket-comments">
        <h3>Comments</h3>
        <p className="comments"></p>
      </div>
    </section>
  )
}