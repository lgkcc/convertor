import classes from "./descriptions.module.css";
const Descriptions = () => {
    return(
        <div className={classes.convert__description}>
            <div className={classes.convert__textarea}>
                Выберите валюты для конвертации...
            </div>
        </div>
    )
}

export default Descriptions