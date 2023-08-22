import Style from "./merch.module.css";

function Merch ( props ) {
    return(
        <>
        <div>
        <p className={Style.p}>GOOD RIDDANCE MERCH</p>
        </div>
        <div className={Style.flex}>
            <div className={Style.caixa}>
            <img className={Style.img} src={props.foto1} alt=""/>
            </div>

            <div className={Style.caixa}>
            <img className={Style.img} src={props.foto2} alt=""/>
            </div>

            <div className={Style.caixa}>
            <img className={Style.img} src={props.foto3} alt=""/>
            </div>

            <div className={Style.caixa}>
            <img className={Style.img} src={props.foto4} alt=""/>
            </div>
        </div>

        <div>
        <p className={Style.p2}>THIS IS WHAT IT FEELS LIKE MERCH</p>
        </div>
        <div className={Style.flex2}>
            <div className={Style.caixa}>
            <img className={Style.img} src={props.foto5} alt=""/>
            </div>

            <div className={Style.caixa}>
            <img className={Style.img} src={props.foto6} alt=""/>
            </div>

            <div className={Style.caixa}>
            <img className={Style.img} src={props.foto7} alt=""/>
            </div>

            <div className={Style.caixa}>
            <img className={Style.img} src={props.foto8} alt=""/>
            </div>
        </div>
        </>
    )
}
export default Merch;