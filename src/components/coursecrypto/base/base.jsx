import classes from "./base.module.css"
import PriceItem from "./price_item/price_item";
import {useEffect, useState} from "react";
import Price from "./price/price";
const Base = () => {
    const [data, setData] = useState([])
    const [type, setType] = useState('btc')
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${type}.json`).then(responce => responce.json()).then(json => setData(json[type]))

    }, [type])
    return(
        <section className={classes.prise_base}>
            <Price type={type} setType={setType}/>
            <div className={classes.prise_base}>
                {(type === 'btc') ? '' : <PriceItem valute={'BTC'} price={isNaN(Number(data.btc)) ? 0 : (Number(data.btc.toFixed(2)) === 0) ? Number(data.btc).toFixed(6) : Number(data.btc).toFixed(2)}/>}
                {(type === 'eth') ? '' : <PriceItem valute={'ETH'} price={isNaN(Number(data.eth)) ? 0 : (Number(data.eth.toFixed(2)) === 0) ? Number(data.eth).toFixed(6) : Number(data.eth).toFixed(2)}/>}
                {(type === 'bch') ? '' : <PriceItem valute={'BCH'} price={isNaN(Number(data.bch)) ? 0 : (Number(data.bch.toFixed(2)) === 0) ? Number(data.bch).toFixed(6) : Number(data.bch).toFixed(2)}/>}
                {(type === 'bdt') ? '' : <PriceItem valute={'BDT'} price={isNaN(Number(data.bdt)) ? 0 : (Number(data.bdt.toFixed(2)) === 0) ? Number(data.bdt).toFixed(6) : Number(data.bdt).toFixed(2)}/>}
                {(type === 'xau') ? '' : <PriceItem valute={'XAU'} price={isNaN(Number(data.xau)) ? 0 : (Number(data.xau.toFixed(2)) === 0) ? Number(data.xau).toFixed(6) : Number(data.xau).toFixed(2)}/>}
                {(type === 'doge') ? '' : <PriceItem valute={'DOGE'} price={isNaN(Number(data.doge)) ? 0 : (Number(data.doge.toFixed(2)) === 0) ? Number(data.doge).toFixed(6) : Number(data.doge).toFixed(2)}/>}
                {(type === 'usd') ? '' : <PriceItem valute={'USD'} price={isNaN(Number(data.usd)) ? 0 : (Number(data.usd.toFixed(2)) === 0) ? Number(data.usd).toFixed(6) : Number(data.usd).toFixed(2)}/>}
            </div>
        </section>
    )
}

export default Base