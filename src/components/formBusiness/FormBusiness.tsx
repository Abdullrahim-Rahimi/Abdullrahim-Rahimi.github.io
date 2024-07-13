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
import { ToggleButtonForm } from './ToogleForm';
import { countries } from 'country-data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';

export const ProfileForm = () => {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [country_code, setCountryCode] = useState('+965');
  const [mobile, setPhoneNumber] = useState('');
  const [business_type, setBusinessType] = useState(false);
  const [homeService, setHomeService] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [textForm, setTextForm] = useState<any>();
  const [descriptionForm, setDescriptionForm] = useState<any>();
  const [contentChange, setContentChange] = useState({
    serviceProvidorType: 'Freelances',
    homeVisits: 'No',
  });
  const formSchema = z.object({
    name: z.string(),
    business_type: z.string(),
    email: z
      .string()

      .email(descriptionForm?.errorEmail),
    social_media: z.string().url(descriptionForm?.url),
    country_code: z.string(),
    mobile: z.string(),
    location_count: z.string(),
    staff_count: z.string(),
    business_name: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: 'enquiry',
      name: '',
      business_type: '',
      email: '',
      social_media: '',
      mobile: '',
      location_count: '',
      staff_count: '',
      business_name: '',
      content: '',
      country_code: '+965',
    },
  });
  const usedCountryCodes = new Set();

  const onSubmit = async (data: any) => {
    const completePhoneNumber = country_code + mobile;
    const contentChangeString = JSON.stringify(contentChange);
    const formData = {
      ...data,
      mobile: completePhoneNumber,
      content: contentChangeString,
      type: 'enquiry',
    };
    try {
      setIsSubmit(true);
      const response = await fetch(
        `https://devapp.trythedaisy.com/api/v1/vendor/demo/enquiry`,
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
  const { lang } = useChangeLanguage();
  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(
        `/form-becomepartners?locale=${lang}`,
      );
      const [data] = response?.data?.data;
      setTextForm(data?.attributes?.formDescription);
      setDescriptionForm(data?.attributes?.formPlaceholder);
    })();
  }, [lang]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" bg-white p-6 rounded-xl mt-[48px] md:mx-auto md:w-[860px]"
      >
        <div className="md:flex md:justify-between">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="md:w-full mt-6">
                <FormLabel
                  className={`ltr:font-montserrat font-semibold text-base ${
                    activeField === 'name' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  {textForm?.name}
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder={descriptionForm?.name}
                    {...field}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="md:w-full md:ml-4 mt-6 rtl:md:ml-0 rtl:md:mr-4">
                <FormLabel
                  className={`ltr:font-montserrat font-semibold text-base ${
                    activeField === 'email' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  {textForm?.email}
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder={descriptionForm?.email}
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
        <div className="w-full mt-6">
          <p className="text-[#172524] ltr:font-montserrat font-semibold mb-2">
            {textForm?.serviceProvidor}
          </p>
          <ToggleButtonForm
            firstValue={textForm?.serviceProvidorValue[0]}
            secondValue={textForm?.serviceProvidorValue[1]}
            homeService={business_type}
            setHomeService={setBusinessType}
            setContent={setContentChange}
            name="serviceProvidorType"
          />
        </div>
        {business_type && (
          <div className="md:flex md:justify-between">
            <FormField
              control={form.control}
              name="business_name"
              render={({ field }) => (
                <FormItem className="md:w-full mt-6 ">
                  <FormLabel
                    className={`ltr:font-montserrat font-semibold text-base ${
                      activeField === ' business_name' ? 'text-[#A67F6B]' : ''
                    }`}
                  >
                    {textForm?.businessName}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                      placeholder={descriptionForm?.businessName}
                      {...field}
                      onFocus={() => handleFocus('business_name')}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="business_type"
              render={({ field }) => (
                <FormItem className="md:w-full md:ml-4 mt-6 rtl:md:ml-0 rtl:md:mr-4">
                  <FormLabel
                    className={`ltr:font-montserrat font-semibold text-base ${
                      activeField === 'business_type' ? 'text-[#A67F6B]' : ''
                    }`}
                  >
                    {textForm?.businessType}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                      placeholder={descriptionForm?.businessType}
                      {...field}
                      onFocus={() => handleFocus('business_type')}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
        <div className="md:flex md:justify-between">
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem className="md:w-full mt-6">
                <FormLabel
                  className={`ltr:font-montserrat font-semibold text-base ${
                    activeField === 'mobile' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  {textForm?.phoneNumber}
                </FormLabel>
                <div className="flex gap-x-2">
                  <FormControl>
                    <Select
                      value={country_code}
                      onValueChange={(value) => setCountryCode(value)}
                    >
                      <SelectTrigger className="w-32 flex border-[#E8E9E9] bg-[#F9FBFB] rtl:flex-row-reverse">
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
          <FormField
            control={form.control}
            name="social_media"
            render={({ field }) => (
              <FormItem className="md:w-full md:ml-4 mt-6 rtl:md:ml-0 rtl:md:mr-4">
                <FormLabel
                  className={`ltr:font-montserrat font-semibold text-base ${
                    activeField === 'social_media' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  {textForm?.socialMediaAccount}
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder={descriptionForm?.socialMediaAccount}
                    {...field}
                    onFocus={() => handleFocus('social_media')}
                    onBlur={handleBlur}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {business_type && (
          <div className="md:flex md:justify-between">
            <FormField
              control={form.control}
              name="location_count"
              render={({ field }) => (
                <FormItem className="md:w-full mt-6">
                  <FormLabel
                    className={`ltr:font-montserrat font-semibold text-base ${
                      activeField === 'location_count' ? 'text-[#A67F6B]' : ''
                    }`}
                  >
                    {textForm?.numberofLocations}
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-[#E8E9E9] bg-[#F9FBFB] rtl:flex-row-reverse">
                        <SelectValue
                          className="flex flex-row-reverse"
                          placeholder="0"
                        />
                      </SelectTrigger>
                      <SelectContent className="overflow-y-auto max-h-[10rem] ">
                        {descriptionForm.numberofLocations.length &&
                          descriptionForm.numberofLocations.map(
                            (item: any, index: number) => {
                              return (
                                <SelectItem
                                  key={index}
                                  value={item}
                                  className="flex "
                                >
                                  {item}
                                </SelectItem>
                              );
                            },
                          )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="staff_count"
              render={({ field }) => (
                <FormItem className="md:w-full md:ml-4 mt-6 rtl:md:ml-0 rtl:md:mr-4 ">
                  <FormLabel
                    className={`ltr:font-montserrat font-semibold text-base ${
                      activeField === 'staff_count' ? 'text-[#A67F6B]' : ''
                    }`}
                  >
                    {textForm?.numberofStaff}
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-[#E8E9E9] bg-[#F9FBFB] rtl:flex-row-reverse">
                        <SelectValue className="flex " placeholder="0" />
                      </SelectTrigger>
                      <SelectContent className="overflow-y-auto max-h-[10rem] rtl:flex-row-reverse">
                        {descriptionForm.numberofStaff.length &&
                          descriptionForm.numberofStaff.map(
                            (item: any, index: number) => {
                              return (
                                <SelectItem
                                  key={index}
                                  value={item}
                                  className="flex"
                                >
                                  {item}
                                </SelectItem>
                              );
                            },
                          )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
        <div className="w-full mt-6">
          <p className="text-[#172524] ltr:font-montserrat font-semibold mb-2">
            {textForm?.homeServiceVisits}
          </p>
          <ToggleButtonForm
            firstValue={textForm?.homeServiceVisitsList?.[0]}
            secondValue={textForm?.homeServiceVisitsList?.[1]}
            homeService={homeService}
            setHomeService={setHomeService}
            setContent={setContentChange}
            name="homeVisits"
          />
        </div>

        <Separator className="bg-[#E8E9E9] mt-6" />
        <Button
          type="submit"
          disabled={isSubmit}
          className="bg-white text-primary border border-primary w-full px-4 rounded-lg text-base mt-6 hover:bg-primary hover:text-white ltr:font-montserrat font-semibold md:h-auto"
        >
          {isSubmit ? 'Sending...' : `${textForm?.buttonText}`}
        </Button>
      </form>
      <ToastContainer />
    </Form>
  );
};
