import { ShowI, ShowWhenType, ShowElseType } from './Show.types';
import { Children, FC, PropsWithChildren, ReactElement } from 'react';

const ShowWhen: FC<ShowWhenType> = ({ children }: ShowWhenType) => {
  return <>{children}</>;
};

const ShowElse: FC<ShowElseType> = ({ children }: ShowElseType) => {
  return <>{children}</>;
};

const S: ShowI = ({ children }: PropsWithChildren) => {
  const childrenComps = Children.toArray(children);
  const checkElseComps = childrenComps.filter((child) => {
    return (child as ReactElement).type === ShowElse;
  });
  if (checkElseComps?.length > 1) {
    console.error('Only one <Show.Else> is allowed');
  }
  const whenComp = childrenComps.find((child) => {
    return (
      (child as ReactElement).type === ShowWhen &&
      (child as ReactElement<ShowWhenType>).props.isTrue
    );
  }) as ReactElement<ShowWhenType>;
  const elseComp = checkElseComps[0] as ReactElement<ShowElseType>;
  return <>{whenComp || elseComp}</>;
};

S.When = ShowWhen;
S.Else = ShowElse;

export const Show = S;
