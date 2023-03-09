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
    const response = fetchUser(loginUrl);
    response.then((res) => setData(response)).catch(setError(error));
  }, []);

  return <div>{}</div>;
};

export default index;
