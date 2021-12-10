import classes from "./options.module.css"
import {useEffect, useState} from "react";
import Descriptions from "./descriptions/descriptions";
import Btnconv from "./button/button-conv";
const Options = () => {
    const noActive = `${classes.li}`
    const active = `${classes.li} ${classes.active}`
    const [currencyOne, setCurrencyOne] = useState('usd')
    const [currencyTwo, setCurrencyTwo] = useState('rub')
    const [result, setResult] = useState([])
    const [option, setOption] = useState('')
    const [summary, setSummary] = useState('Выберите валюты для конвертации...')
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyOne}/${currencyTwo}.json`).then(responce => responce.json()).then(json => setResult(json[currencyTwo]))
    }, [currencyOne, currencyTwo])
    const calc = () => setSummary(Number(result * option).toFixed(1))
    const handleChange = event => (isNaN(Number(event.target.value))) ? setSummary('Вводить можно только цифры!') : setOption(event.target.value)
    return(
        <div>
            <div className={classes.convert__option}>
                <input type="text" value={option} onChange={handleChange}  className={classes.convert__input} placeholder={100}/>
                <div className={classes.convert__optionValue}>
                    <div className={classes.convert__btnvalue}>
                        {currencyOne}
                        <div className={classes.dropdown}>
                            <ul>
                                <li className={(currencyOne === 'usd' || currencyTwo === 'usd') ? active : noActive} onClick={() => setCurrencyOne('usd')}>USD</li>
                                <li className={(currencyOne === 'eur' || currencyTwo === 'eur') ? active : noActive} onClick={() => setCurrencyOne('eur')}>EUR</li>
                                <li className={(currencyOne === 'rub' || currencyTwo === 'rub') ? active : noActive} onClick={() => setCurrencyOne('rub')}>RUB</li>
                                <li className={(currencyOne === 'jpy' || currencyTwo === 'jpy') ? active : noActive} onClick={() => setCurrencyOne('jpy')}>JPY</li>
                                <li className={(currencyOne === 'aud' || currencyTwo === 'aud') ? active : noActive} onClick={() => setCurrencyOne('aud')}>AUD</li>
                                <li className={(currencyOne === 'cny' || currencyTwo === 'cny') ? active : noActive} onClick={() => setCurrencyOne('cny')}>CNY</li>
                                <li className={(currencyOne === 'gbp' || currencyTwo === 'gbp') ? active : noActive} onClick={() => setCurrencyOne('gbp')}>GBP</li>
                            </ul>
                        </div>
                    </div>
                    <span className={classes.convert__text}>=</span>
                    <div className={classes.convert__btnvalue}>
                        {currencyTwo}
                        <div className={classes.dropdown}>
                            <ul>
                                <li className={(currencyOne === 'usd' || currencyTwo === 'usd') ? active : noActive} onClick={() => setCurrencyTwo('usd')}>USD</li>
                                <li className={(currencyOne === 'eur' || currencyTwo === 'eur') ? active : noActive} onClick={() => setCurrencyTwo('eur')}>EUR</li>
                                <li className={(currencyOne === 'rub' || currencyTwo === 'rub') ? active : noActive} onClick={() => setCurrencyTwo('rub')}>RUB</li>
                                <li className={(currencyOne === 'jpy' || currencyTwo === 'jpy') ? active : noActive} onClick={() => setCurrencyTwo('jpy')}>JPY</li>
                                <li className={(currencyOne === 'aud' || currencyTwo === 'aud') ? active : noActive} onClick={() => setCurrencyTwo('aud')}>AUD</li>
                                <li className={(currencyOne === 'cny' || currencyTwo === 'cny') ? active : noActive} onClick={() => setCurrencyTwo('cny')}>CNY</li>
                                <li className={(currencyOne === 'gbp' || currencyTwo === 'gbp') ? active : noActive} onClick={() => setCurrencyTwo('gbp')}>GBP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Descriptions summary = {summary}/>
            <Btnconv calc = {calc}/>
        </div>

    )
}

export default Options