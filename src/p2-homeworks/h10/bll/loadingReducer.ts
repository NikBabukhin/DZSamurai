import {AppStoreType} from "./store";

export type StateType = {
    isLoading: boolean,
}

const initState:StateType = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionType):StateType=> { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean): any => ({type: "CHANGE-LOADING", isLoading}) // fix any