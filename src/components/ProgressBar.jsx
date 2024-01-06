import React from "react";

export default function ProgressBar({ activeStep, totalSteps }) {

  return (
    <div className="w-full flex justify-between">
      {Array.from({ length: totalSteps }, (_, i) => {
        const isActive = i === activeStep;

        return (
          <div key={i} className="flex-1 h-1 bg-gray-100 rounded-full mx-2">
            <div
              className={`h-1  ${isActive ? "bg-blue-100" : "bg-gray-100"}`}
            />
          </div>
        );
      })}
    </div>
  );
}
