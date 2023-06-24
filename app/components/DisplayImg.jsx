"use client"
import React, { useState } from 'react';
import { QueryClientProvider, useQuery, QueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import DownloadableContent from './DownloadableContent';


const queryClient = new QueryClient()

export default function DisplayImg(){
    return (
        <QueryClientProvider client={queryClient}>
            <ImageSlider />
      </QueryClientProvider>
  
    )
}

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(16);
  const memeState = useSelector(state => state.meme);

  // Fetch image URLs using react-query
  const { data, isLoading, isError } = useQuery('imageUrls', async () => {
    const response = await fetch('https://api.imgflip.com/get_memes');
    if (!response.ok) {
      throw new Error('Failed to fetch image URLs');
    }
    const responseData = await response.json();
    return responseData.data.memes;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching image URLs</p>;
  }

    const memesArray = data

    const image = memesArray[currentIndex]?.url;

  const handleNextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
    
  };

  const textTransform = (memeState.isUpperCase ? "uppercase" : "normal-case" )

  const containerClasses = classnames("imageContainer",'relative', 'h-full',);

  const imageClasses = classnames('w-full', 'h-auto',"drop-shadow-2xl",);

  const textClassesTop = classnames('absolute', 'top-2', 'left-0', 'right-0', 'p-4', 'text-white', "text-center", 'text-2xl', 'font-bold',textTransform, );

  const textClassesBottom = classnames('absolute', 'bottom-2', 'left-0', 'right-0', 'p-4', 'text-white', "text-center", 'text-2xl', 'font-bold', textTransform, );
  
  

  return (
    <>
    <div className='flex flex-col items-center'>
        <DownloadableContent containerId="image-container">
            <div className={containerClasses} id="image-container">
                <img src={image} alt="Current Image" className={imageClasses}  />
                <h1
            className={textClassesTop}
            style={{
                color: memeState.fontColor,
                fontSize: `${memeState.fontSize}px`,
                fontFamily: memeState.selectedFont,
            }}
            >{memeState.topText}
            </h1>
                <h1
            className={textClassesBottom}
            style={{
                color: memeState.fontColor,
                fontSize: `${memeState.fontSize}px`,
                fontFamily: memeState.selectedFont,
            }}
            >{memeState.bottomText}
            </h1>
            </div>
            </DownloadableContent>
            <div>
                <button onClick={handleNextImage} className='bg-transparent hover:bg-orange-300 text-orange-500 font-light hover:text-white py-2 px-4  border-orange-300 hover:border-transparent '>next image</button>
        </div>
      </div>
      
        

    </>
  );
}



















