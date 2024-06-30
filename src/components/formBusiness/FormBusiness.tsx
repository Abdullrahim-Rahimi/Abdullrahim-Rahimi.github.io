'use client';

import { useState } from 'react';
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

const formSchema = z.object({
  name: z.string(),
  business_type: z.string(),
  email: z
    .string()
    .min(5, {
      message: 'Email must be at least 5 characters.',
    })
    .email('This is not a valid email.'),
  social_media: z.string().url(),
  country_code: z.string(),
  mobile: z.string(),
  location_count: z.string(),
  staff_count: z.string(),
  business_name: z.string(),
});

export const ProfileForm = () => {
  const [activeField, setActiveField] = useState<string | null>(null);
  const [country_code, setCountryCode] = useState('+965');
  const [mobile, setPhoneNumber] = useState('');
  const [business_type, setBusinessType] = useState(false);
  const [homeService, setHomeService] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [contentChange, setContentChange] = useState({
    serviceProvidorType: 'Freelances',
    homeVisits: 'No',
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

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

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
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'name' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder="Your name"
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
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'email' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Work Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder="gmail@gmail.com"
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
          <p className="text-[#172524] font-montserrat font-semibold mb-2">
            Service Providor Type
          </p>
          <ToggleButtonForm
            firstValue="Business"
            secondValue="Freelances"
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
                    className={`font-montserrat font-semibold text-base ${
                      activeField === ' business_name' ? 'text-[#A67F6B]' : ''
                    }`}
                  >
                    Business Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                      placeholder="Spa Time"
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
                    className={`font-montserrat font-semibold text-base ${
                      activeField === 'business_type' ? 'text-[#A67F6B]' : ''
                    }`}
                  >
                    Business Type
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                      placeholder="Spa"
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
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'mobile' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Phone Number
                </FormLabel>
                <div className="flex gap-x-2">
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
          <FormField
            control={form.control}
            name="social_media"
            render={({ field }) => (
              <FormItem className="md:w-full md:ml-4 mt-6 rtl:md:ml-0 rtl:md:mr-4">
                <FormLabel
                  className={`font-montserrat font-semibold text-base ${
                    activeField === 'social_media' ? 'text-[#A67F6B]' : ''
                  }`}
                >
                  Social Media Account
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus:text-[#A67F6B] border focus:border-[#A67F6B] border-[#E8E9E9] bg-[#F9FBFB]"
                    placeholder="https:/www.youMediaAccount.com"
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
                    className={`font-montserrat font-semibold text-base ${
                      activeField === 'location_count' ? 'text-[#A67F6B]' : ''
                    }`}
                  >
                    Number of Locations
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-[#E8E9E9] bg-[#F9FBFB]">
                        <SelectValue className="flex" placeholder="0" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5" className="flex">
                          5
                        </SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="15">15</SelectItem>
                        {/* Add other country codes as needed */}
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
                    className={`font-montserrat font-semibold text-base ${
                      activeField === 'staff_count' ? 'text-[#A67F6B]' : ''
                    }`}
                  >
                    Number of Staff
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="border-[#E8E9E9] bg-[#F9FBFB]">
                        <SelectValue className="flex " placeholder="0" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5" className="flex">
                          5
                        </SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="15">15</SelectItem>
                        {/* Add other country codes as needed */}
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
          <p className="text-[#172524] font-montserrat font-semibold mb-2">
            Do you provide home service visits?
          </p>
          <ToggleButtonForm
            firstValue="Yes"
            secondValue="No"
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
          className="bg-white text-primary border border-primary w-full px-4 rounded-lg text-base mt-6 hover:bg-primary hover:text-white font-montserrat font-semibold md:h-auto"
        >
          {isSubmit ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
      <ToastContainer />
    </Form>
  );
};
