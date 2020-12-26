import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
	// _state: {
	// 	dialogsPage: {
	// 		dialogData: [{
	// 				id: 1,
	// 				name: "Katia"
	// 			},
	// 			{
	// 				id: 2,
	// 				name: "Vasia"
	// 			},
	// 			{
	// 				id: 3,
	// 				name: "Petia"
	// 			},
	// 		],
	// 		messageData: [{
	// 				id: 1,
	// 				message: "Hi",
	// 				from: "Me"
	// 			},
	// 			{
	// 				id: 2,
	// 				message: "How are you?",
	// 				from: "Me"
	// 			},
	// 			{
	// 				id: 3,
	// 				message: "Ok, How are you to?",
	// 				from: "Katia"
	// 			},
	// 		],
	// 		textAreaValue: "test",
	// 	},
	// 	profilePage: {
	// 		postData: [{
	// 				id: 1,
	// 				message: "Hi",
	// 				likesCount: 10
	// 			},
	// 			{
	// 				id: 2,
	// 				message: "My first posts",
	// 				likesCount: 15
	// 			},
	// 			{
	// 				id: 3,
	// 				message: "Hi3",
	// 				likesCount: 11
	// 			},
	// 		],
	// 		textAreaValue: "testProfile",
	// 	},
		
		
	// },
	
	getState(){
		return this._state;
	},

	_callSubscriber () {
		// идет передача callback из observer а он уже из index js в котором идет передача renderUpdateReact
	},	
	subsctibe (callback){
		this._callSubscriber = callback;
	},


	dispatch(action){
		// this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		// this._state.profilePage = profileReducer(this._state.profilePage, action);
	
		// this._callSubscriber(this._state);
	}

}




// export default store;