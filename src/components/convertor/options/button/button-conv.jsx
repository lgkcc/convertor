import classes from "./button-conv.module.css";
import {useEffect} from "react";
const Btnconv = (props) => {
    return(
        <div className={classes.flex}>
            <div onClick={() => props.calc()} className={classes.convert__btn}>Конвертировать</div>
        </div>

    )
}

export default Btnconv