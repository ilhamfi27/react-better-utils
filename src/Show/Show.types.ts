import React, { FC, PropsWithChildren } from 'react';

export type ShowWhenType = PropsWithChildren<{
  isTrue: boolean;
}>;
export type ShowElseType = PropsWithChildren<{
  render?: boolean;
}>;
export interface ShowI extends FC<PropsWithChildren> {
  When: FC<ShowWhenType>;
  Else: FC<ShowElseType>;
}
