import { StrictPropsWithChildren } from '.';

export type StepComponentProps<T extends string> = StrictPropsWithChildren<{
  name: T;
}>;

export type FunnelComponentProps = { children: React.ReactElement[] };
