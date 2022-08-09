import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { useCallback } from "react";

const UseCallbackHook = () => {
  const [data, setData] = useState(null);
  const [{ filter, type, search }, setQueryObj] = useState({
    filter: 'sources=bbc-news',
    search: "",
    type: "everything",
    date: "",
  });

  let req_url = useMemo(() => {
    return (
      "https://newsapi.org/v2/"+ type +"?" +
      filter +
      "&sortBy=popularity&apiKey=1f73fb47b245425fbe4399276b1327b2"
    );
  }, [filter, type, search]);

  const fetchData = useCallback(async () => {
    let response = await fetch(req_url);
    response = await response.json();
    setData(response);
  }, [req_url]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>UseCallbackHook</div>
      <button
       onClick={()=>{
        console.log(data)
        console.log(req_url)
       }}
      >
        query
      </button>
    </>
  );
};

export default UseCallbackHook;
