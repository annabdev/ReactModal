import React from 'react';
import Modal from 'react-modal';
import { confirmationFlow } from './confirmationFlow';
import { useMachine } from 'react-robot';

async function doSomethingCustom() {
  //pretend to delete something
  return new Promise((resolve, reject) => {
    console.log('Beginning custom action...');
    setTimeout(() => {
      console.log('Done custom action');
      reject('Oh no!');
    }, 1000);
  });
}
export default function App() {
  const [current, send] = useMachine(confirmationFlow);
  return (
  <div>
    <h1>Modal Test</h1>
    Current state: {current.name}

    <button onClick={() =>
    send({
      type: 'begin',
      onCommit: (context, event) => doSomethingCustom()
    })
    }
>
  Destroy Something Important
</button>

    <Modal
        onRequestClose={() => send('cancel')}
        isOpen = {
          current.name === 'confirming' ||
          current.name === 'loading'
          }
        >
        {current.context.error}
          Are you sure?!
          <button onClick={() => send('cancel')}>
            Cancel
          </button>
          <button onClick={() => send('confirm')}>
            Yes Definitely
          </button>
        </Modal>
  </div>
  );
}