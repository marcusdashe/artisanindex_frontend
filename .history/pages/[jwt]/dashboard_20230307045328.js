import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const index = () => {
  const [email, setEmail] = useState();
  const [error, setError] = useState("");

  const router = useRouter();
  const { jwt } = router.query;

  const loginUrl = `http://127.0.0.1:8001/api/auth/${jwt}`;

  const fetchUser = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      return response;
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    try {
      const response = fetchUser(loginUrl);
      if (response) {
        console.log(response);
      }
    } catch (error) {
      setError(error);
    }
  }, []);

  return <div>{jwt}</div>;
};

export default index;
