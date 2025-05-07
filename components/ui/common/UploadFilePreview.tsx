import React, { useState } from "react";

import Icon from "./Icon";
import { Flex, Text } from "@radix-ui/themes";

import ButtonInput from "./Button";

import ReactPlayer from "react-player";

import "@/styles/components/_upload-file-preview.scss";
// Sample data type
interface UploadedFile {
  previewUrl: string;
  type: string;
}

const UploadedFilePreview = ({ files }: { files: UploadedFile[] }) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>(files);

  const handleDelete = (index: number) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };

  const handleView = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="previewContainer">
      {uploadedFiles.map((file, index) => (
        <div
          key={index}
          className={`fileWrapper ${
            files.length === 1 ? "full" : index < 2 ? "half" : "grid"
          }`}
          style={{
            position: "relative",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 0 8px rgba(0,0,0,0.1)",
          }}
        >
          {file.type.startsWith("image/") ? (
            <img
              src={file.previewUrl}
              alt="preview"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <ReactPlayer
              url={file.previewUrl}
              controls
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "24px",
              }}
              //   light={true}
              //   playIcon={
              //     <button className="custom-play-btn">
              //       <Icon name={"CustomPlayIcon"} size={64} color="#fff" />
              //     </button>
              //   }
            />
          )}
          {file.type.startsWith("image/") && (
            <div
              className="hover-overlay"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0";
              }}
            >
              <ButtonInput
                gap={"3"}
                direction={"row"}
                className="view-icon"
                onClick={() => handleView(file.previewUrl)}
              >
                <Icon name="CustomEyeIcon" size={18} />{" "}
                <Text size={"2"}>View</Text>
              </ButtonInput>
              <ButtonInput
                gap={"3"}
                direction={"row"}
                className="delete-icon"
                onClick={() => handleDelete(index)}
              >
                <Icon name="CustomDeleteIcon" size={18} color={"white"} />{" "}
                <Text size={"2"}>Delete</Text>
              </ButtonInput>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UploadedFilePreview;
