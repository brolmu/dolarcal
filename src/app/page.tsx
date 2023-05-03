"use client";

import { useCurrency } from "@/hooks/useCurrency";
import { useState } from "react";

export default function Home() {
  const [change, setChange] = useState(1);
  const {
    currencies,
    handleClickSelectedCurrency,
    selectedCurrency,
    tasasSelectedCurrency,
  } = useCurrency();

  const handlechange = (e) => {
    e.preventDefault();
    setChange(e.target.value);
  };

  return (
    <main className="flex max-h-96 w-full flex-row gap-4">
      <section className=" w-1/2 gap-8 space-y-4" id="right">
        <div className="grid grid-flow-col grid-cols-3 gap-4">
          {currencies.map((currency) => {
            const selected = currency.name === selectedCurrency;
            return (
              <div
                className={`rounded-2xl  p-4 text-white ${
                  selected ? "bg-emerald-500" : "bg-emerald-800"
                }`}
                key={currency.name}
              >
                <button
                  className="w-full text-center text-xl font-bold"
                  onClick={(e) => handleClickSelectedCurrency(currency)}
                >
                  {currency.name}
                </button>
              </div>
            );
          })}
        </div>
        <form>
          <label>
            <span
              className="text-xl font-bold"
              onSubmit={(e) => e.preventDefault()}
            >
              Valor en divisa a cambiar:
            </span>
            <input
              onChange={handlechange}
              className="w-full appearance-none rounded-2xl border border-emerald-600 p-4 text-right text-xl font-bold"
              type="number"
              id="changevalue"
            />
          </label>
        </form>
      </section>
      <section className="w-1/2  space-y-4 text-center " id="left">
        <h1 className="text-4xl font-bold text-emerald-900">Tasas de cambio</h1>

        <div className="grid max-h-80 grid-flow-row gap-4 overflow-auto rounded-2xl bg-emerald-700 p-8 text-white">
          {tasasSelectedCurrency.map((tasa) => {
            const value =
              selectedCurrency == "COL"
                ? change / tasa.value
                : change * tasa.value;
            return (
              <div
                className="space-y-4 rounded-2xl border-2 border-white bg-emerald-800 p-4 text-white"
                key={tasa.name}
              >
                <p className="flex justify-between">
                  <span className="text-xl font-bold">{tasa.name}:</span>
                  {(change ? value : tasa.value).toLocaleString("es-Ve", {
                    style: "currency",
                    currency: "VES",
                  })}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
