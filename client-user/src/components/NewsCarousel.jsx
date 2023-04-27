import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import { fetchPosts } from '../store/action/actionCreator';


export default function NewsCarousel() {

  const { posts, loading } = useSelector((state) => {
    return state.news
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, []);

  return (
    <div style={{ marginLeft: "10px" }}>
    { loading ? <LoadingScreen /> : (
      <>
      <Carousel variant="dark" style={{ marginTop: "100px", marginBottom: "170px", width: "1000px", margin: "auto" }}>
      {posts.map((post) => {
        return (
          
          <Carousel.Item key={post.id}>
            <Link to={`/detail/${post.id}`}>
              <img style={{ height: "580px" }}
                className="d-block w-100"
                src={post.imgUrl}
              />
              <Carousel.Caption>
                <h2 style={{color: "white"}}>{post.title}</h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>  
        );
      })}
      </Carousel>
      </>
      )}
    </div>
  );
}
