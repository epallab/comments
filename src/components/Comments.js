import React, { useState } from "react";
import Cards from "./Cards";
import { RiBold } from "react-icons/ri";
import { BiItalic } from "react-icons/bi";

const Comments = () => {
  const user = {
    name: "protechscript",
    dp: "pro.jpg",
  };

  const [formData, setFormData] = useState({
    comments: "",
    italic: false,
    bold: false,
  });

  const [comments, setComments] = useState([
    {
      comments:
        "Greetings! I'm Artholic.girl, your digital art companion on Instagram. Explore a world where pixels breathe life into captivating stories and enchanting visuals. 🎨✨",
      name: "artholic.girl",
      dp: "art.jpg",
      time: "2024-01-20T14:24:25.954Z",
      like: false,
      dislike: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([
      {
        ...formData,
        name: user.name,
        dp: user.dp,
        time: new Date(),
        like: false,
        dislike: false,
      },
      ...comments,
    ]);
    setFormData({ comments: "", italic: false, bold: false });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggleBold = () => {
    setFormData({ ...formData, bold: !formData.bold });
  };

  const handleToggleItalic = () => {
    setFormData({ ...formData, italic: !formData.italic });
  };

  const handleLike = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].like = !updatedComments[index].like;
    updatedComments[index].dislike = false;
    setComments(updatedComments);
  };

  const handleDislike = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].dislike = !updatedComments[index].dislike;
    updatedComments[index].like = false;
    setComments(updatedComments);
  };

  return (
    <>
      <div className="comments-main">
        <div className="comments-container">
          <div className="heading">Comments</div>
          <div className="commments-inputs">
            <div className="user-details">
              <img src={user.dp} alt="" />
              <div className="comments-name">{user.name}</div>
            </div>
            <form className="comments-form" onSubmit={handleSubmit}>
              <div>
                <textarea
                  onChange={handleChange}
                  name="comments"
                  value={formData.comments}
                  cols="30"
                  rows="8"
                  style={{
                    fontStyle: formData.italic ? "italic" : "normal",
                    fontWeight: formData.bold ? "bold" : "normal",
                  }}
                ></textarea>
              </div>
              <div className="submit-section">
                <div className="font-style">
                  <div
                    className={
                      formData.bold ? "font-style-btn-active" : "font-style-btn"
                    }
                    onClick={handleToggleBold}
                  >
                    <RiBold />
                  </div>
                  <div
                    className={
                      formData.italic
                        ? "font-style-btn-active"
                        : "font-style-btn"
                    }
                    onClick={handleToggleItalic}
                  >
                    <BiItalic />
                  </div>
                </div>
                <button
                  disabled={formData.comments === ""}
                  className={
                    formData.comments === ""
                      ? "submit-btn-disabled"
                      : "submit-btn "
                  }
                  type="submit"
                >
                  Comment
                </button>
              </div>
            </form>
          </div>
          <div className="comments-display-main">
            {comments.map((comment, index) => (
              <Cards
                comment={comment}
                index={index}
                key={index}
                handleLike={() => handleLike(index)}
                handleDislike={() => handleDislike(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
