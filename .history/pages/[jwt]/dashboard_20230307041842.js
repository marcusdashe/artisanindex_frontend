import React, { useEffect } from "react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { jwt } = router.query;

  const loginUrl = "http://127.0.0.1:8001/api/auth/login";

  useEffect(() => {}, []);

  return <div>{jwt}</div>;
};

export default index;
