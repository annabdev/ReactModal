import { createMachine, state, transition} from 'robot3';

const confirmationFlow = createMachine({
    //state machine goes here
    initial: state(
        transition('begin', 'confirmi')
    ),
    confirming: state(),
    loading: state()
});