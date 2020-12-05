import ReduxConstants from '../../Utils/ReduxConstants';

export function SaveCredentials(obj) {
    return {
        type: ReduxConstants.SAVE_LOGIN,
        payload: obj
    }
}
 