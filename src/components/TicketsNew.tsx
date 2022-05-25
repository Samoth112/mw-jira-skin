import React from 'react';
import { Link } from 'react-router-dom';

const TicketsNew = () => {
  return(
    <section className="tickets-new">
      <p className="tickets-new-message">Create a new:</p>
    
      <ul className="tickets-new-links">
        <li className="tickets-new-link"><Link to="/fundraiser-tickets/new">Fundraiser</Link></li>
        <li className="tickets-new-link"><Link to="/resends/new">Resend</Link></li>
        <li className="tickets-new-link"><Link to="/forwards/new">Forward</Link></li>
        <li className="tickets-new-link"><Link to="/surveys/new">Survey</Link></li>
      </ul>
    </section>
  )
};

export default TicketsNew