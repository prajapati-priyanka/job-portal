import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

     const abortCont = new AbortController();
    //   This Is just to show the loading until the fetch call happens. It is not reccomended.
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal})
        .then((response) => {
          // This error is to handle the wrong endpoints
          if (!response.ok) {
            throw Error("Could not fetch the data from that source");
          }
          return response.json();
        })

        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        // This is for network error or server is off
        .catch((err) => {
          if(err.name === "AbortError"){
            console.log("Fetch aborted");
          }else{
            setIsPending(false);
            setError(err.message);

          }
        })
        }, 1000);

        return () => abortCont.abort();
   
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;