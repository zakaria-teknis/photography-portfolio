"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function VideoDisplay({ videoId }) {
  return (
    <div className="mb-3">
      <LiteYouTubeEmbed
        className="mb-3"
        id={videoId}
        title="My Video Showreel"
        noCookie={true}
      />
    </div>
  );
}
