import { combineReducers } from 'redux';
import { CommonState, COMMON_INITAL_STATE, commonReducer } from './common/store';

export interface IAppState {
    common: CommonState;
}

export const INITIAL_STATE: IAppState = {
    common: COMMON_INITAL_STATE
};

export const rootReducer = combineReducers<IAppState>({
    common: commonReducer
});

