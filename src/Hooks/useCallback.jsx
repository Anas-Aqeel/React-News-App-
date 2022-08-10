import React, { useEffect, useMemo, useState, useCallback } from "react";

const UseCallbackHook = () => {
  const [data, setData] = useState(null);
  const [queryObj, setQueryObj] = useState({
    type: "top-headlines",
    filter: "/sources",
    search: "",
    date: "",
  });

  let req_url = useMemo(() => {
    return (
      "https://newsapi.org/v2/" +
      queryObj.type +
      queryObj.filter +
      "?" +
      queryObj.search +
      "&sortBy=popularity&apiKey=1f73fb47b245425fbe4399276b1327b2"
    );
  }, [queryObj.filter, queryObj.type, queryObj.search]);

  const fetchData = useCallback(async () => {
    console.log(req_url);
    let response = await fetch(req_url);
    response = await response.json();
    setData(response);
  }, [req_url]);

  useEffect(() => {
    fetchData();
  }, [req_url]);

  return (
    <>
      <div>UseCallbackHook</div>
      <button onClick={()=>fetchData()}>fetch</button>
      <button onClick={() => console.log(req_url)}>console req url</button>
      <button
        onClick={() => {
          setQueryObj({ ...queryObj, filter: '', search: "q=jelly" });
        }}
      >
        query
      </button>
      <button onClick={() => console.log(data)}>console Data</button>
    </>
  );
};

export default UseCallbackHook;
