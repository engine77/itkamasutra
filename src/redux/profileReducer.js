import {
    profileAPI
} from "../api/api"

let initialState = {
    postData: [{
            id: 1,
            message: "Hi",
            likesCount: 10
        },
        {
            id: 2,
            message: "My first posts",
            likesCount: 15
        },
        {
            id: 3,
            message: "Hi3",
            likesCount: 11
        },
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    
    switch (action.type) {
            case "ADD-POST":
                return {
                    ...state,
                    postData: [
                            ...state.postData,
                            {
                                id: 4,
                                message: action.text,
                                likesCount: 0
                            }
                        ],

                }
            case "GET-USER-PROFILE":
                return {
                    ...state,
                    profile: action.profile,
                }
            case "SET_PHOTO_PROFILE":
                return {
                    ...state,
                    profile: {...state.profile, photos: action.photos},
                }
            case "UPDATE-USER-STATUS":
                return {
                    ...state,
                    status: action.status,
                }
            default:
                return state;
    }

}

export let addPostAction = (text) => ({
    type: "ADD-POST",
    text
})
export let changePostAction = (txt) => {
    return {
        type: "CHANGE-POST-STATE",
        addMessage: txt
    }
}
export let getUserProfile = (profile) => {
    return {
        type: "GET-USER-PROFILE",
        profile
    }
}
export let updateUserStatus = (status) => {
    return {
        type: "UPDATE-USER-STATUS",
        status
    }
}
export let setPhotoProfile = (photos) => {
    return {
        type: "SET_PHOTO_PROFILE",
        photos
    }
}




export const getUserThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId);

    dispatch(getUserProfile(response.data));

}

export const updateUserStatusThunk = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(updateUserStatus(status));
    }


}
export const getUserStatusThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(updateUserStatus(response.data));

}
export const getPhotoProfileThunk = (photo) => async (dispatch) => {
    let response = await profileAPI.putPhotoProfile(photo);
    if (response.data.resultCode === 0) {
        dispatch(setPhotoProfile(response.data.data.photos));
    }

}
export const putProfileFormThunk = (profile) => async (dispatch) => {
    let response = await profileAPI.putProfileForm(profile);
    if (response.data.resultCode === 0) {       
        dispatch(getUserThunk(profile.userId));
    }

}

export default profileReducer;