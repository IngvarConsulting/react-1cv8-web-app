import { V8Proxy } from './core';
import { useCallback, useMemo } from 'react';

export type GetItemFunction = (key: string) => Promise<string>;

export type SetItemFunction = (key: string, value: string) => Promise<void>;


const useV8FormAttribute = (): {
  getItem: GetItemFunction;
  setItem: SetItemFunction;
} => {

  const proxy = V8Proxy

  const getItem: GetItemFunction = useCallback(
    key =>
      new Promise((resolve) => {
        proxy?.fetch('GetFormAttribute', key).then((response) => {
          resolve(response.text());
        });
      }),
    [proxy],
  );
  const setItem: SetItemFunction = useCallback(
    (key, value) =>
      new Promise((resolve) => {
        proxy?.fetch('SetFormAttribute', { key, value} ).then(() => {
          resolve();
        });
      }),
    [proxy],
  );

  return useMemo(
    () => ({
      getItem,
      setItem
    }),
    [],
  );
};

export default useV8FormAttribute;
