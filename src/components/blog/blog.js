import React,{ useState, useEffect }from"react";
import axios from"axios";
import Posts from '../posts/posts';

import './blog.css';

export default function Blog() {
  const[data, setData]=useState(null);
  const[loading, setLoading]=useState(true);
  const[error, setError]=useState(null);
  
  useEffect( () => {
    axios("https://jsonplaceholder.typicode.com/posts")
    .then( (response) => {setData(response.data);
      console.log(response.data);
    })
    .catch( (error) => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally( () => {
      setLoading(false);
    });
  }, []);
  
  if(loading)return"Loading...";
  if(error)return"Error!";
  
  return(
      <div className='blog-body'>
        {data.map(post => (<Posts key={post.id} passData={post} />))}
        
            
      </div>
  );
}