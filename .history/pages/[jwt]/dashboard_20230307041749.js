import React, { useEffect } from "react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { jwt } = router.query;

  useEffect(() => {});

  return <div>{jwt}</div>;
};

export default index;
