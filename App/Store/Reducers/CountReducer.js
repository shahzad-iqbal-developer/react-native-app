import RDConsts from '../../Utils/ReduxConstants';

const initialState = {  count: 0 };

const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case RDConsts.COUNTER_CHANGE:
            return {
                ...state,
                count:action.payload
            };
            default: return state;
        }
    }
export default countReducer;