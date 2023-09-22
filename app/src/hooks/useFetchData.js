import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const data = await resp?.data;

        setApiData(data);
      } catch (error) {
        setServerError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { isLoading, apiData, serverError };
};

export default useFetchData;
