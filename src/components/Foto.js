import Style from "./foto.module.css";

function Foto ( props ) {
    return(
        <>
          <div>
        <p className={Style.p}>GRACIE ABRAMS LOJA</p>
        </div>
        <div className={Style.figure}>
            <img className={Style.foto} src={props.foto} alt=""/>
        </div>
        </>
    )
}
export default Foto;