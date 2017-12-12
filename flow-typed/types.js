// @flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

declare type ActionType = 'SAMPLE1' | 'SAMPLE2';

declare type ActionT<A: ActionType, P> = {
  type: A,
  payload: P
};

export type Action = ActionT<'SAMPLE1', string> | ActionT<'SAMPLE2', string>;
