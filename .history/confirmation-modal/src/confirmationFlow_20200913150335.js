import { createMachine, state, transition, interpret, invoke} from 'robot3';

cons

const confirmationFlow = createMachine({
    //state machine goes here
    initial: state(
        transition('begin', 'confirming')
    ),
    confirming: state(
        transition('confirm', 'loading'),
        transition('cancel', 'initial')
    ),
    loading: state()
});

const service = interpret(confirmationFlow, () => {
    console.log('state changed to', service.machine.current)
})

service.send('begin')
service.send('cancel')