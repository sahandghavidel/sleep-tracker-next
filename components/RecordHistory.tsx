import getRecords from '@/app/actions/getRecords';
import RecordItem from './RecordItem';
import { Record } from '@/types/Record';

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className='bg-red-100 text-red-800 border border-red-300 rounded-md p-4 text-center'>
        <p>{error}</p>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className='bg-gray-100 flex items-center justify-center pb-6'>
        <div className='bg-white shadow-lg rounded-lg p-8 w-full text-center'>
          <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>
            No Sleep Records Found
          </h3>
          <p className='text-gray-600'>
            Start tracking your sleep to see your history here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-gray-100 p-6 '>
      <div className='bg-white shadow-lg rounded-lg p-8 mx-auto'>
        <h3 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent border-b border-gray-200 pb-6'>
          Sleep History
        </h3>
        <ul className='space-y-4'>
          {records.map((record: Record) => (
            <RecordItem key={record.id} record={record} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecordHistory;
