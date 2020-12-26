let initialState = {
    dialogData: [{
            id: 1,
            name: "Katia"
        },
        {
            id: 2,
            name: "Vasia"
        },
        {
            id: 3,
            name: "Petia"
        },
    ],
    messageData: [{
            id: 1,
            message: "Hi",
            from: "Me"
        },
        {
            id: 2,
            message: "How are you?",
            from: "Me"
        },
        {
            id: 3,
            message: "Ok, How are you to?",
            from: "Katia"
        },
    ]    
}

const dialogsReducer = (state = initialState, action) => {
  

    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,                
                messageData: [
                    ...state.messageData,
                    {
                        id: 4,
                        message: action.text,
                        from: "me"
                    }
                ]
            }        
       
        default:
            return state;
    }

}
export let addMessageAction = (text) => ({
    type: "ADD-MESSAGE",
    text
})


export default dialogsReducer;