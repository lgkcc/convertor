import classes from "./options.module.css"
import {useState} from "react";
const Options = () => {
    const [valDef, setDefVal] = useState('USD')
    const [valRub, setRubVal] = useState('RUB')
    const [valJpy, setJpyVal] = useState('JPY')
    const [valAud, setAudVal] = useState('AUD')
    const [valCny, setCnyVal] = useState('CNY')
    const [valGbp, setGbpVal] = useState('GBP')
    const rubClick = () => {
        setRubVal(valDef)
        setDefVal(valRub)
    }
    const jpyClick = () => {
        setJpyVal(valDef)
        setDefVal(valJpy)
    }
    const audClick = () => {
        setAudVal(valDef)
        setDefVal(valAud)
    }
    const cnyClick = () => {
        setCnyVal(valDef)
        setDefVal(valCny)
    }
    const gbpClick = () => {
        setGbpVal(valDef)
        setDefVal(valGbp)
    }
    return(
        <div className={classes.convert__option}>
            <input type="text" className={classes.convert__input} placeholder={100}/>
            <div className={classes.convert__optionValue}>
                <div className={classes.convert__btnvalue}>
                    {valDef}
                    <div className={classes.dropdown}>
                        <ul>
                            <li className={classes.li} onClick={rubClick}>{valRub}</li>
                            <li className={classes.li} onClick={jpyClick}>{valJpy}</li>
                            <li className={classes.li} onClick={audClick}>{valAud}</li>
                            <li className={classes.li} onClick={cnyClick}>{valCny}</li>
                            <li className={classes.li} onClick={gbpClick}>{valGbp}</li>
                        </ul>
                    </div>
                </div>
                <span className={classes.convert__text}>=</span>
                <a href="" className={classes.convert__btnvalue}>RUB</a>
            </div>
        </div>
    )
}

export default Options