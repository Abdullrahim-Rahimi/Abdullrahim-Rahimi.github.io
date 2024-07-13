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

const DropZoneUpload = ({ setFiles, files, dataCareers }: any) => {
  const [isDragActive, setIsDragActive] = useState(false);

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    console.error(fileRejections[0].errors);
    setIsDragActive(false);
  }, []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prevFiles: any) => [...prevFiles, ...acceptedFiles]);
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
    setFiles((prevFiles: any) =>
      prevFiles.filter((file: any) => file.name !== fileName),
    );
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
          {files.map((file: any, index: any) => {
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
            <span className="text-sm ltr:font-inter font-semibold">
              {dataCareers?.textDropzone?.textClick}
            </span>
            <span className="text-sm ltr:font-montserrat font-normal">
              {dataCareers?.textDropzone?.nextTextClick}
            </span>
          </div>
          <span className="ltr:font-montserrat text-[14px] leading-4 mt-[7px]">
            {dataCareers?.textDropzone?.maxFile}
          </span>
          <input {...getInputProps()} />
        </>
      )}
    </div>
  );
};

export default DropZoneUpload;
