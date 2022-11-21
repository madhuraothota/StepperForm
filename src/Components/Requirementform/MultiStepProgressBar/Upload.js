import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./Upload.css";
import * as icon from "react-bootstrap-icons";

const Upload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, multiple: false, accept: "pdf" });
  return (
    <div>
      <div {...getRootProps()} className="class-dropzone">
        <input {...getInputProps()} />
        <icon.CloudUpload size={24} className="class-icons" />

        <p>
          Drag and Drop or <span variant="primary">Browse</span> your file
        </p>
        <p>Max Upto 2MB</p>
      </div>
    </div>
  );
};

export default Upload;
