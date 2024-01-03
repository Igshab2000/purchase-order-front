import type { FC } from 'react';
import { useMemo, useState } from 'react';
import { DataContext, type TData } from './DataContext';

export const DataProvider: FC = ({ children }) => {
  const [data, setData] = useState<TData>({});

  const defaultValue = useMemo(() => {
    return {
      data,
      setData,
    };
  }, [data]);

  return <DataContext.Provider value={defaultValue}>{children}</DataContext.Provider>;
};
