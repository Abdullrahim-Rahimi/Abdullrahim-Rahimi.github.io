'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import DropZoneUpload from './ReactDropZone';
import axiosInstance from '@/helpers/axiosConfig';

const formSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email('This is not a valid email.'),
});

export const FormCV = ({
  openCV,
  setOpenCV,
  setUploadSucces,
}: {
  openCV: boolean;
  setOpenCV: Dispatch<SetStateAction<boolean>>;
  setUploadSucces: Dispatch<SetStateAction<number | undefined>>;
}) => {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [files, setFiles] = useState<any[]>([]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
  });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append('firstName', data.firstname);
    formData.append('lastName', data.lastname);
    formData.append('email', data.email);
    formData.append('cv', files[0]);

    try {
      const response = await axiosInstance.post(
        'https://motivated-belief-b4a000ad6e.strapiapp.com/api/form-careers',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      setUploadSucces(response.status);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    form.reset();
    setFiles([]);
    setTimeout(() => {
      setOpenCV(!openCV);
      setUploadSucces(0);
    }, 1000);
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="md:flex md:justify-between">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="md:w-full mt-6">
                <FormLabel
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'firstname' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B]"
                    placeholder="First name"
                    {...field}
                    onFocus={() => handleFocus('firstname')}
                    onBlur={handleBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="md:w-full md:ml-4 mt-6">
                <FormLabel
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'lastname' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B]"
                    placeholder="Last name"
                    {...field}
                    onFocus={() => handleFocus('lastname')}
                    onBlur={handleBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="md:flex md:justify-between">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="md:w-full mt-6">
                <FormLabel
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'email' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B]"
                    placeholder="name@example.com"
                    {...field}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <DropZoneUpload setFiles={setFiles} files={files} />

        <Button
          type="submit"
          className="bg-white text-primary border border-primary w-full px-4 rounded-lg text-base mt-6 hover:bg-primary font-montserrat font-semibold hover:text-white md:py-4 md:h-auto"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
