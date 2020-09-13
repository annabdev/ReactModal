import { createMachine, state, transition, interpret, invoke, reduce} from 'robot3';

const deleteSomething = async () => {
  //pret
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
        reduce((context, event) => {
            return {
                ...context,
                error: event.error
            }
        })
)
});

const service = interpret(confirmationFlow, () => {
    console.log('state changed to', service.machine.current)
})

service.send('begin')
service.send('cancel')

export { confirmationFlow };