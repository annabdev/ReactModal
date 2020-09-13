import { createMachine, state, transition, interpret} from 'robot3';

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

const service = i