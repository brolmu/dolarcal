import { NextResponse } from "next/server";

const CurrencyNames = ["USD", "COL", "EUR"];

const CurrencyMap = (dataObject: object) =>
  CurrencyNames.map((name) => {
    const { [name]: currData } = dataObject;
    if (!currData) return null;
    const tasas = Object.entries(currData).map(([name, value]) => ({
      name,
      value: typeof value === "number" ? value : 0,
    }));
    return { name, tasas };
  });

export async function GET(request: Request) {
  const fetchData = await fetch(
    "https://s3.amazonaws.com/dolartoday/data.json"
  );
  const data = await fetchData.json();
  const Currencies = CurrencyMap(data);
  return NextResponse.json(Currencies);
}
