import { Currency, Tasa } from "@/Types";
import { checkEnvironment } from "@/helps/helper";
import { useEffect, useState } from "react";

export function useCurrency() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [tasasSelectedCurrency, setTasasSelectedCurrency] = useState<Tasa[]>(
    []
  );
  const [selectedCurrency, setSelectedCurrency] = useState("");
  useEffect(() => {
    const base_url = checkEnvironment() || "";
    fetch(base_url.concat("/api/dolar-today"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setSelectedCurrency(res[0].name);
        setTasasSelectedCurrency(res[0].tasas);
        setCurrencies(res);
      })
      .catch((err) => console.log(err));

    return () => {
      setCurrencies([]);
    };
  }, []);

  const handleClickSelectedCurrency = ({ name, tasas }: Currency) => {
    setSelectedCurrency(name);
    setTasasSelectedCurrency(tasas);
  };

  return {
    currencies,
    tasasSelectedCurrency,
    selectedCurrency,
    handleClickSelectedCurrency,
  };
}
