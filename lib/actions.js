'use server';
import {saveMeal} from '@/lib/meals';
import { revalidatePath } from 'next/cache';
import {redirect} from 'next/navigation';

function isInvalidText (text) {
  return !text || text.trim () === '';
}
export async function handleMealForm (prevState, formData) {
  const meal = {
    title: formData.get ('title'),
    summary: formData.get ('summary'),
    instructions: formData.get ('instructions'),
    creator: formData.get ('name'),
    creator_email: formData.get ('email'),
    image: formData.get ('image'),
  };

  if (
    isInvalidText (meal.title) ||
    isInvalidText (meal.summary) ||
    isInvalidText (meal.instructions) ||
    isInvalidText (meal.creator) ||
    isInvalidText (meal.creator_email) ||
    !meal.creator_email.includes ('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
        message: 'Invalid input. Please fill out all fields and try again.'
    }
  }
  console.log (meal);
  await saveMeal (meal);
  revalidatePath('/meals', 'layout');
  redirect ('/meals');
}
