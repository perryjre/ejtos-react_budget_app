
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    var dolsel = false;
    var pndsel = false;
    var eursel = false;
    var rupsel = false;
    switch (currency){
        case '$':
            dolsel = "selected";
            pndsel = false;
            eursel = false;
            rupsel = false;
            break;
        case '£':
            dolsel = false;
            pndsel = "selected";
            eursel = false;
            rupsel = false;
            break;
        case '€':
            dolsel = false;
            pndsel = false;
            eursel = "selected";
            rupsel = false;
            break;
        case '₹':
            dolsel = false;
            pndsel = false;
            eursel = false;
            rupsel = "selected";
            break;
        default:
            dolsel = false;
            pndsel = false;
            eursel = false;
            rupsel = false;
    }
    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    return (
        <div className="currencyselect">
            <label for="selectCurrency">Currency
            <select name="selectCurrency" id="selectCurrency" onChange={(event) => changeCurrency(event.target.value)}>
                <option value="$" selected={dolsel} name="dollar">$ Dollar</option>
                <option value="£" selected={pndsel} name="pound">£ Pound</option>
                <option value="€" selected={eursel} name="euro">€ Euro</option>
                <option value="₹" selected={rupsel} name="rupee">₹ Rupee</option>
            </select>
            </label>
        </div>
    );
};
export default Currency;