import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Playlist from "../../components/playlist/Playlist";

import "./music-form.style.css";

const MusicForm = () => {
  const [data, setData] = useState([
    {
      id: uuidv4(),
      songTitle: "break up song",
      linkHref: "https://www.youtube.com/watch?v=Zte1KtYNx6Y",
    },
  ]);

  const [newData, setNewData] = useState([
    {
      id: uuidv4(),
      songTitle: "",
      linkHref: "",
    },
  ]);

  useEffect(() => {
    const info = localStorage.getItem("data");
    if (info) {
      setData(JSON.parse(info));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  });

  const addSong = (info) => {
    let oldData = data;
    let newData = [...oldData, info];
    setData(newData);
    setNewData({ songTitle: "", linkHref: "" });
  };

  const removePlaylist = () => {
    let newData = [];
    setData(newData);
  };

  return (
    <div className="music-form">
      <h2 className="the-title">Add Music</h2>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="songTitle">Enter Song Title</label>
        <input
          type="text"
          name="songTitle"
          value={newData.songTitle || ""}
          onChange={(e) =>
            setNewData({ ...newData, songTitle: e.currentTarget.value })
          }
          minLength="1"
          placeholder="e.g. Break Up Song"
          required
        />
        <label htmlFor="linkHref">Enter Song Title</label>
        <input
          type="text"
          name="linkHref"
          value={newData.linkHref || ""}
          onChange={(e) =>
            setNewData({ ...newData, linkHref: e.currentTarget.value })
          }
          minLength="7"
          placeholder="https://example.com"
          required
        />
        <button onClick={() => addSong(newData)} className="btn">
          Add
        </button>
      </form>
      <Playlist data={data} removePlaylist={removePlaylist} />
    </div>
  );
};

export default MusicForm;
