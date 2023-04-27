import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Container } from "react-bootstrap";
import { dateFormatter } from "../helpers";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailPost } from "../store/action/actionCreator";
import LoadingScreen from "../components/LoadingScreen";

export default function DetailPage() {

    const { post, loading } = useSelector((state) => {
        return state.newsDetail
    })
    
    const { postId } = useParams();
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchDetailPost(postId))
    }, []);

    return (
        <>
            <Container style={{ color: 'black', backgroundColor: 'white', margin: "auto", padding: "7.5rem", width: "1100px" }}>
            { loading ? <LoadingScreen /> : (
                <>
                <h6 style={{ color: 'rgba(0,85,148,255)' }}><b>CNBC.com / {post?.Category?.name} </b> </h6>
                <h1>{post?.title}</h1>
                <br />
                <h6 style={{color: 'rgba(0,85,148,255)' }}>{dateFormatter(post.createdAt)}</h6>
                <div className='d-flex justify-content-center'>
                    <img src={post.imgUrl} alt='...' style={{ width: '860px', height:"410px" }} />
                </div>
                {
                    post?.Tags?.map(
                        el => {
                            return (
                                <h6 key={el.id} style={{ marginTop: '10px', color: 'rgba(0,85,148,255)' }}><b>Tags: {el.name}</b></h6>
                            )
                        }
                    )
                }
                <small>Penulis : <b>{post?.author?.email}</b></small>
                <div style={{ marginTop: '20px', textAlign:"justify" }}>{post?.content}</div>
                </>
            )}
            </Container>
        </>
    )
}
