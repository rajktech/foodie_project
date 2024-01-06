import React from 'react';
import {getMeal} from '@/lib/meals';
import Image from 'next/image';
import classes from './page.module.css';
import { notFound } from 'next/navigation';

export async function generateMetadata ({params}) {
  const meal = getMeal (params.mealslug);
  return {
    title: meal.title,
    description: 'Next Level Food description',
  };
}

const MealSlug = ({params}) => {
  const meal = getMeal (params.mealslug);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace (/\n/g, '<br />');
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        />
      </main>
    </>
  );
};
export default MealSlug;
