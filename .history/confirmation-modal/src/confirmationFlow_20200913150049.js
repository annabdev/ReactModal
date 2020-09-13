import { createMachine, state, transition} from 'robot3';

const confirmationFlow = createMachine({
    //state machine goes here
    initial: state(
        transition('be')
    ),
    confirming: state(),
    loading: state()
});