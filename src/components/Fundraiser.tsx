import React, { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import Details from './Details';
import TransitionForm from './TransitionForm';
import { RootState } from '../app/store';

const Fundraiser = ({children}: PropsWithChildren<Record<never,never>>): React.ReactElement => {
  const details = useSelector((state: RootState) => state.fundraiser.details);
  
  return (
    <>
      <section className="fundraiser">
        <TransitionForm />
        <Details details={details} />
      </section>
    </>
    
  );
} 

export default Fundraiser;