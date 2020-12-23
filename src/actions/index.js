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



