import { Children } from 'react';
import { EachProps } from './Each.types';

export const Each = <T,>({ render, of }: EachProps<T>) => {
  return Children.toArray(of.map((item, index) => render({ item, index })));
};
