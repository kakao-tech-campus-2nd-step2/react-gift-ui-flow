import { StepLabel, PlayFunction, PlayFunctionContext } from '@storybook/types';

declare const runStep: (label: StepLabel, play: PlayFunction, context: PlayFunctionContext<any>) => void | Promise<void>;
declare const parameters: {
    throwPlayFunctionExceptions: boolean;
};

export { parameters, runStep };
