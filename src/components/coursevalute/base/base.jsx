import classes from "./base.module.css"
import PriceItem from "./price_item/price_item";
import {useEffect, useState} from "react";
import Price from "./price/price";
const Base = () => {
    const [data, setData] = useState([])
    const [type, setType] = useState('usd')
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${type}.json`).then(responce => responce.json()).then(json => setData(json[type]))

    }, [type])

    return(
        <section className={classes.base}>
            <Price type={type} setType={setType}/>
            <div className={classes.base}>
                {(type === 'usd') ? '' : <PriceItem valute={'USD'} price={isNaN(Number(data.usd)) ? 0 : Number(data.usd).toFixed(2)}/>}
                {(type === 'eur') ? '' : <PriceItem valute={'EUR'} price={isNaN(Number(data.eur)) ? 0 : Number(data.eur).toFixed(2)}/>}
                {(type === 'rub') ? '' : <PriceItem valute={'RUB'} price={isNaN(Number(data.rub)) ? 0 : Number(data.rub).toFixed(2)}/>}
                {(type === 'jpy') ? '' : <PriceItem valute={'JPY'} price={isNaN(Number(data.jpy)) ? 0 : Number(data.jpy).toFixed(2)}/>}
                {(type === 'aud') ? '' : <PriceItem valute={'AUD'} price={isNaN(Number(data.aud)) ? 0 : Number(data.aud).toFixed(2)}/>}
                {(type === 'cny') ? '' : <PriceItem valute={'CNY'} price={isNaN(Number(data.cny)) ? 0 : Number(data.cny).toFixed(2)}/>}
                {(type === 'gbp') ? '' : <PriceItem valute={'GBP'} price={isNaN(Number(data.gbp)) ? 0 : Number(data.gbp).toFixed(2)}/>}
            </div>
        </section>

    )
}

export default Base