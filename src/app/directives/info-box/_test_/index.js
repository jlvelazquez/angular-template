import test from 'tape';
import Link from '../link.js';

test('If the attribute is funny...', t => {
    
    let attributes = { funny: '' };
    let scope = { directiveContent: '' };
    
    new Link(scope, attributes);

    t.plan(1);
    t.equal(scope.directiveContent, 'This is a funny directive!', 'the directive returns "This is a funny directive!"!');
});

test('If the attribute is not funny...', t => {
    
    let attributes = {};
    let scope = { directiveContent: '' };
    
    new Link(scope, attributes);

    t.plan(1);
    t.equal(scope.directiveContent, 'This is a directive!', 'the directive returns "This is a directive!"!');
});
