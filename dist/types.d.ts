import { FC, PropsWithChildren } from 'react';

type ShowWhenType = PropsWithChildren<{
    isTrue: boolean;
}>;
type ShowElseType = PropsWithChildren<{
    render?: boolean;
}>;
interface ShowI extends FC<PropsWithChildren> {
    When: FC<ShowWhenType>;
    Else: FC<ShowElseType>;
}

declare const Show: ShowI;

export { Show };
