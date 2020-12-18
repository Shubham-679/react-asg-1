import userReducer from "../reducers/userData";

export const getuser = (user) => {
    return {
        type : 'USER',
        user,        
    };
};

export const getalbum = (album) => {
    return {
        type : 'ALBUM',
        album
    };
};