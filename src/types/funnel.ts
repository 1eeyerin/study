import type { ReactElement } from 'react';
import { StrictPropsWithChildren } from '.';
import { Step } from '../hooks/useFunnel';
import { StepName } from '../constants/funnel';

export type StepType = (typeof StepName)[keyof typeof StepName];
type StepComponentType = ReactElement<typeof Step>;

export type StepProps = StrictPropsWithChildren<{
  name: StepType;
}>;

export type FunnelProps = {
  children: StepComponentType[];
};
