import classes from "./button-conv.module.css";
import {useEffect} from "react";
const Btnconv = (props) => {
    // useEffect(() => {
    //     const calcul = () => props.calc()
    //     console.log(calcul)
    //     const onKeypress = e => e.keyCode === 13 ? console.log(calcul('123')) : '';
    //     document.addEventListener('keypress', onKeypress);
    //     return () => {
    //         document.removeEventListener('keypress', onKeypress);
    //     };
    // }, [props.currencyOne, props.currencyTwo]);
    return(
        <div className={classes.flex}>
            <div onClick={() => props.calc()} className={classes.convert__btn}>Конвертировать</div>
        </div>

    )
}

export default Btnconv