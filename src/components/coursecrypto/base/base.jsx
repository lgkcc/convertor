import classes from "./base.module.css"
import PriceItem from "./price_item/price_item";
import {useEffect, useState} from "react";
const Base = () => {
    const [load, setLoad] = useState('Load')
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc.json").then(responce => responce.json()).then(json => setData(json.btc))
    }, [load])
    return(
        <section className={classes.prise_base}>
            <PriceItem valute={'ETH'} price={data.eth}/>
            <PriceItem valute={'BDT'} price={data.bdt}/>
            <PriceItem valute={'BCH'} price={data.bch}/>
            <PriceItem valute={'XAU'} price={data.xau}/>
            <PriceItem valute={'DOGE'} price={data.doge}/>
            <PriceItem valute={'USD'} price={data.usd}/>
        </section>
    )
}

export default Base