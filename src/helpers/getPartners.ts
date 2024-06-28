export const getData = async () => {
  try {
    const res = await fetch('https://devapp.trythedaisy.com/api/v1/vendors', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const responseData: any = await res.json();

    if (!responseData.status) throw new Error('No data found');

    return responseData.data.vendors;
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
    // You can return a default value or throw the error to handle it in the component
    return null;
  }
};
export const getRandomElements = (array: any[], count: number) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
