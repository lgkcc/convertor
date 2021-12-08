import classes from "./base.module.css"
import PriceItem from "./price_item/price_item";
const Base = () => {
    return(
        <section className={classes.prise_base}>
            <PriceItem valute={'ETH'} price={'1.1245'}/>
            <PriceItem valute={'BTG'} price={'2.1245'}/>
            <PriceItem valute={'ZEC'} price={'3.1245'}/>
            <PriceItem valute={'NANO'} price={'4.1245'}/>
            <PriceItem valute={'DOGE'} price={'5.1245'}/>
            <PriceItem valute={'UMI'} price={'6.1245'}/>
        </section>
    )
}

export default Base