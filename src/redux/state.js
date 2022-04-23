let store = {
    _state: {
        profilePage: 
        {
            postsData: [
                { id: 1, message: "Hi, how are you?", likesCount: 12 },
                { id: 2, message: "Goodbo", likesCount: 25 }
                ],
            newPostText: ""
        },
        messagesPage: {
            messagesData: [
                {id: 1, message: "Hi"}, 
                {id:2, message:"Ok"},
                {id:3, message:"Yo"}
              ],
              newMessageText: "",
              
            dialogsData: [
            {id: 1, name: "Alex"}, 
            {id:2, name:"Oleg"},
            {id:3, name:"Kirill"}
            ]
        },
        sidebar: [
            {name: "Alex", id: 1},
            {name: "Oleg", id: 2}
        ]
    },
    getState(){
        return this._state
    },
    _callSubscriber(){
        console.log("State changed");
    },
    addPost(){
        let newPost = {
            id: 5,
            message : this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    newCharPostText(text){
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
    addNewMessage(){
        let newMessage = {
            id: 4,
            message: this._state.messagesPage.newMessageText
        };
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessageText = "";
        this._callSubscriber(this._state);
    },
    addNewMessageChar(text){
        this._state.messagesPage.newMessageText = text;
        this._callSubscriber(this._state);
    },
    Subscribe(callback){
        this._callSubscriber = callback;
    } 
}

export default store;
window.store = store;