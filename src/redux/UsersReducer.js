import usersAPI from "../api/api"

let initialState = {
    users: [],
    currentPage: 1,
    totalShowPage: 15,
    totalCount: 0,
    isFetching: false,
    buttonDisable: false,
    usersIdButtonDisabledArray: []
}

const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
            case "UNFOLLOW":
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {
                                ...u,
                                followed: false
                            }
                        }
                        return u;
                    })
                }
                case "SET_USERS":
                    return {
                        ...state,
                        users: action.users
                    }
                    case "TOTAL_COUNT":
                        return {
                            ...state,
                            totalCount: action.totalCount
                        }

                        case "CURRENT_PAGE":
                            return {
                                ...state,
                                currentPage: action.currentPage
                            }
                            case "TOGGLE_PRELOADER":
                                return {
                                    ...state,
                                    isFetching: action.isFetching
                                }
                                case "TOGGLE_BUTTON_DISABLED":
                                    return {
                                        ...state,
                                        buttonDisable: action.isFetching,
                                            usersIdButtonDisabledArray: action.isFetching ? [...state.usersIdButtonDisabledArray, action.userId] :
                                            state.usersIdButtonDisabledArray.filter(e => e !== action.userId)

                                    }

                                    default:
                                        return state;
    }

}

export let FOLLOW = (id) => ({
    type: "FOLLOW",
    userID: id
})
export let UNFOLLOW = (id) => ({
    type: "UNFOLLOW",
    userID: id
})
export let SET_USERS = (users) => ({
    type: "SET_USERS",
    users: users
})
export let TOTAL_COUNT = (totalCount) => ({
    type: "TOTAL_COUNT",
    totalCount: totalCount
})
export let CURRENT_PAGE = (currentPage) => ({
    type: "CURRENT_PAGE",
    currentPage: currentPage
})
export let TOGGLE_PRELOADER = (bool) => ({
    type: "TOGGLE_PRELOADER",
    isFetching: bool
})
export let TOGGLE_BUTTON_DISABLED = (bool, userId) => ({
    type: "TOGGLE_BUTTON_DISABLED",
    isFetching: bool,
    userId
})

export const getUsersThunk = (totalShowPage, currentPage) => {
    return (dispatch) => {
        dispatch(TOGGLE_PRELOADER(true));
        usersAPI.getUsers(totalShowPage, currentPage).then((response) => {
            dispatch(TOGGLE_PRELOADER(false));
            dispatch(SET_USERS(response.items));
            dispatch(TOTAL_COUNT(response.totalCount));
        });
    }
}

export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(TOGGLE_BUTTON_DISABLED(true, userId));
        usersAPI.follow(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(FOLLOW(userId));
            }

            dispatch(TOGGLE_BUTTON_DISABLED(false, userId));
        });
    }
}

export const unFollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(TOGGLE_BUTTON_DISABLED(true, userId));
        usersAPI.unfollow(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(UNFOLLOW(userId));
            }

            dispatch(TOGGLE_BUTTON_DISABLED(false, userId));
        });
    }
}

export default usersReducer;