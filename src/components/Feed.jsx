
import { useContext } from "react";
import { Context } from "../context/contextApi";
import VideoCard from "./VideoCard";
import "../App.css"

const Feed = () => {
  const {searchResult} = useContext(Context)
  
  return (
    <section className=" d-flex feed ">
      
      <div className=" d-flex justify-content-evenly flex-wrap gap-2 mt-5 " >
        {searchResult.map((video,index)=>{
          if (video.type !== "video")return
         return <VideoCard video={video} key={index} />
        }
        )}
      </div>
    </section>
  );
};

export default Feed;
