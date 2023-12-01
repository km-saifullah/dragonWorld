import React from "react";
import "./video.css";

const Video = () => {
  return (
    <div className="video">
      <div className="container">
        <div className="video_content">
          <div className="video_frame">
            <iframe
              width="1170"
              height="600"
              src="https://www.youtube.com/embed/GIs_PmX4_NE?si=MKd8LhaT8HJAVyYv"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
