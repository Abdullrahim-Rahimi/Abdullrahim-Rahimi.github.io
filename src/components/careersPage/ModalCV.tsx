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
  dataCareers,
}: {
  openCV: boolean;
  setOpenCV: Dispatch<SetStateAction<boolean>>;
  dataCareers: any;
}) => {
  const [uploadSucces, setUploadSucces] = useState<number | undefined>();

  return (
    <Dialog open={openCV} onOpenChange={() => setOpenCV(!openCV)}>
      <DialogContent
        className={cn('md:w-[700px] overflow-y-scroll max-h-screen', {
          'max-w-fit': uploadSucces === 200,
        })}
      >
        <DialogHeader>
          <DialogTitle
            className={cn(
              'ltr:font-montserrat font-semibold text-xl flex justify-start ',
              { hidden: uploadSucces === 200 },
            )}
          >
            {dataCareers?.formField?.titleUpload}
          </DialogTitle>
        </DialogHeader>
        {uploadSucces !== 200 ? (
          <FormCV
            openCV={openCV}
            setOpenCV={setOpenCV}
            setUploadSucces={setUploadSucces}
            dataCareers={dataCareers}
          />
        ) : (
          <div className="flex flex-col justify-center mx-auto items-center">
            <Image src={imageSucces} width={97} height={97} alt="succesimage" />
            <h3 className="font-bold text-2xl text-center text-primary mt-5">
              {dataCareers?.formField?.titleSucess}
            </h3>
            <p className="text-[#455150] font-normal mt-2">
              {dataCareers?.formField?.descriptionSucces}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
