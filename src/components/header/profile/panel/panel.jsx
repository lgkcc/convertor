import classes from "./panel.module.css";
const PanelLogin = (props) => {
    return(
        <div className={props.exit ? `${classes.panel}` : `${classes.panel} ${classes.none}`}>
            <div onClick={props.exitPanel} className={classes.panel__exit}>X</div>
            {/*123*/}
            <form className={classes.panel__input}>
                <input type="text" placeholder='Логин'/>
                <input type="password" placeholder='Пароль'/>
            </form>
            <div onClick={props.systemLogin} className={classes.profile__login}>
                Войти
            </div>
            {/*123*/}
            <div onClick={props.loginGoogle} className={classes.profile__login}>
                <div className={classes.icon}>
                </div>
                <div>
                    google
                </div>
            </div>
            <div className={classes.new}>
                Создать новую учетную запись
            </div>
        </div>
    )
}
export default PanelLogin