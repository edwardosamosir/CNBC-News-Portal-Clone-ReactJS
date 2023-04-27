import React, { useEffect } from "react";
import { Container } from "react-bootstrap"
import NewsTableRow from "../components/NewsTableRow";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "./LoadingScreen";
import { fetchPosts } from "../store/action/actionCreator";


export default function NewsTable() {
    const { posts, loading } = useSelector((state) => {
        // console.log(state)
        return state.news
      })
    
      const dispatch = useDispatch()
        
      useEffect(() => {
        dispatch(fetchPosts())
      }, []);
    

    return (
        <Container style={{ marginTop: "50px" }}>
        {
          loading ? <LoadingScreen /> : (

            <table style={{ margin: "auto" }}>
              <tbody>
                {posts.map((post) => {
                  return (
                    <NewsTableRow key={post.id} post={post} />
                  );
                })}
              </tbody>
            </table>
          )
        }
      </Container>
    )

}