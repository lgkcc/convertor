import classes from "./price.module.css"
const Price = (props) => {
    return(
        <main className={classes.base}>
            <span className={classes.baseVal}>Базовая валюта:</span>
            <div className={classes.val}>{props.baseVal}</div>
        </main>
    )
}

export default Price
