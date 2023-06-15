import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../utils/api';
import LeftNav from './LeftNav';
import VideoCard from './VideoCard';

const SearchResult = () => {
  const { query } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchDataFromApi(`search/?q=${query}`).then((res) => {
      setResult(res.contents);
    });
  }, []);
  console.log(result);
  if (!result) return 'Loading';
  return (
    <div className="d-flex bg-dark gap-5">
      <LeftNav />
      <div className="d-flex flex-column w-100">
        {result.map((video) => {
          if (video.type !== 'video') return false;
          return <VideoCard video={video} />;
        })}
      </div>
    </div>
  );
};

export default SearchResult;