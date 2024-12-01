import { ReactNode } from 'react';

export interface EachProps<T> {
  render: ({ item, index }: { item: T; index: number }) => ReactNode;
  of: T[];
}
