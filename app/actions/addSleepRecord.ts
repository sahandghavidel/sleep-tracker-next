'use server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

interface RecordData {
  text: string;
  amount: number;
  date: string; // Added date field
}

interface RecordResult {
  data?: RecordData;
  error?: string;
}

async function addSleepRecord(formData: FormData): Promise<RecordResult> {
  const textValue = formData.get('text');
  const amountValue = formData.get('amount');
  const dateValue = formData.get('date'); // Extract date from formData

  // Check for input values
  if (
    !textValue ||
    textValue === '' ||
    !amountValue ||
    !dateValue ||
    dateValue === ''
  ) {
    return { error: 'Text, amount, or date is missing' };
  }

  const text: string = textValue.toString(); // Ensure text is a string
  const amount: number = parseFloat(amountValue.toString()); // Parse amount as number
  // Convert date to ISO-8601 format
  let date: string;
  try {
    date = new Date(dateValue.toString()).toISOString(); // Convert to ISO-8601 format
  } catch (error) {
    console.error('Invalid date format:', error); // Log the error
    return { error: 'Invalid date format' };
  }

  // Get logged in user
  const { userId } = await auth();

  // Check for user
  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    // Check if a record with the same date already exists
    const existingRecord = await db.record.findFirst({
      where: {
        userId,
        date: date, // Match the date
      },
    });

    let recordData: RecordData;

    if (existingRecord) {
      // Update the existing record
      const updatedRecord = await db.record.update({
        where: { id: existingRecord.id },
        data: {
          text,
          amount,
        },
      });

      recordData = {
        text: updatedRecord.text,
        amount: updatedRecord.amount,
        date: updatedRecord.date?.toISOString() || date,
      };
    } else {
      // Create a new record
      const createdRecord = await db.record.create({
        data: {
          text,
          amount,
          date, // Save the date to the database
          userId,
        },
      });

      recordData = {
        text: createdRecord.text,
        amount: createdRecord.amount,
        date: createdRecord.date?.toISOString() || date,
      };
    }

    revalidatePath('/');

    return { data: recordData };
  } catch (error) {
    console.error('Error adding sleep record:', error); // Log the error
    return {
      error: 'An unexpected error occurred while adding the sleep record.',
    };
  }
}

export default addSleepRecord;
