import {renderEntireTree} from "./../render"
let state = {
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
          newMessageText: "ad",
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
}

export let addPost = (postMessage) =>{
    let newPost = {
        id: 5,
        message : postMessage,
        likesCount: 0
    };

    state.profilePage.postsData.push(newPost);
    renderEntireTree(state);
} 

export let newCharPostText = (text) => {
    state.profilePage.newPostText = text;
    renderEntireTree(state);
}

export let addNewMessage = () => {
    let newMessage = {
        id: 4,
        message: state.messagesPage.newMessageText
    };
    state.messagesPage.messagesData.push(newMessage);
    renderEntireTree(state);
}

export let addNewMessageChar = (text) => {
    state.messagesPage.newMessageText = text;
    renderEntireTree(state);
}

export default state;