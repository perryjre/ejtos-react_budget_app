
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    var name;
    switch (currency){
        case '$':
            name = 'Dollar';
            break;
        case '£':
            name = 'Pound';
            break;
        case '€':
            name = 'Euro';
            break;
        case '₹':
            name = 'Rupee';
            break;
        default:
            name = '';
    }
    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    return (
        <label for="selectCurrency">Currency
        <select className="custom-select" name="selectCurrency" id="selectCurrency" onChange={(event) => changeCurrency(event.target.value)}>
            <option defaultValue>Currency {currency}{name}</option>
            <option value="$" name="dollar">$ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="rupee">₹ Rupee</option>
        </select>
        </label>
    );
};
export default Currency;