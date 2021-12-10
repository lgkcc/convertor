import classes from "./descriptions.module.css";
const Descriptions = (props) => {
    return(
        <div className={classes.convert__description}>
            <div className={classes.convert__textarea}>
                {props.summary}
            </div>
        </div>
    )
}

export default Descriptions