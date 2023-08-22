import Style from "./icon.module.css";

function Icon ( props ) {
    return(
        <>
        <img className={Style.icon} src={props.icon} alt=""/>
        </>
    )
}
export default Icon;