import React from "react";

export default function Card() {
  return (
    <div className="bg-white h-5/6 grid grid-cols-1 lg:grid-cols-2 p-5">
      {/* Calcullator part */}
      <div className="calculator-part">
        <h1 className="text-darkGrayishCyan font-bold">Bill</h1>
        <input type="text" className="bg-veryLightGrayishGyan w-full" />
        <h1 className="text-darkGrayishCyan fomt-bold">Select Tip %</h1>
        <div className="select-tip grid grid-cols-2 lg:grid-cols-3 gap-3">
          <button className="p-3 bg-black text-white">5</button>
          <button className="p-3 bg-black text-white">10</button>
          <button className="p-3 bg-black text-white">15</button>
          <button className="p-3 bg-black text-white">20</button>
          <button className="p-3 bg-black text-white">25</button>
          <button className="p-3 bg-black text-white">30</button>
        </div>
        <h1 className="text-darkGrayishCyan fomt-bold">Number of people</h1>
        <input type="text" className="bg-veryLightGrayishGyan w-full mr-auto" />
      </div>

      {/* Result Part */}
      <div className="result-part bg-veryDarkCyan p-5 pt-7 rounded-md">
        <div className="tip-amount flex justify-between items-center">
          <div className="left">
            <h1 className="text-white">Tip Amount</h1>
            <h2 className="text-darkGrayishCyan">/ person</h2>
          </div>
          <div className="right text-strongCyan">3</div>
        </div>
        <div className="total flex justify-between items-center">
          <div className="left">
            <h1 className="text-white"> Tip Amount</h1>
            <h2 className="text-darkGrayishCyan">/ person</h2>
          </div>
          <div className="right text-strongCyan">4</div>
        </div>
        <button>RESET</button>
      </div>
    </div>
  );
}
