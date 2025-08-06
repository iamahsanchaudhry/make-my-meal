import React from "react";
import makemymealImage from "@/assets/makemymeal.png";

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col lg:gap-5 sm:flex-row p-2 m-5 outline outline-blue-300 dark:outline-blue-800 rounded-[22px] items-center sm:items-start">
      {/* Image on the far left */}
      <div className="flex-shrink-0 rounded-[22px] mb-4 sm:mb-0">
        <img
          src={makemymealImage as string}
          alt="Make My Meal"
          className="w-40 sm:w-60 h-auto rounded-lg"
        />
      </div>

      {/* Texts on the right */}
      <div className="sm:ml-6 lg:pt-4 flex flex-col justify-center text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">🍽️ MAKE MY MEAL</h1>
        <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-xl">
          Discover delicious recipes from around the world! Easily explore meals
          by category, area, or ingredient. With step-by-step instructions,
          images, and videos, cooking your next favorite dish is just a click
          away.
        </p>
      </div>
    </div>
  );
};

export default Intro;
