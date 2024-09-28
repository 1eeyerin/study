import { useState } from 'react';
import Register from './Register';
import ResidentId from './ResidentId';
import Address from './Address';
import Finish from './Finish';

const Funnel = () => {
  const [step, setStep] = useState<number>(3);

  if (step === 0) {
    return <Register />;
  }

  if (step === 1) {
    return <ResidentId />;
  }

  if (step === 2) {
    return <Address />;
  }

  if (step === 3) {
    return <Finish />;
  }

  return null;
};

export default Funnel;
