import React from "react";
import { useState } from "react";

export default function Card() {
  const [amount, setAmount] = useState(null);
  const [people, setPeople] = useState(null);
  const [tip, setTip] = useState(0);
  const chooseTip = (e) => {
    setTip(parseInt(e.target.value));
    e.target.focus();
  };
  const resetAll = (e) => {
    setTip(0);
    setPeople(0);
    setAmount(0);
  };
  const checkZero = (e) => {
    people <= 0
      ? e.target.classList.add("error")
      : e.target.classList.remove("error");
    setPeople(parseInt(e.target.value));
  };
  return (
    <div
      className="
      grid h-5/6 grid-cols-1 gap-9 rounded-3xl bg-white p-12 lg:h-full
     lg:max-w-screen-lg lg:grid-cols-2 lg:gap-9"
    >
      {/* Calcullator part */}
      <div className="flex flex-col gap-9 text-2xl">
        <section className="flex flex-col gap-5">
          <h1 className="bill font-bold text-darkGrayishCyan ">Bill</h1>
          <span className="relative inset-y-0 left-0 flex items-center">
            <svg
              className="absolute ml-5"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="17"
            >
              <path
                fill="#9EBBBD"
                d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
              />
            </svg>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className="before:bg-dollar-pattern h-14 w-choSir bg-veryLightGrayishGyan pr-2 text-right text-2xl font-extrabold text-veryDarkCyan hover:outline-darkGrayishCyan focus:outline-darkGrayishCyan "
            />
          </span>
        </section>
        <section className=" flex flex-col gap-5 text-2xl">
          <h1 className="font-bold text-darkGrayishCyan">Select Tip %</h1>
          <div className="select-tip grid grid-cols-2 gap-3 lg:grid-cols-3">
            <button
              value={5}
              className="button-per focus:bg-lightGrayishCyan focus:text-black"
              onClick={chooseTip}
            >
              5%
            </button>
            <button
              value={10}
              className="button-per focus:bg-lightGrayishCyan focus:text-black"
              onClick={chooseTip}
            >
              10%
            </button>
            <button
              value={15}
              className="button-per focus:bg-lightGrayishCyan focus:text-black"
              onClick={chooseTip}
            >
              15%
            </button>
            <button
              value={25}
              className="button-per focus:bg-lightGrayishCyan focus:text-black"
              onClick={chooseTip}
            >
              25%
            </button>
            <button
              value={50}
              className="button-per focus:bg-lightGrayishCyan focus:text-black"
              onClick={chooseTip}
            >
              50%
            </button>
            <input
              type="number"
              placeholder="Custom"
              className=" rounded-md bg-veryLightGrayishGyan p-3 text-center text-2xl font-extrabold text-darkGrayishCyan"
              onChange={chooseTip}
            ></input>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <>
            {parseInt(people) !== 0 ? (
              <>
                <h1 className="  font-bold text-darkGrayishCyan">
                  Number of people
                </h1>
                <span className="relative inset-y-0 left-0 flex items-center">
                  <svg
                    className="absolute ml-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="16"
                  >
                    <path
                      fill="#9EBBBD"
                      d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
                    />
                  </svg>
                  <input
                    type="number"
                    placeholder="0"
                    value={people}
                    onChange={checkZero}
                    className="before:bg-dollar-pattern h-16 w-choSir bg-veryLightGrayishGyan pr-2 text-right text-2xl font-extrabold text-veryDarkCyan "
                  />
                </span>
              </>
            ) : (
              <>
                <div className=" flex justify-between">
                  <h1 className="text-xl font-bold text-darkGrayishCyan">
                    Number of people
                  </h1>
                  <h1 className="text-xl text-red-500">Can't be zero</h1>
                </div>
                <span className="relative inset-y-0 left-0 flex items-center">
                  <svg
                    className="absolute ml-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="16"
                  >
                    <path
                      fill="#9EBBBD"
                      d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
                    />
                  </svg>
                  <input
                    type="number"
                    placeholder="0"
                    value={people}
                    onChange={checkZero}
                    className="before:bg-dollar-pattern h-16 w-choSir bg-veryLightGrayishGyan pr-2 text-right text-2xl font-extrabold text-veryDarkCyan focus:outline-red-400  "
                  />
                </span>
              </>
            )}
          </>
        </section>
      </div>
      {/* Result Part */}
      <div className=" result-part flex flex-col justify-between gap-5 rounded-2xl bg-veryDarkCyan p-5 pt-7 text-2xl lg:p-10 lg:text-lg  ">
        {/* Total */}
        <section className="grid gap-14">
          <div className="tip-amount flex items-center justify-between">
            <div className="left">
              <h1 className="font-bold text-white">Tip Amount</h1>
              <h2 className="font-bold text-darkGrayishCyan">/ person</h2>
            </div>
            <div className="right text-4xl font-bold text-strongCyan ">
              {amount === 0 ||
              isNaN(
                (parseFloat(amount) +
                  (parseFloat(amount) * parseFloat(tip)) / 100) /
                  people
              ) ||
              (
                (parseFloat(amount) +
                  (parseFloat(amount) * parseFloat(tip)) / 100) /
                people
              ).toFixed(2) === "Infinity" ? (
                <div> $0.00 </div>
              ) : (
                <div>
                  $
                  {parseFloat(amount) +
                    (parseFloat(amount) * parseFloat(tip)) / 100}
                </div>
              )}
            </div>
          </div>
          <div className="total flex items-center justify-between">
            <div className="left">
              <h1 className="font-bold text-white">Total</h1>
              <h2 className="font-bold text-darkGrayishCyan">/ person</h2>
            </div>
            {isNaN(
              (parseFloat(amount) +
                (parseFloat(amount) * parseFloat(tip)) / 100) /
                people
            ) ||
            (
              (parseFloat(amount) +
                (parseFloat(amount) * parseFloat(tip)) / 100) /
              people
            ).toFixed(2) === "Infinity" ||
            people === 0 ? (
              <div className="right text-4xl font-bold text-strongCyan">
                $0.00
              </div>
            ) : (
              <div className="right text-4xl font-bold text-strongCyan">
                $
                {(
                  (parseFloat(amount) +
                    (parseFloat(amount) * parseFloat(tip)) / 100) /
                  people
                ).toFixed(2)}
              </div>
            )}
          </div>
        </section>
        {/* Reset button */}
        <div className="reset w-full rounded-md bg-grayishCyan py-3 text-center ">
          <button
            onClick={resetAll}
            className=" w-full bg-grayishCyan text-xl font-extrabold text-veryDarkCyan "
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
