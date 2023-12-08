import React, { useContext } from "react";
import SideBar from "../components/SideBar";
import { youtubeContext } from "../context/YoutubeContext";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos } = useContext(youtubeContext);
  return (
    <div className="flex gap-3">
      <SideBar />
      <div className="videos">
        {/* Videolar yoksa Yükleniyor bas 
            Videolar varsa videolar dön
            tipi video olan her biri için ekrana kart bas.
        */}
        {!videos ? (
          <Loading type={"video"}/> 
        ) : (
          videos.map(
            (item) =>
              item.type === "video" && (
                <VideoCard video={item} key={item.videoId} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
