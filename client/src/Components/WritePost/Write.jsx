
import React, { useContext, useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import { axiosInstance } from "../../config";
import { Context } from "../../Context/Context";
import "./Write.css";
const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="writePost">
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      )}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon">
              {" "}
              <GrFormAdd />
            </i>
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Type your blog"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button type="submit" className="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
