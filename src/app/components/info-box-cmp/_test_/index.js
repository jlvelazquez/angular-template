import test from 'tape';
import Controller from '../controller';

test('We must have the message...', t => {
    
    let controller = new Controller();

    t.plan(1);
    t.equal(controller.componentContent, 'This is a component!', 'the component returns "This is a component!"!');
});
