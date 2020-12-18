const userReducer = (state = [], action) => {
    switch(action.type){
        case "USER" :
            return state = action.user;
        case "ALBUM" :
            return state = action.album;
        default : return state;
    }
}

export default userReducer;