import RDConsts from '../../Utils/ReduxConstants';

const initialState = {  Username: '' , Password:'' };

const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case RDConsts.SAVE_LOGIN:
            return {
                ...state,
                Username:action.payload.username,
                Password:action.payload.password
            };
            default: return state;
        }
    }
export default LoginReducer;