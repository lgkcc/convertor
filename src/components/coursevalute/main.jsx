import classes from "./main.module.css"
import Base from "./base/base";
import Price from "./price/price";
import {Helmet} from "react-helmet";
const Course = () => {
    return(
            <main className={classes.course}>
                <Helmet><title>Курс валют</title></Helmet>
                <Price baseVal={'EUR'}/>
                <Base />
            </main>
    )
}

export default Course