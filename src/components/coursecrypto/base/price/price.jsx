import classes from "./price.module.css"
const Price = (props) => {
    const noActive = `${classes.li}`
    const active = `${classes.li} ${classes.active}`
    return(
        <main className={classes.baseCur}>
            <span className={classes.baseVal}>Базовая валюта:</span>
            <div className={classes.val}>
                {props.type}
                <div className={classes.dropdown}>
                    <ul>
                        <li className={props.type === 'btc' ? active : noActive} onClick={() => props.setType('btc')}>BTC</li>
                        <li className={props.type === 'eth' ? active : noActive} onClick={() => props.setType('eth')}>ETH</li>
                        <li className={props.type === 'bdt' ? active : noActive} onClick={() => props.setType('bdt')}>BDT</li>
                        <li className={props.type === 'bch' ? active : noActive} onClick={() => props.setType('bch')}>BCH</li>
                        <li className={props.type === 'xau' ? active : noActive} onClick={() => props.setType('xau')}>XAU</li>
                        <li className={props.type === 'doge' ? active : noActive} onClick={() => props.setType('doge')}>DOGE</li>
                        <li className={props.type === 'usd' ? active : noActive} onClick={() => props.setType('usd')}>USD</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Price
