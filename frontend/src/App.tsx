import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/posts`)
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/posts`, newPost)
      .then((response) => {
        setPosts([...posts, response.data]);
        setNewPost({ title: "", content: "", author: "" });
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  const handleDelete = (id: string) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newPost.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="content"
          placeholder="Content"
          value={newPost.content}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Name"
          value={newPost.author}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Create Post</button>
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="post-footer">
              <div>
                <h4>Author :</h4>
                <p>{post.author}</p>
              </div>

              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
