import Style from "./components/global.module.css"
import Menu from "./components/menu";
import Foto from "./components/Foto";
import img from "./components/banner-gracie.png";
import Merch from "./components/Merch";
import img1 from "./components/vinil.webp"
import img2 from "./components/moletom-frente.webp"
import img3 from "./components/3-botoes.webp"
import img4 from "./components/blusa-frente.webp"
import img5 from "./components/moletom-feels.webp"
import img6 from "./components/moletom-feels-normal.webp"
import img7 from "./components/cobertor.webp"
import img8 from "./components/patch.webp"
import Rodape from "./components/rodape"

function App(props) {
  return (
    <>
    <Menu></Menu>
      <Foto foto={img} />
      <Merch foto1={img1} foto2={img2} foto3={img3} foto4={img4} foto5={img5} foto6={img6} foto7={img7} foto8={img8}/>     
      <Rodape></Rodape>
    </>
  );
}

export default App;