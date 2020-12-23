import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux"
import { getphotos } from '../actions'

const Photo = () => {
  const photos = useSelector(state => state.photos)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getphotos())
  },[])
  
    return (
      <div>
        <div class="container">
          <div class="row">
            {photos.map((photo) => (
              <div className="col-sm-2">
                <img className="img-thumbnail" src={photo.thumbnailUrl}></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Photo;
