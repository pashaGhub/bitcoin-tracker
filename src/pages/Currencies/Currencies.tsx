import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrencies } from "../../actions/currenciesActions";
import { IAllReducers } from "../../reducers";
import { getCurrencies } from "../../services/currenciesServices";
import { substringCurrency } from "../../utils/stringUtils";

const Currencies: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const { bpi, updated } = useSelector<
    IAllReducers,
    IAllReducers["currencies"]
  >((state) => state.currencies);
  const { EUR, GBP, USD } = bpi;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await getCurrencies();

        const data = { bpi: response.bpi, updated: response.time.updated };
        dispatch(updateCurrencies(data));

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
    const id = setInterval(() => {
      fetchData();
    }, 10000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div data-testid="currencies-component" className="currencies">
      <h2>Bitcoin live currencies:</h2>
      <div className="currencies__update-status">
        <span>Last update: {updated ? new Date(updated).toString() : ""}</span>
        <span>
          {loading && (
            <span
              data-testid="loading"
              className="currencies__update-status__updating"
            >
              Updating...
            </span>
          )}
          {error && (
            <span
              data-testid="error"
              className="currencies__update-status__error"
            >
              Error
            </span>
          )}
          {!loading && !error && (
            <span className="currencies__update-status__up-to-date">
              Up to date
            </span>
          )}
        </span>
      </div>
      <table className={error ? "currencies__table-error" : ""}>
        <thead>
          <tr>
            <th>{EUR.description}</th>
            <th>{GBP.description}</th>
            <th>{USD.description}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{EUR.code}</td>
            <td>{GBP.code}</td>
            <td>{USD.code}</td>
          </tr>
          <tr>
            <td>&euro; {substringCurrency(EUR.rate)}</td>
            <td>&pound; {substringCurrency(GBP.rate)}</td>
            <td>&#36; {substringCurrency(USD.rate)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Currencies;
