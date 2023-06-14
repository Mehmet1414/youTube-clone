import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { fetchDataFromApi } from "../utils/api";

const VideoDetail = () => {
  const { videoId } = useParams();

  useEffect(() => {
    fetchVideoDetails();
  }, []);

  function fetchVideoDetails() {
    fetchDataFromApi(`video/details/?id=${videoId}`).then((res) => {
    });
  }
  return (
  <div className=" feed border  ">
    {videoId}
  </div>
  );
};

export default VideoDetail;
