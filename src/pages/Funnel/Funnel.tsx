import { useState } from 'react';
import Register from './Register';
import ResidentId from './ResidentId';
import Address from './Address';
import Finish from './Finish';
import type { StepType } from './types';
import { Step } from '../../components/Step';

const Funnel = () => {
  const [step, setStep] = useState<StepType>('가입방식');

  return (
    <>
      <Step if={step === '가입방식'}>
        <Register onNext={() => setStep('주민등록번호')} />
      </Step>
      <Step if={step === '주민등록번호'}>
        <ResidentId onNext={() => setStep('주소')} />
      </Step>
      <Step if={step === '주소'}>
        <Address onNext={() => setStep('가입성공')} />
      </Step>
      <Step if={step === '가입성공'}>
        <Finish />
      </Step>
    </>
  );
};

export default Funnel;
