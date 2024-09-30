import useFunnel from '../../hooks/useFunnel';
import { StepName } from '../../constants/funnel';
import { Register, ResidentId, Address, Finish } from './components';

const Funnel = () => {
  const [Funnel, setStep] = useFunnel(Object.values(StepName));

  return (
    <Funnel>
      <Funnel.Step name={StepName.REGISTER}>
        <Register onNext={() => setStep(StepName.RESIDENT_ID)} />
      </Funnel.Step>
      <Funnel.Step name={StepName.RESIDENT_ID}>
        <ResidentId onNext={() => setStep(StepName.ADDRESS)} />
      </Funnel.Step>
      <Funnel.Step name={StepName.ADDRESS}>
        <Address onNext={() => setStep(StepName.FINISH)} />
      </Funnel.Step>
      <Funnel.Step name={StepName.FINISH}>
        <Finish />
      </Funnel.Step>
    </Funnel>
  );
};

export default Funnel;
