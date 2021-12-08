import classes from "./price_item.module.css"
const PriceItem = (props) => {
    return(
        <div className={classes.item}>
            <span>{props.valute}</span>
            <span>{props.price}</span>
        </div>
    )
}

export default PriceItem
