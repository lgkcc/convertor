import classes from "./price.module.css"
const Price = (props) => {
    const noActive = `${classes.li}`
    const active = `${classes.li} ${classes.active}`
    return(
        <div className={classes.baseCur}>
            <span className={classes.baseVal}>Базовая валюта:</span>
            <div className={classes.val}>
                {props.type}
                <div className={classes.dropdown}>
                    <ul>
                        <li className={props.type === 'usd' ? active : noActive} onClick={() => props.setType('usd')}>USD</li>
                        <li className={props.type === 'eur' ? active : noActive} onClick={() => props.setType('eur')}>EUR</li>
                        <li className={props.type === 'rub' ? active : noActive} onClick={() => props.setType('rub')}>RUB</li>
                        <li className={props.type === 'jpy' ? active : noActive} onClick={() => props.setType('jpy')}>JPY</li>
                        <li className={props.type === 'aud' ? active : noActive} onClick={() => props.setType('aud')}>AUD</li>
                        <li className={props.type === 'cny' ? active : noActive} onClick={() => props.setType('cny')}>CNY</li>
                        <li className={props.type === 'gbp' ? active : noActive} onClick={() => props.setType('gbp')}>GBP</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Price
