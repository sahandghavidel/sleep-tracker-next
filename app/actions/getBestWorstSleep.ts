'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

async function getBestWorstSleep(): Promise<{
  bestSleep?: number;
  worstSleep?: number;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    // Fetch all records for the authenticated user
    const records = await db.record.findMany({
      where: { userId },
      select: { amount: true }, // Fetch only the `amount` field for efficiency
    });

    if (!records || records.length === 0) {
      return { bestSleep: 0, worstSleep: 0 }; // Return 0 if no records exist
    }

    const amounts = records.map((record) => record.amount);

    // Calculate best and worst sleep amounts
    const bestSleep = Math.max(...amounts); // Highest amount
    const worstSleep = Math.min(...amounts); // Lowest amount

    return { bestSleep, worstSleep };
  } catch (error) {
    console.error('Error fetching sleep amounts:', error); // Log the error
    return { error: 'Database error' };
  }
}

export default getBestWorstSleep;
