import classes from "./button-conv.module.css";
const Btnconv = (props) => {
    return(
        <div className={classes.flex}>
            <div onClick={() => props.calc()} className={classes.convert__btn}>Конвертировать</div>
        </div>

    )
}

export default Btnconv