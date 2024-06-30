'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Dispatch, SetStateAction, useState } from 'react';
import { FormCV } from './FormCV';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import imageSucces from '../../assets/images/accesDownload.png';

export const ModalCV = ({
  openCV,
  setOpenCV,
}: {
  openCV: boolean;
  setOpenCV: Dispatch<SetStateAction<boolean>>;
}) => {
  const [uploadSucces, setUploadSucces] = useState<number | undefined>();
  return (
    <Dialog open={openCV} onOpenChange={() => setOpenCV(!openCV)}>
      <DialogContent
        className={cn('md:w-[700px]', { 'max-w-fit': uploadSucces === 200 })}
      >
        <DialogHeader>
          <DialogTitle
            className={cn(
              'font-montserrat font-semibold text-xl flex justify-start ',
              { hidden: uploadSucces === 200 },
            )}
          >
            Upload CV
          </DialogTitle>
        </DialogHeader>
        {uploadSucces !== 200 ? (
          <FormCV
            openCV={openCV}
            setOpenCV={setOpenCV}
            setUploadSucces={setUploadSucces}
          />
        ) : (
          <div className="flex flex-col justify-center mx-auto items-center">
            <Image src={imageSucces} width={97} height={97} alt="succesimage" />
            <h3 className="font-bold text-2xl text-center text-primary mt-5">
              Congratulations!
            </h3>
            <p className="text-[#455150] font-normal mt-2">
              Your CV has been successfully submitted
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
