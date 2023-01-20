import React from "react";

export default function Article(props) {
  return (
    <div className="container">
      <h1 className="title">
        <div dangerouslySetInnerHTML={{ __html: props.title }} />
      </h1>
      <h2 className="author">
        <div dangerouslySetInnerHTML={{ __html: props.author }} />
      </h2>
      <p className="content">
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </p>
    </div>
  );
}
