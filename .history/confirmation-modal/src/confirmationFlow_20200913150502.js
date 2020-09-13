import { createMachine, state, transition, interpret, invoke, reduce} from 'robot3';

const deleteSomething = async () => {

}

const confirmationFlow = createMachine({
    //state machine goes here
    initial: state(
        transition('begin', 'confirming')
    ),
    confirming: state(
        transition('confirm', 'loading'),
        transition('cancel', 'initial')
    ),
    loading: invoke(deleteSomething,
        transition('done', 'initial'),
        transition('error', 'confirming'),
        reduce((context, eve))
)
});

const service = interpret(confirmationFlow, () => {
    console.log('state changed to', service.machine.current)
})

service.send('begin')
service.send('cancel')