import { useState, useEffect } from "react";
import { randomNumber } from "../utils/const";

const useFetch = () => {
  const numberPhoto = randomNumber(0, 4999);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorData, setErrorData] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      try {
        if (!data) {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/photos/${numberPhoto}`
          );
          const json = await response.json();
          setData(json);
          setLoading(false);
        }
      } catch (err) {
        setErrorData(err);
      }
    };
    doFetch();
  }, [data, numberPhoto]);

  return {
    data,
    loading,
    errorData,
  };
};

export default useFetch;
