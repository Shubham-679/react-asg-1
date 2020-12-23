import axios from "axios";

export const getuser = () => async (dispatch) => {
  const { data : users } = await axios.get("https://jsonplaceholder.typicode.com/users");
   dispatch({
     type: 'USER',
     payload : users
   });
}

export const getalbum = () => async (dispatch) => {
  const { data : albums } = await axios.get("https://jsonplaceholder.typicode.com/albums");
  dispatch({
    type: 'ALBUM',
    payload : albums
  });

};

export const getphotos = () => async (dispatch) => {
  const { data : photos } = await axios.get("https://jsonplaceholder.typicode.com/photos");
  dispatch({
    type: 'PHOTOS',
    payload : photos
  });
};

export const addAlbum = (text) => async (dispatch) => {
  const obj = { title : text }
  const { data : newAlbum } = await axios.post("https://jsonplaceholder.typicode.com/albums",obj);
  dispatch({
    type: 'ADD_ALBUM',
    payload : newAlbum
  });
};

export const getuserAlbum = (userId) => async (dispatch) => {

  const { data: userAlbum } = await axios.get("https://jsonplaceholder.typicode.com/users/" + userId + "/albums");
  dispatch({
    type: 'USER_ALBUM',
    payload : userAlbum
  });
}

export const updateAlbum = (album) => async (dispatch) => {
  await axios.put("https://jsonplaceholder.typicode.com/albums" + "/" + album.id, album); 
  dispatch({
    type: 'UPDATED_USER_ALBUM',
    album   
  });

}



