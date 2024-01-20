import React from "react";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";

const Cards = ({ comment, index, handleLike, handleDislike }) => {
  const timeAgo = () => {
    const currentDate = new Date();
    const commentDate = new Date(comment.time);

    const timeDifference = currentDate - commentDate;
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));

    if (minutesAgo < 1) {
      return "Just now";
    } else if (minutesAgo === 1) {
      return "1 minute ago";
    } else if (minutesAgo < 60) {
      return `${minutesAgo} minutes ago`;
    } else if (minutesAgo < 24 * 60) {
      const hoursAgo = Math.floor(minutesAgo / 60);
      return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
    } else {
      const daysAgo = Math.floor(minutesAgo / (24 * 60));
      return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
    }
  };

  return (
    <div className="comments-display-card" key={index}>
      <div className="comments-display-user">
        <img src={comment.dp} alt="" />
        <div className="comments-display-name">{comment.name}</div>
      </div>
      <div
        style={{
          fontStyle: comment.italic ? "italic" : "normal",
          fontWeight: comment.bold ? "bold" : "normal",
        }}
        className="comments-text"
      >
        {comment.comments}
      </div>
      <div className="like-section">
        <div
          className={comment.dislike ? "dislike-active" : "dislike"}
          onClick={handleDislike}
        >
          <BiSolidDislike />
        </div>
        <div
          className={comment.like ? "like-active" : "like"}
          onClick={handleLike}
        >
          <BiSolidLike />
        </div>
        <div className="comment-time">{timeAgo()}</div>
      </div>
    </div>
  );
};

export default Cards;
