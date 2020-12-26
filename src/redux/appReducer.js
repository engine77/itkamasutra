import {authUserThunk} from "./authReducer"
let initialState = {
    initialized: false,   
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case "INITIALIZED-APP":
            return {
                ...state,
                initialized:true
            }           
            default:
                return state;
    }

}
let appInitialized = () => ({
    type: "INITIALIZED-APP"
})

export const appInitializedThunk = () => (dispatch)=>{
  let result = dispatch(authUserThunk());
  Promise.all([result]).then(()=>{
    dispatch(appInitialized()); 
  })
  
}
export default appReducer;