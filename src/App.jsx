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
      <div className=' text-center text-light bg-dark p-5  '>
        <h1>Post List</h1>

      </div>

      {
        <table className='table table-striped table-bordered table-dark mt-5 ' >
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Image</th>

            </tr>
          </thead>
          <tbody className=' '>
            {postList.map((post) => (
              <tr key={post.id}>
                <td >{post.title}</td>
                <td>{post.content}</td>
                <td>
                  <img src={`http://localhost:3009/images/${post.image}`} alt={post.title} style={{ width: '250px', height: '100%' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>



      }
    </>
  )
}

export default App
