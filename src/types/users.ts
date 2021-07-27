 export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export enum UsersActionTypes {
        FETCH_USERS = "FETCH_USERS",
        FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
        FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

export interface FetchedUsersAction {
    type: UsersActionTypes.FETCH_USERS;
}

export interface FetchedUsersSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

export interface FetchedUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UsersAction = FetchedUsersAction | FetchedUsersSuccessAction | FetchedUsersErrorAction;

// interface UsersAction {
//     type: string;
//     payload ? : any;
// } 