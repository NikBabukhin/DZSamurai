import {UserType} from "../HW8";

type SortUpACType = {
    type: 'sort',
    payload: 'up',
}
type SortDownACType = {
    type: 'sort',
    payload: 'down',
}
type CheckAgeACType = {
    type: 'check',
    payload: number,
}
type ActionType = SortUpACType | SortDownACType | CheckAgeACType;

export const homeWorkReducer = (state: UserType, action: ActionType): UserType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'down') {
                return [...state].sort((a, b) => a.age - b.age)
            } else {
                return [...state].sort((a, b) => b.age - a.age)
            }
        }
        case 'check': {
            return state.filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}

export const sortUpAC = (): SortUpACType => ({type: 'sort', payload: 'up'});
export const sortDownAC = (): SortDownACType => ({type: 'sort', payload: 'down'});
export const checkAgeAC = (): CheckAgeACType => ({type: 'check', payload: 18});