import React from 'react';
import V8Proxy from './core/V8Proxy';

const V8WebAppProvider = ({ children }: React.PropsWithChildren): React.ReactElement => {
  
  (window as any).V8Proxy = V8Proxy
  
  return (
    <>
      <button id='V8WebAppEventRequestForwarder' style={{ display: 'none'}}></button>
      <button id='V8WebAppEventResponseForwarder' style={{ display: 'none'}}></button>
      <div>{children}</div>
    </>
  );
};

export default V8WebAppProvider;
