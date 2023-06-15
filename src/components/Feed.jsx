import { useContext } from 'react';
import { Context } from '../context/contextApi';
import LeftNav from './LeftNav';
import VideoCard from './VideoCard';
import "../index.css"

const Feed = () => {
  // context içerisinde tutlan videoları çekme
  const { searchResult } = useContext(Context);

  return (
    <div className="d-flex bg-dark" style={{ minHeight: '100vh' }}>
      <LeftNav />
      <div className=" d-flex justify-content-center flex-wrap gap-5 p-4 ">
        {searchResult.map((video, index) => {
          if (video.type !== 'video') return;
          return <VideoCard key={index} video={video} />;
        })}
      </div>
    </div>
  );
};

export default Feed;