import { useEffect, useState } from "react";

const AdviceCard = () => {
  const [advice, setAdvice] = useState({});

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const json = await response.json();
    setAdvice(json.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    // Card container
    <div className="flex flex-col items-center justify-center mt-64">
      {/* Card */}
      <div className="relative items-center flex flex-col shadow-md w-96 p-3 bg-[#323a49] rounded-lg">
        {/* Title */}
        <p className="text-xs text-[#52ffa8] uppercase text-center p-3">
          Advice #{advice.id}
        </p>
        {/* Quote */}
        <div className="text-xl text-center font-bold text-[#cee3e9] p-3">
          &quot;{advice.advice}&quot;
        </div>
        {/* Divider */}
        <img className="p-3 mb-6" src="/pattern-divider-desktop.svg" alt="" />
        {/* Button */}
        <button
          className="icon-btn absolute bg-[#52ffa8] hover:bg-[#369668] p-3 -bottom-6 rounded-full "
          onClick={fetchAdvice}
        >
          <img src="/icon-dice.svg" className={` transition`} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AdviceCard;
