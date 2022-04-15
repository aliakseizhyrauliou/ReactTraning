let state = {
    profilePage: 
    {
        postsData: [
            { id: 1, message: "Hi, how are you?", likesCount: 12 },
            { id: 2, message: "Goodbo", likesCount: 25 }
            ]
    },
    messagesPage: {
        messagesData: [
            {id: 1, message: "Hi"}, 
            {id:2, message:"Ok"},
            {id:3, message:"Yo"}
          ],
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

export default state;