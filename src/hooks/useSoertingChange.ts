import { useEffect } from 'react';

export const useSortingChane = (callbackFn: () => void, sortBy: string[]) => {
  useEffect(() => {
    callbackFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...sortBy]);
};
