import React, { FC, PropsWithChildren, ReactNode } from 'react';

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

interface EachProps<T> {
    render: ({ item, index }: {
        item: T;
        index: number;
    }) => ReactNode;
    of: T[];
}

declare const Each: <T>({ render, of }: EachProps<T>) => (string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal)[];

export { Each, Show };
