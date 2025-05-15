import React, { SetStateAction, useState } from "react";
import Uploady, {
  useItemProgressListener,
  useItemFinishListener,
  useItemStartListener,
} from "@rpldy/uploady";
import UploadDropZone from "@rpldy/upload-drop-zone";
import UploadButton from "@rpldy/upload-button";

import {
  Flex,
  Text,
  Progress,
  DataList,
  Avatar,
  Button,
  Link,
} from "@radix-ui/themes";

import Icon from "@/components/ui/common/Icon";

import "@/styles/components/_custom-file-uploader.scss";
import { any } from "zod";

type UploadProgress = {
  [id: string]: {
    name: string;
    progress: number;
    status: "uploading" | "done" | "error";
  };
};

const FILE_LIMIT = 8;
const MAX_FILE_SIZE_MB = 20;

const UploadProgressList = ({ id, handleChange, prevFiles }: any) => {
  const [files, setFiles] = useState<SetStateAction<any>>(prevFiles);

  useItemStartListener((item: any) => {
    setFiles(
      (prev: any): SetStateAction<any> => [
        ...prev,
        {
          id: item.id,
          name: item.file.name,
          progress: 0,
          size: (item.file.size / 1024 / 1024).toFixed(2).toString(),
          type: item.file.type,
        },
      ]
    );
  });

  useItemProgressListener((item) => {
    setFiles((prev: any) =>
      prev.map((f: any) =>
        f.id === item.id ? { ...f, progress: item.completed } : f
      )
    );
  });

  useItemFinishListener((item: any) => {
    const previewUrl = URL.createObjectURL(item.file);
    console.log(item);
    const uploadedFiles = files.map((f: any) =>
      f.id === item.id
        ? {
            ...f,
            done: true,
            previewUrl,
            responseURL: item.uploadResponse?.data?.data[0],
          }
        : f
    );

    setFiles(uploadedFiles);

    console.log("prevFiles: ", uploadedFiles);

    handleChange(uploadedFiles);
  });

  const removeFile = (id: string) => {
    setFiles((prev: SetStateAction<any>) =>
      prev.filter((f: any) => f.id !== id)
    );

    handleChange(id, files);
  };

  return (
    <Flex direction="column" gap={"3"} className="upload-list-container">
      <DataList.Root orientation={"vertical"} size={"3"}>
        {files.map((file: any) => {
          return (
            <DataList.Item className="upload-item">
              <Flex as="div" direction={"row"} justify={"between"} gap={"3"}>
                <Flex as="div" justify={"start"} gap={"3"}>
                  <Avatar
                    size="4"
                    src={file.previewUrl}
                    radius="small"
                    fallback="T"
                  />
                  <Flex
                    as="div"
                    direction={"column"}
                    justify={"start"}
                    gap={"3"}
                  >
                    <Text size="2">{file.name}</Text>
                    <Text size="2">{file.size}MB</Text>
                  </Flex>
                </Flex>
                <Flex
                  as="div"
                  direction={"row"}
                  justify={"start"}
                  align={"start"}
                  gap={"3"}
                >
                  <Button
                    className="btn-link"
                    size="2"
                    onClick={() => removeFile(file.id)}
                  >
                    {" "}
                    {file.done ? (
                      <Icon name="CustomDeleteIcon" size={24} color="" />
                    ) : (
                      <Icon name="CustomCrossIcon" size={14} />
                    )}
                  </Button>
                </Flex>
              </Flex>

              <Flex
                as="div"
                direction={"row"}
                justify={"center"}
                align={"center"}
              >
                <Progress
                  variant="classic"
                  value={parseInt(file.progress)}
                  duration={"10ms"}
                  size="2"
                  color="indigo"
                />
                {!file.done && (
                  <Text
                    as="span"
                    size="1"
                    style={{ marginLeft: "16px", fontSize: "12px" }}
                  >
                    {file.progress.toFixed(0)}%
                  </Text>
                )}
              </Flex>
              {file.done && (
                <Link
                  href={file.previewUrl}
                  target="_blank"
                  color="blue"
                  className="view-picture-link"
                >
                  View Picture
                </Link>
              )}
            </DataList.Item>
          );
        })}
      </DataList.Root>
    </Flex>
  );
};

const CustomFileUploader = ({
  id,
  handleChange,
  prevFiles,
  disabled,
}: {
  id: string;
  handleChange: any;
  prevFiles: any;
  disabled?: boolean;
  files?: Array<any>;
}) => {
  const [error, setError] = useState<string | null>(null);

  const maxFiles = 8;
  const maxSizeMB = 20;

  const isImageFile = (file: File): boolean => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    return allowedTypes.includes(file.type);
  };

  return (
    <Flex gap={"3"} direction={"column"}>
      <Uploady
        destination={{
          url: process.env.NEXT_PUBLIC_BASE_URL + "/properties/upload-images",
          method: "POST",
          headers: {
            Authorization: "Bearer YOUR_TOKEN",
            "Custom-Header": "value",
          },
        }}
        inputFieldName="images"
        multiple
        //   onBeforeUpload={onBeforeUpload}
        fileFilter={(file: any) => {
          if (file.size > maxSizeMB * 1024 * 1024) {
            alert(`${file.name} is too large! Max size is ${maxSizeMB}MB`);
            return false;
          } else if (!isImageFile(file)) {
            alert(`${file.name} is not an image file`);
            return false;
          }
          return true;
        }}
        maxGroupSize={maxFiles}
      >
        <UploadDropZone className="upload-drop-zone">
          <div className="upload-box">
            <div className="upload-icon">
              <Icon name="CustomUploadIcon" size={48} />
            </div>
            <div className="upload-text">
              Drop files here or{" "}
              <UploadButton className="upload-click">
                click to upload
              </UploadButton>
            </div>
            {error && <div className="upload-error">{error}</div>}
          </div>
        </UploadDropZone>
        <Text as="div" className="upload-hint">
          <Text> Supported formats: JPG, PNG, JPEG </Text>
          <Text> Max size: 20MB </Text>
        </Text>
        <UploadProgressList
          id={id}
          handleChange={handleChange}
          prevFiles={prevFiles}
        />
      </Uploady>
    </Flex>
  );
};

export default CustomFileUploader;
