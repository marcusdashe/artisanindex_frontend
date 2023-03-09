import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const index = () => {
  const [email, setEmail] = useState();
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const router = useRouter();
  const { jwt } = router.query;
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);

    files.map((file) => <li key={file.name}>{file.name}</li>);
  };

  const handleDownload = () => {
    // Logic to download files
  };

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
    </div>
  );
};

export default index;
