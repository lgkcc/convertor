import classes from "./main.module.css"
import Base from "./base/base";
import {Helmet} from "react-helmet";
// import {Helmet} from "react-helmet";
const Crypto = () => {
    return(
            <main className={classes.course}>
                <Helmet><title>Курс криптовалют</title></Helmet>

                <Base />
            </main>
    )
}

export default Crypto
