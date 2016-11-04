import di from '../../util/di';

export default class Link {

    static mapStateToThis(state) {
        return {
            messages: state.messages
        };
    }

    constructor (scope) {

        let unsubscribe = di('$ngRedux').connect(Link.mapStateToThis, {})(scope);
        scope.$on('$destroy', unsubscribe);
    }
}
