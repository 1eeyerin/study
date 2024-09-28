import type { ReactNode } from 'react';

type StepProps = {
  if: boolean;
  children: ReactNode;
};

const Step = ({ if: condition, children }: StepProps) => {
  if (condition) return children;
  return null;
};

export default Step;
