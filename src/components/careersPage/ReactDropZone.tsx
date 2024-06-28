import React, { useCallback, useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import styles from './DropZoneUpload.module.css';
import { CloudUpload } from '@/assets/icons/cloudUpload/CloudUpload';
import { FileUpload } from '@/assets/icons/fileUpload/FileUpload';
import { BucketTrash } from '@/assets/icons/bucketTrash/BucketTrash';
import { cn } from '@/lib/utils';

const MAX_FILE_SIZE = 30 * 1024 * 1024;

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const;

function getMonthName(month: number) {
  return monthNames[month];
}

const DropZoneUpload = () => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [files, setFiles] = useState<any[]>([]);

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    console.error(fileRejections[0].errors);
    setIsDragActive(false);
  }, []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize: MAX_FILE_SIZE,
    accept: {
      'application/pdf': ['.pdf'],
    },
    multiple: false,
    onDropRejected,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  const handleRemoveFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div
      className={cn(
        `${styles.dropZone} ${isDragActive ? styles.dropZoneDrag : ''} mt-6`,
        { '!h-fit': files.length },
      )}
      {...getRootProps()}
    >
      {files.length ? (
        <ul>
          {files.map((file, index) => {
            const date = new Date(file.lastModifiedDate);
            const formattedDate = `${getMonthName(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;

            return (
              <li key={index} className="flex justify-start items-center">
                <FileUpload />
                <div className="flex flex-col">
                  <p>{file.name}</p>
                  <span>{formattedDate}</span>
                </div>
                <button
                  className="items-start ml-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFile(file.name);
                  }}
                >
                  <BucketTrash />
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <>
          <CloudUpload className="mb-[10px]" />
          <div>
            <span className="text-sm font-inter font-semibold">
              Click to upload
            </span>
            <span className="text-sm font-montserrat font-normal">
              or drag and drop
            </span>
          </div>
          <span className="font-montserrat text-[14px] leading-4 mt-[7px]">
            Max. File Size: 30MB
          </span>
          <input {...getInputProps()} />
        </>
      )}
    </div>
  );
};

export default DropZoneUpload;
