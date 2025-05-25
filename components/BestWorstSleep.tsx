import getBestWorstSleep from '@/app/actions/getBestWorstSleep';

const BestWorstSleep = async () => {
  const { bestSleep, worstSleep } = await getBestWorstSleep();

  return (
    <div className='bg-gray-100 flex items-center justify-center'>
      <div className='bg-white shadow-lg rounded-lg p-8 w-full'>
        <h3 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
          Best and Worst Sleep
        </h3>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-6 sm:space-y-0'>
          {/* Best Sleep */}
          <div className='text-center'>
            <h4 className='text-lg font-medium text-gray-600 mb-2'>
              Best Sleep
            </h4>
            <p className='text-3xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent'>
              {bestSleep !== undefined
                ? `${bestSleep} hours`
                : 'No data available'}
            </p>
          </div>

          {/* Divider */}
          <div className='hidden sm:block h-16 w-px bg-gray-300'></div>

          {/* Worst Sleep */}
          <div className='text-center'>
            <h4 className='text-lg font-medium text-gray-600 mb-2'>
              Worst Sleep
            </h4>
            <p className='text-3xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent'>
              {worstSleep !== undefined
                ? `${worstSleep} hours`
                : 'No data available'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestWorstSleep;
