import { tassign } from 'tassign';
import * as actionName from './actions';

export interface CommonState {
    globalConfig: any;
}

export const COMMON_INITAL_STATE: CommonState = {
    globalConfig: {},
};

function setGlobalConfig(state, action) {
    return tassign(state, {
        globalConfig: action.payload
    });
}

export function commonReducer(state = COMMON_INITAL_STATE, action): CommonState {

    switch (action.type) {
        case actionName.GLOBAL_CONFIG: return setGlobalConfig(state, action);
    }

    return state;

}
