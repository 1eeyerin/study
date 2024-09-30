import { useState } from 'react';
import type { FunnelProps, StepProps, StepType } from '../types/funnel';
import { StepName } from '../constants/funnel';

export const Step = ({ children }: StepProps) => {
  return <>{children}</>;
};

const useFunnel = (initialStep: StepType = StepName.REGISTER) => {
  const [step, setStep] = useState<StepType>(initialStep);

  const Funnel = ({ children }: FunnelProps) => {
    if (!children) return null;

    const targetStep = children.find(childStep => childStep.props.name === step);
    if (!targetStep) return null;

    return targetStep;
  };

  Funnel.Step = Step;

  return [Funnel, setStep] as const;
};

export default useFunnel;
