import React from 'react';

const steps = [
  { number: 1, title: "Personal Info" },
  { number: 2, title: "Gallery Info" },
  { number: 3, title: "Social Links" },
  { number: 4, title: "Documents" },
  { number: 5, title: "Account Details" },
];

type StepperProps = {
  currentStep: number;
};

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  return (
    <div className="flex justify-between items-center  p-4 rounded-lg  ">
      {steps.map((step, index) => (
        <div key={step.number} className="flex flex-col items-center">
          {/* Step Circle */}
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center  font-semibold ${
              currentStep === step.number
                ? 'bg-gray-900'
                : 'bg-gray-200 text-black'
            }`}
          >
            {step.number}
          </div>

          {/* Step Title */}
          <div className="ml-2 text-xlg font-medium text-gray-700">
            {step.title}
          </div>

          {/* Line Separator */}
          {index < steps.length - 1 && (
            <div className="w-8 h-px bg-gray-400 mx-4" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;