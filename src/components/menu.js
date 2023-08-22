import Style from "./menu.module.css";
import Icon from "./Icon"
import icon from "./icon.png";

function Menu ( props ) {
    return(
        <>
        <section className={Style.header}>
        <div className={Style.menu}>
        <i>
        <Icon icon={icon} />
        </i>
            <ul className={Style.submenu}>
            <li><a href="https://open.spotify.com/intl-pt/artist/4tuJ0bMpJh08umKkEXKUI5?si=uwp5IgNeRT28vVQcaLSfbw">ALBUMS</a></li>
            </ul>
        </div>  
        </section>  
        </>
    )
}
export default Menu;