import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Dispatch, SetStateAction } from 'react';
import { FormCV } from './FormCV';

export const ModalCV = ({
  openCV,
  setOpenCV,
}: {
  openCV: boolean;
  setOpenCV: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={openCV} onOpenChange={() => setOpenCV(!openCV)}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="font-montserrat font-semibold text-xl flex justify-start">
            Upload CV
          </DialogTitle>
        </DialogHeader>
        <FormCV />
      </DialogContent>
    </Dialog>
  );
};
