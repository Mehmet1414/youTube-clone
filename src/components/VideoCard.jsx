
import { Link } from "react-router-dom";
const VideoCard = ( {video} ) => {
  //console.log(video);
  return (
    <Link to={`watch/${video.video.videoId}`}>
    <div className=" d-flex flex-column justify-content-center align-items-center rounded ">
      <div >
        <img className=" rounded" style={{width:"360px"}} src={video.video.thumbnails[0].url} alt="" />
      </div>
      <div className=" d-flex align-items-center mt-1 mb-2 gap-2 " style={{width:"360px", height:"117px"}}>
        <div className="   h-100 d-flex align-items-center  " >
          <img className=" rounded-5 "  src={video.video.author.avatar[0].url} alt="Chanel" />
        </div>
        <div className=" d-flex flex-column  ">
          <span>{video.video.title}</span>
          <b>{video.video.author.title}</b>
          <small >
            <span className=" me-3 ">{video.video.stats.views}</span>
            <span>{video.video.publishedTimeText}</span>
          </small>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default VideoCard;
