import React, { PropsWithChildren } from 'react';
import Fundraiser from './Fundraiser';
import Ticket from './Ticket';

const FundraiserTicket = ({children}: PropsWithChildren<Record<never, never>>): React.ReactElement => {
  return(
    <div className="fundraiser-ticket">
      <Ticket>
        <Fundraiser />
      </Ticket>
    </div>
  );
}

export default FundraiserTicket;