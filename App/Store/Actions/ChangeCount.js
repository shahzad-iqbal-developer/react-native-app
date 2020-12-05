import ReduxConstants from '../../Utils/ReduxConstants';

export function ChangeCount(count) {
    return {
        type: ReduxConstants.COUNTER_CHANGE,
        payload: count
    }
}

export function PlusCount(count) {
    return {
        type: ReduxConstants.COUNTER_CHANGE,
        payload: count
    }
}