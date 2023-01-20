import "./App.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";

import Article from "./Components/Article";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      // url: "https://v1.nocodeapi.com/*******/medium/*******", //This was an API created by https://nocodeapi.com/ of TribalScale's
      // // medium feed that was hosted locally. API data is copied into 'data.json'
      url: "data.json",
      params: {},
    })
      .then(function (response) {
        // handle success
        console.log(response.data.data);
        setArticles(
          response.data.data.map((item, i) => (
            <Article
              key={i}
              title={item.title}
              author={item.author}
              content={item.content}
            />
          ))
        );
        console.log(articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "15%",
    left: "20%",
    overflow: "scroll",
    height: "70%",
    width: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
  };

  return (
    <div>
      <img
        onClick={handleOpen}
        className="post"
        src="https://cdn.newswire.com/files/x/53/0c/9e69e04145ffaed02d8ab27e96e5.jpeg"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{articles}</Box>
      </Modal>
    </div>
  );
}

export default App;
