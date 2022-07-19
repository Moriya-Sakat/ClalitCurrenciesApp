import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataAsync, selectData} from './currencySlice';

export function CurrenciesData() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchDataAsync())
  }, [dispatch])

  return (
    <div className="CurrenciesData">
        <h1>Currencies</h1>
        {
            data.value?.map((currency, i) => (
            <p key={i}><b>{currency.name}--</b> change: {currency.change}, country: {currency.country}</p>
            ))
        }
    </div>
  );
}