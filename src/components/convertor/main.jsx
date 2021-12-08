import classes from "./main.module.css"
import Options from "./options/options";
import Descriptions from "./descriptions/descriptions";
import Btnconv from "./button/button-conv";
import {Helmet} from "react-helmet";
const Convertor = () => {
    return(
            <main className={classes.convert}>
                <Helmet><title>Конвертация валют</title></Helmet>
                <Options />
                <div className={classes.convert__column}>
                    <Descriptions />
                    <Btnconv />
                </div>
            </main>
    )
}

export default Convertor