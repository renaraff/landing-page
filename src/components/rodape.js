import Style from "./rodape.module.css";

function Rodape ( props ) {
    return(
        <>
        <section className={Style.rodape}>
            <div>
            <ul>
            <li><a href="https://open.spotify.com/intl-pt/artist/4tuJ0bMpJh08umKkEXKUI5?si=uwp5IgNeRT28vVQcaLSfbw">SPOTIFY</a></li>
            </ul>
            </div>
            <div>
            <ul>
            <li><a href="https://www.instagram.com/gracieabrams/">INSTAGRAM</a></li>
            </ul>
            </div>
            <div>
            <ul>
            <li><a href="https://www.twitter.com/gracieabrams/">TWITTER</a></li>
            </ul>
            </div>
            <div>
            <ul>
            <li><a href="https://www.youtube.com/channel/UCwXDwwxNVRXPcPk7ABkakdA">YOUTUBE</a></li>
            </ul>
            </div>
        </section>  
        </>
    )
}
export default Rodape;