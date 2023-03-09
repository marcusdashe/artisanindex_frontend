import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const index = () => {
  const [email, setEmail] = useState();

  const router = useRouter();
  const { jwt } = router.query;

  const loginUrl = "http://127.0.0.1:8001/api/auth/login";

  useEffect(async () => {
    try {
      const response = await axios.post(loginUrl, { jwt });
      if (response) {
      }
    } catch (error) {
      setError(error);
    }
  }, []);

  return <div>{jwt}</div>;
};

export default index;
