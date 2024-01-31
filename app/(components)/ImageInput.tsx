"use client"
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

export default function ImageInput() {

  const [inputValue, setInputValue] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleShorten = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      console.log('aaya');
      const response = await fetch('http://localhost:4000/url/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: inputValue })
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const responseData = await response.json();
      setShortenedUrl(responseData.shortUrl);
      console.log('Response Data:', responseData);
    } catch (error) {
      // Handle error, maybe show an error message
      console.error('Error shortening link:', error);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl)
      .then(() => {
        toast.success('URL copied to clipboard successfully!');
      })
      .catch((error) => {
        toast.error('Failed to copy URL to clipboard.');
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='flex md:flex-row flex-col-reverse justify-center items-center'>
      <div>
        <Image
          src='/illustration.png'
          alt='Image'
          width={500}
          height={500}
        />
      </div>
      <div className='ml-12 md:py-20 py-8'>
        <p className='text-2xl font-bold justify-evenly'>Shrink your link, Expand your reach</p>
        {shortenedUrl ? (
          <div>
            <div className='mt-2'>
              <label htmlFor='originalUrl' className='block font-semibold text-xl'>
                Original Link
              </label>
              <input
                type='text'
                id='originalUrl'
                className='flex-1 pr-28 pl-4 py-3 text-lg outline-none rounded-2xl border mt-1 w-full'
                value={inputValue}
                readOnly
              />
            </div>
            <div className='mt-2'>
              <label htmlFor='shortenedUrl' className='block text-xl font-semibold '>
                Shortened URL
              </label>
              <div className="flex items-center mt-2 relative">
                <input
                  type='text'
                  id='shortenedUrl'
                  className='flex-1 pl-4 py-5 text-lg outline-none rounded-2xl w-full border mt-1'
                  value={shortenedUrl}
                  readOnly
                />
                <button className='absolute right-3 py-3 px-6 rounded-2xl cursor-pointer bg-blue-500 text-white font-medium' onClick={handleCopyToClipboard}>
                  Copy
                </button>
              </div>
              <ToastContainer />
            </div>
          </div>
        ) : (
          <div>
            <p className='mt-4 font-sans text-lg font-medium'>Create New Link</p>
            <p className='font-sans font-normal text-base text-gray-500'>Create, shorten and manage your links</p>
            <div className='flex items-center mt-2 relative border rounded-2xl shadow-lg'>
              <input
                type='text'
                id='linkInput'
                className='flex-1 pr-28 pl-4 py-5 text-lg outline-none rounded-2xl'
                placeholder='https://example.com'
                value={inputValue}
                onChange={handleInputChange}
              />
              <button className='absolute right-3 py-3 px-6 rounded-2xl cursor-pointer bg-blue-500 text-white font-medium' onClick={handleShorten}>
                Shorten
              </button>
            </div>
            <p className="text-xs mt-2 text-gray-400">* By Clicking Shorten you are agreeing to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy</span></p>
          </div>
        )}
      </div>
    </ div>
  )
}
