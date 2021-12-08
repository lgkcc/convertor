import classes from "./main.module.css"
import Base from "./base/base";
import Price from "./price/price";
import {Helmet} from "react-helmet";
// import {Helmet} from "react-helmet";
const Crypto = () => {
    return(
            <main className={classes.course}>
                <Helmet><title>Курс криптовалют</title></Helmet>
                <Price baseVal={'BTC'}/>
                <Base />
            </main>
    )
}

export default Crypto
