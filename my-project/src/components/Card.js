import React from "react";

export default function Card() {
  return (
    <div className="bg-white h-5/6 grid grid-cols-1 lg:grid-cols-2 p-5">
      {/* Calcullator part */}
      <div className="calculator-part flex flex-col gap-3">
        <h1 className="text-darkGrayishCyan font-bold">Bill</h1>
        <input type="text" className="bg-lightGrayishCyan items-stretch pr-32" />
        <h1 className="text-darkGrayishCyan fomt-bold">Select Tip %</h1>
        <div className="select-tip grid grid-cols-2 lg:grid-cols-3 gap-3">
          <button className="p-3 rounded-md  bg-veryDarkCyan text-white">
            5%
          </button>
          <button className="p-3 rounded-md bg-veryDarkCyan text-white">
            10%
          </button>
          <button className="p-3 rounded-md bg-veryDarkCyan text-white">
            15%
          </button>
          <button className="p-3 rounded-md bg-veryDarkCyan text-white">
            20%
          </button>
          <button className="p-3 rounded-md bg-veryDarkCyan text-white">
            25%
          </button>
          <button className="p-3 rounded-md bg-veryDarkCyan text-white">
            Custom
          </button>
        </div>
        <h1 className="text-darkGrayishCyan fomt-bold">Number of people</h1>
        <div className="flex w-full">
          <input
            type="text"
            className="bg-lightGrayishCyan  w-choSir h-10"
          />
        </div>
      </div>

      {/* Result Part */}
      <div className="gap-5 result-part bg-veryDarkCyan p-5 pt-7 rounded-md flex flex-col ">
        <div className="tip-amount flex justify-between items-center">
          <div className="left">
            <h1 className="text-white">Tip Amount</h1>
            <h2 className="text-darkGrayishCyan">/ person</h2>
          </div>
          <div className="right text-strongCyan text-5xl ">3</div>
        </div>
        <div className="total flex justify-between items-center">
          <div className="left">
            <h1 className="text-white"> Tip Amount</h1>
            <h2 className="text-darkGrayishCyan">/ person</h2>
          </div>
          <div className="right text-strongCyan text-5xl">4</div>
        </div>
        {/* Reset button */}
        <div className="reset w-full bg-grayishCyan rounded-md text-center mt-auto py-3 ">
          <button className=" text-veryDarkCyan bg-grayishCyan w-full text-xl font-extrabold ">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
