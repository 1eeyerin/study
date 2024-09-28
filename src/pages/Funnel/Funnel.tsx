import { useState } from 'react';
import Register from './Register';
import ResidentId from './ResidentId';
import Address from './Address';
import Finish from './Finish';

const Funnel = () => {
  const [step, setStep] = useState<string>('가입방식');

  return (
    <>
      {step === '가입방식' && <Register onNext={() => setStep('주민등록번호')} />}
      {step === '주민등록번호' && <ResidentId onNext={() => setStep('주소')} />}
      {step === '주소' && <Address onNext={() => setStep('가입성공')} />}
      {step === '가입성공' && <Finish />}
    </>
  );
};

export default Funnel;
