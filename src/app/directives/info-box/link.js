export default class Link {

    static getFunnyMessage () {

        return 'This is a funny directive!';
    }

    static getMessage () {

        return 'This is a directive!';
    }

    constructor (scope, attributes) {

        if (attributes.hasOwnProperty('funny')) {

            scope.directiveContent = Link.getFunnyMessage();

        } else {

            scope.directiveContent = Link.getMessage();
        }
    }
}
