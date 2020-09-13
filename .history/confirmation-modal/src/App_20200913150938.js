import React from 'react';
import Modal from 'react-modal';
import { confirmationFlow } from './confirmationFlow';
import { useMachine } from 'react-robot';

export default function App() {
  const [current, send] = useMachi
  return (
  <div>
    <h1>Modal Test</h1>
    Current state: {current.name}
  </div>
  );
}