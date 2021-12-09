import classes from "./base.module.css"
import PriceItem from "./price_item/price_item";
import {useEffect, useState} from "react";
const Base = () => {
    const [load, setLoad] = useState('notLoad')
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json").then(responce => responce.json()).then(json => setData(json.eur))
    }, [load])
    return(
        <section className={classes.base}>
            <PriceItem valute={'USD'} price={data.usd}/>
            <PriceItem valute={'RUB'} price={data.rub}/>
            <PriceItem valute={'JPY'} price={data.jpy}/>
            <PriceItem valute={'AUD'} price={data.aud}/>
            <PriceItem valute={'CNY'} price={data.cny}/>
            <PriceItem valute={'GBP'} price={data.gbp}/>
        </section>
    )
}

export default Base