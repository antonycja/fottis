import React from "react";
export default function Card({
  image,
  title = "Test title here",
  heading = "",
  headingColor = "slate-200",
  cardText = "",
  index,
}) {
  return (
    <>
      <div
        className={`card-container flex flex-col gap-3 ${
          image && "items-center"
        }`}
      >
        {image ? (
          <>
            <div className="card-img p-6 w-fit rounded-full bg-gradient-to-b from-[#A8428E] to-[#1D2155]">
              {image}
            </div>
            {heading && (
              <div
                className={`heading-text text-${headingColor} text-3xl font-bold`}
              >
                {heading}
              </div>
            )}
          </>
        ) : (
          <div className="card-header text-xl font-semibold">
            <span>{index + 1}</span>. {title}
          </div>
        )}

        <div className={`card-text ml-5 ${heading ? "text-lg" : "text-base"} `}>
          {cardText}
        </div>
      </div>
    </>
  );
}
