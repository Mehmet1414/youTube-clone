import { Link } from 'react-router-dom';
import millify from 'millify';
import "../index.css"

const VideoCard = ({ video }) => {
  //console.log(video);
  return (
    <Link to={`/watch/${video.video.videoId}`} className=" videoCard-link ">
      <div className=" d-flex flex-column text-light">
        <div className=' '>
          <img className="rounded img-fluid w-100" src={video.video.thumbnails[0].url} />
        </div>
        <div className="d-flex gap-2 p-2 align-items-center " style={{height:"107px"}}>
          <img className=" rounded-5  " style={{width:"40px", height:"40px"}} src={video.video.author.avatar[0].url} />
          <div className=' d-flex flex-column px-2 '>
            <b >{video.video.title}</b>
            <b>{video.video.author.title}</b>
            <small className="d-flex gap-4">
              <small>{millify(video.video.stats.views)}</small>
              <small>{video.video.publishedTimeText}</small>
            </small>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default VideoCard;