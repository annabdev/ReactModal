import { createMachine, state, transition} from 'robot3';

const confirmationFlow = createMachine({
    //state machine goes here
    initial: state(
        transition('begin', 'confirming')
    ),
    confirming: state(
        transition('confi')
    ),
    loading: state()
});