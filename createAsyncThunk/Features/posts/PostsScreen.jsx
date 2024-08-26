import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostsScreen = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      {isLoading && <h3>Loading ..........</h3>} {error && <h3>{error}</h3>}
      <section>
        <h1>Posts</h1>
        {posts &&
          posts.map((posts) => {
            return (
              <>
                <article>
                  <h5>{posts.title}</h5>
                  <p>{posts.body}</p>
                </article>
              </>
            );
          })}
      </section>
    </>
  );
};

export default PostsScreen;
