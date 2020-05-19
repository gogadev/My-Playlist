import React from "react";

import image from "../../assets/image.jpg";

import "./playlist.style.css";

const Playlist = ({ data, removePlaylist }) => {
  const mappedData = data.map((info, id) => {
    return (
      <div key={id} className="playlist">
        <div className="info">
          <h2 className="song-title">{info.songTitle}</h2>
          <a className="link" href={info.linkHref} target="_blank">
            {info.linkHref}
          </a>
        </div>
      </div>
    );
  });
  return (
    <div className="list">
      <div>
        {" "}
        <h1 className="the-title">Playlist</h1>
        <div className="playlist-img">
          {" "}
          <img className="img" src={image} alt="" />
        </div>
      </div>
      {mappedData}
      <button className="btn" onClick={() => removePlaylist()}>
        Delete Playlist
      </button>
    </div>
  );
};

export default Playlist;
