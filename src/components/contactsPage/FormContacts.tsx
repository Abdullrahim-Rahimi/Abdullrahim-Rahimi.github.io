'use client';

import { useEffect, useState } from 'react';
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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import Separator from '../separator/Separator';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { countries } from 'country-data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';

const formSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email('This is not a valid email.'),
  content: z.string(),
  acceptconditions: z.boolean().default(false).optional(),
});

export const FormContacts = ({ style }: { style?: string }) => {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [country_code, setCountryCode] = useState('+965');
  const [mobile, setPhoneNumber] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [formText, setFormText] = useState<any>();
  const [formTextPlaceholder, setFormTextPlaceholder] = useState<any>();

  const { lang } = useChangeLanguage();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      content: '',
      mobile: '',
      acceptconditions: false,

      country_code: '+965',
    },
  });

  const onSubmit = async (data: any) => {
    const completePhoneNumber = country_code + mobile;
    const formData = {
      ...data,
      mobile: completePhoneNumber,
      country_code,
      type: 'enquiry',
    };

    try {
      setIsSubmit(true);
      delete formData.acceptconditions;
      const response = await fetch(
        `https://app.trythedaisy.com/api/v1/vendor/demo/enquiry`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      const data = await response.json();
      toast.success('Success Submitet!');
      setPhoneNumber('00000000');
      form.reset();
    } catch (error) {
      setIsSubmit(false);
      console.error('Error:', error);
      toast.error('Error!');
    } finally {
      setIsSubmit(false);
    }
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(`/contact-forms?locale=${lang}`);
      const [data] = response?.data?.data;
      setFormText(data?.attributes?.textContactForm);
      setFormTextPlaceholder(data?.attributes?.placeholderContactForm);
    })();
  }, [lang]);
  const usedCountryCodes = new Set();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={` bg-white p-6 rounded-xl md:mx-auto md:w-[860px] mx-4 border border-[#E8E9E9] ${style}`}
      >
        <div className="md:flex md:justify-between">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="md:w-full mt-6">
                <FormLabel
                  className={`ltr:font-montserrat font-semibold text-base ${
                    activeField === 'firstname' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  {formText?.name}
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder={formTextPlaceholder?.name}
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
              <FormItem className="md:w-full md:ml-4 rtl:md:mr-4 mt-6">
                <FormLabel
                  className={`ltr:font-montserrat font-semibold text-base ${
                    activeField === 'lastname' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  {formText?.lastName}
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder={formTextPlaceholder?.lastName}
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
                  className={`ltr:font-montserrat font-semibold text-base ${
                    activeField === 'email' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  {formText?.email}
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder={formTextPlaceholder?.email}
                    {...field}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem className="md:w-full mt-6 ltr:md:ml-4 rtl:md:mr-4">
                <FormLabel
                  className={`ltr:font-montserrat font-semibold text-base ${
                    activeField === 'mobile' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  {formText?.phone}
                </FormLabel>
                <div className="flex space-x-2 ">
                  <FormControl>
                    <Select
                      value={country_code}
                      onValueChange={(value) => setCountryCode(value)}
                    >
                      <SelectTrigger className="w-32 flex border-[#E8E9E9] bg-[#F9FBFB]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.all.map((item, i) => {
                          const country_code = item.countryCallingCodes[0];
                          if (
                            !item.emoji ||
                            !country_code ||
                            usedCountryCodes.has(country_code)
                          ) {
                            return null;
                          }

                          usedCountryCodes.add(country_code);

                          return (
                            <SelectItem
                              key={`${country_code}-${item.name}`}
                              value={country_code}
                            >
                              <span className="flex items-center justify-center text-nowrap">
                                <span>{item.emoji} </span>
                                {country_code}
                              </span>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <Input
                      className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                      type="number"
                      placeholder="00000000"
                      value={mobile}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      onFocus={() => handleFocus('mobile')}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="md:w-full mt-6">
              <FormLabel
                className={`ltr:font-montserrat font-semibold text-base ${
                  activeField === 'content' ? 'text-[#A67F6B]' : ''
                }`}
              >
                {formText?.content}
              </FormLabel>
              <FormControl>
                <Textarea
                  className="focus:text-[#A67F6B] border focus:border-[#A67F6B] h-[155px] resize-none border-[#E8E9E9] bg-[#F9FBFB]"
                  {...field}
                  onFocus={() => handleFocus('content')}
                  onBlur={handleBlur}
                  placeholder={formTextPlaceholder?.content}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptconditions"
          render={({ field }) => (
            <FormItem className="flex items-center mt-8 space-x-2">
              <FormControl>
                <Checkbox
                  id="acceptconditions"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="md:rtl:ml-2"
                />
              </FormControl>
              <FormLabel
                htmlFor="acceptconditions"
                className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-6 text-[#455150] "
              >
                {formText?.submit}
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="bg-[#E8E9E9] mt-6 " />
        <Button
          type="submit"
          disabled={!form.getValues().acceptconditions}
          className="bg-white text-primary border border-primary w-full px-4 rounded-lg text-base mt-6 hover:bg-primary ltr:font-montserrat font-semibold hover:text-white md:py-4 md:h-auto"
        >
          {isSubmit ? 'Sending...' : `${formText?.textButton}`}
        </Button>
      </form>
      <ToastContainer />
    </Form>
  );
};
