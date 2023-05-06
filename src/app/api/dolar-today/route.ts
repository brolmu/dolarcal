import { DolarToday } from "@/Types";
import { NextResponse } from "next/server";

const CurrencyNames = ["USD", "COL", "EUR"];

const CurrencyMap = (dataObject: DolarToday) => {
  const { USD, COL, EUR } = dataObject;
  const Currencies = [];
  if (USD) {
    const tasas = Object.entries(USD).map(([name, value]) => ({
      name,
      value: typeof value === "number" ? value : 0,
    }));
    Currencies.push({ name: "USD", code: "USD", tasas });
  }
  if (COL) {
    const tasas = Object.entries(COL).map(([name, value]) => ({
      name,
      value: typeof value === "number" ? value : 0,
    }));
    Currencies.push({ name: "COL", code: "COL", tasas });
  }
  if (EUR) {
    const tasas = Object.entries(EUR).map(([name, value]) => ({
      name,
      value: typeof value === "number" ? value : 0,
    }));
    Currencies.push({ name: "EUR", code: "EUR", tasas });
  }
  return Currencies;
};

export async function GET(request: Request) {
  const fetchData = await fetch(
    "https://s3.amazonaws.com/dolartoday/data.json",{ cache: 'no-store' } }
  );
  const data = await fetchData.json();
  const Currencies = CurrencyMap(data);
  return NextResponse.json(Currencies);
}
