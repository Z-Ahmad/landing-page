import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {

  const backgroundImageStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
    backgroundSize: "cover"
  }

  return (
    <div>
        <div className=' text-white ' style={backgroundImageStyle}>
          <div className='bg-gradient-to-r from-black px-8 py-16'>
            <div className='max-w-xl grid grid-cols-1 gap-8'>
            <div className='w-12'>
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z" fill="white"/></svg>
            </div>
            
            <h2 className='text-xl font-bold uppercase'>Become a host</h2>
            <h1 className='text-6xl font-bold'>Host your space, share your world</h1>
            <p className='text-lg'>
              The art of hosting is rooted in thoughtful design. Share your unique aesthetic with guests and earn extra income on a schedule that works for you.
            </p>
            <button className='bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48'>
              Try hosting
            </button>
          </div>
        </div>
      </div>
      
      <div className='px-8 py-16'>
        <div className='max-w-md mb-16'>
          <h2 className='text-5xl'>
            Your next chapter, made possible by Hosting
          </h2>
        </div>
        
        <div className=' grid grid-cols-2 gap-4 text-slate-600'>
          <div>
            <h3 className='text-2xl font-bold mb-2'>Share what you love</h3>
            <p className='text-lg'>
              Indulge your love for design when you hsot Airbnb guests, who are drawn to authentic travel in createively curated spaces.
            </p>
          </div>

          <div> 
            <h3 className='text-2xl font-bold mb-2'>Host how you want to</h3>
            <p className='text-lg'>
              Airbnb gives you the tools and support to earn extra income, be your own boss and invest in your passions.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
