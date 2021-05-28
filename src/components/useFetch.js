import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(()=> {
      fetch(url)
      .then(res=> {
        return res.json();
      })
      .then(data=>{
        setBlogs(data);
        setIsPending(false);
      });
    },1000);
  },[])
  return {data, isPending}
}
 
export default useFetch;