import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='font-sans bg-gray-100 text-gray-800'>
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row items-center justify-between p-3 md:p-16 bg-gray-100 pt-20'>
        <div className='flex-1 mb-8 xl:pl-10'>
          <h1 className='text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            Welcome to SleepTracker
          </h1>
          <p className='md:text-xl mb-6'>
            Track your sleep, improve your health, and wake up feeling refreshed
            with SleepTracker.
          </p>
          <SignInButton>
            <button className='w-full md:w-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-4 py-2 rounded-md font-medium cursor-pointer'>
              Get Started
            </button>
          </SignInButton>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <img
            src='sleep-tracker.png'
            alt='SleepTracker Illustration'
            className='w-full md:max-w-md rounded-tl-3xl rounded-br-3xl shadow-lg'
          />
        </div>
      </div>

      {/* Divider */}
      <div className='h-1 bg-gray-300'></div>

      {/* Frequently Asked Questions Section */}
      <div className='py-16 px-8 bg-white'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>
          Frequently Asked Questions
        </h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          <div>
            <h3 className='text-xl font-bold'>What is SleepTracker?</h3>
            <p className='text-gray-600'>
              SleepTracker is a powerful tool designed to help you monitor your
              sleep patterns and improve your overall health.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold'>How does it work?</h3>
            <p className='text-gray-600'>
              SleepTracker analyzes your sleep data and provides personalized
              insights to help you achieve better sleep.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-bold'>Is SleepTracker free?</h3>
            <p className='text-gray-600'>
              Yes, SleepTracker offers a free plan with basic features. Premium
              plans are available for advanced insights and analytics.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='h-1 bg-gray-300'></div>

      {/* Testimonials Section */}
      <div className='py-16 px-8 bg-gray-100'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>
          What Our Users Say
        </h2>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-md shadow'>
            <p className='text-gray-700 mb-4'>
              &quot;SleepTracker has completely transformed my sleep schedule. I
              feel more energized every day!&quot;
            </p>
            <p className='text-purple-500 font-bold'>- Sarah L.</p>
          </div>
          <div className='bg-white p-6 rounded-md shadow'>
            <p className='text-gray-700 mb-4'>
              &quot;The insights from SleepTracker have helped me identify and
              fix my sleep issues. Highly recommend it!&quot;
            </p>
            <p className='text-purple-500 font-bold'>- John D.</p>
          </div>
          <div className='bg-white p-6 rounded-md shadow'>
            <p className='text-gray-700 mb-4'>
              &quot;SleepTracker is so easy to use and provides accurate data.
              It&#39;s a must-have for anyone looking to improve their
              sleep!&quot;
            </p>
            <p className='text-purple-500 font-bold'>- Emily R.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;
