import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useCreateAds = () => {
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(null);
  const [token, setToken] = useState('');
  const [redirect, setRedirect] = useState('');
  const router = useRouter();

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('token'));
    if (userToken) {
      setToken(userToken.token);
    }
  });

  useEffect(() => {
    router.push(redirect);
  }, [redirect]);

  const createAd = async (
    productName,
    redirectUrl,
    productDescription,
    tags,
    advertType,
    cta,
    images,
    webAddress,
    amount,
    containAdultContent
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('http://35.153.52.116/api/v1/ads/create', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productName,
        redirectUrl,
        description: productDescription,
        tags,
        type: advertType,
        CTAButtonDesign: cta,
        images,
        promotedLink: webAddress,
        budget: amount,
        isNfsw: containAdultContent,
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json);
      console.log('ad not created');
    }
    if (response.ok) {
      console.log(json);
      console.log('ad created');
      setRedirect(json.data.paymentDetails.url);
    }
  };
  return { createAd, isLoading, error, msg, redirect };
};
