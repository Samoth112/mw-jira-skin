import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TicketsNew from './components/TicketsNew';
import TicketForm from './components/TicketForm';
import FundraiserTicket from './components/FundraiserTicket';
import './App.css';
import './css/ticket.css';
import './css/forms.css';
import './css/fundraiser.css';
import './css/details.scss';
import './css/status.css';



function App(): React.ReactElement {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/tickets/new" element={<TicketsNew />} />
          <Route path="/fundraiser-tickets/new" element={<TicketForm/>} />
          <Route path="/fundraiser-tickets/:id" element={<FundraiserTicket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
