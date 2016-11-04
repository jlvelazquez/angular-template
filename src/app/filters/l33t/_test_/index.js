import test from 'tape';
import l33t from '../';

test('When a character is passed...', t => {

    t.plan(4);
    t.equal(l33t('a'), '4', 'it must replace "a" with "4"!');
    t.equal(l33t('e'), '3', 'it must replace "e" with "3"!');
    t.equal(l33t('i'), '1', 'it must replace "i" with "1"!');
    t.equal(l33t('o'), '0', 'it must replace "o" with "0"!');
});

test('When a string is passed...', t => {

    t.plan(1);
    t.equal(l33t('aeiou'), '4310u', 'it must replace "aeiou" with "4310u"!');
});
