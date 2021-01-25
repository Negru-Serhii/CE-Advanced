import React from "react";

const Posts = (props) => (
  <div className="post">
    <div className="header">
      <img className="icon" src={props.photo} alt="face_icon" />
      <span className="name">{props.name}</span>
      <span className="nickname">{props.nickname}</span>
      <span className="date">{props.date}</span>
    </div>

    <p className="content">{props.content}</p>
    <img className="photo" src={props.image} alt="content_image" />
  </div>
);

export default Posts;
