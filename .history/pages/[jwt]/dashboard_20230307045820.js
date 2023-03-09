import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const index = () => {
  const [email, setEmail] = useState();
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const router = useRouter();
  const { jwt } = router.query;

  const loginUrl = `http://127.0.0.1:8001/api/auth/${jwt}`;

  const fetchUser = async (url) => {
    try {
      const response = await axios.get(url);
      return response;
      console.log(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    try {
      const response = fetchUser(loginUrl);
      if (response) {
        setData(response);
        console.log(response);
      }
    } catch (error) {
      setError(error);
    }
  }, []);

  return <div>{data}</div>;
};

export default index;
