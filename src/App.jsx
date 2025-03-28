import { useEffect, useState } from 'react';


function App() {
  const [postList, setPostList] = useState([]);

  function fetchPostList() {

    fetch("http://localhost:3009/api/v1/posts")
      .then((res) => res.json())
      .then(setPostList);

  }
  useEffect(fetchPostList, []);


  return (
    <>
      {
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {postList.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.slug}</td>
                <td>{post.content}</td>
              </tr>
            ))}
          </tbody>
        </table>



      }
    </>
  )
}

export default App
