import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const axios = require("axios");
import Cookies from "js-cookie";

const index = () => {
  const [email, setEmail] = useState();
  const [status, setStatus] = useState("");
  const [data, setData] = useState(null);
  const router = useRouter();
  const { jwt } = router.query;
  const [files, setFiles] = useState([]);

  const uploadUrl = "http://127.0.0.1:8001/api/artisan/upload-spreadsheet";

  const handleFileChange = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.target.files);
    const formData = new FormData();
    setFiles([...files, ...newFiles]);
    files.map((file) => {
      formData.append("file", file);
      axios
        .post(uploadUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setStatus(response.data);
        })
        .catch((error) => {
          setStatus(error);
        });
    });
  };

  const handleDownload = () => {
    // Logic to download files
  };

  const loginUrl = `http://127.0.0.1:8001/api/auth/`;

  const fetchUser = async (url) => {
    Cookies.set("jwt", jwt, { sameSite: "strict" });
    try {
      const response = await axios.get(url, { withCredentials: true });
      setStatus(response);
    } catch (error) {
      setStatus(error.message);
    }
  };

  useEffect(() => {
    fetchUser(loginUrl);
  }, []);

  return (
    <div
      className="p-42 flex flex-row items-center w-full"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div className="mb-4">
        <label
          htmlFor="file-upload"
          className="cursor-pointer bg-[#0077be] hover:bg-[#4a3e3e] duration-500 text-white py-2 px-4 rounded"
        >
          Bulk Upload Artisans Spreadsheet
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          multiple
        />
      </div>

      <div className="mb-4">
        <button
          className="bg-[#8D161A] hover:bg-[#4a3e3e] duration-500 text-white py-2 px-4 rounded"
          onClick={handleDownload}
        >
          Download Artisans Spreadsheet
        </button>
      </div>

      <ul className="list-none list-inside">
        {files.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
      <p>{status}</p>
    </div>
  );
};

export default index;
