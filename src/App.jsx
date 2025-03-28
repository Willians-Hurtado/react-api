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
      <div className='container mt-5 mb-5 text-center text-light bg-dark p-5 rounded shadow border border-light border-5'>
        <h1>Post List</h1>

      </div>

      {
        <table className='table table-striped table-bordered table-dark' >
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
