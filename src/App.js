import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import PostLoadings from "./components/PostLoadings";
import "./App.css";
import axiosInstance from './axios';
import Navbar from "./components/Navbar";
import { Typography } from "@mui/material";
import Single from "./components/single";
function App() {
  const PostLoading = PostLoadings(Posts);
  const [appState, setAppState] = useState({
    loading: true,
    posts: null,
  });
  // useEffect(() => {
  //   setAppState({ loading: true });
  //   const apiUrl = "http://127.0.0.1:8000/api/";
  //   fetch(apiUrl)
  //     .then((data) => data.json())
  //     .then((posts) => {
  //       console.log(posts);
  //       setAppState({
  //         loading: false,
  //         posts: posts,
  //       });
  //     });
  // }, [setAppState]);

useEffect(() => {
		axiosInstance.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);
  return (
    <div>
      <Navbar />
      <div className="App">  
        
        <Typography variant='h5' color="textSecondary" mt='1rem' mb='3rem'>
        Famous places
        </Typography>
                  
       <PostLoading isLoading={appState.loading} posts={appState.posts} />
      </div>
    <Footer />
    </div>
  );
}

export default App;
