import classes from "./base.module.css"
import PriceItem from "./price_item/price_item";
const Base = () => {
    return(
        <section className={classes.base}>
            <PriceItem valute={'USD'} price={'1.1245'}/>
            <PriceItem valute={'RUB'} price={'2.1245'}/>
            <PriceItem valute={'JPY'} price={'3.1245'}/>
            <PriceItem valute={'AUD'} price={'4.1245'}/>
            <PriceItem valute={'CNY'} price={'5.1245'}/>
            <PriceItem valute={'GBP'} price={'6.1245'}/>
        </section>
    )
}

export default Base