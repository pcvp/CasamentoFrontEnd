import Image from "next/image";
import florSuperior from "../../public/Images/FlorSuperior.png";
import florInferior from "../../public/Images/FlorInferior.png";
import Style from "./index.module.css";

export default function Layout(props) {
  return (
    <>
      <div className="d-flex justify-content-end">
        <Image
          alt="Flores"
          src={florSuperior}
          loading="eager"
          width={72}
          height={57}
        />
      </div>
      <div className={Style.container}>{props.children}</div>
      <div className="d-flex justify-content-start fixed-bottom">
        <Image
          alt="Flores"
          src={florInferior}
          loading="eager"
          width={72}
          height={57}
        />
      </div>
    </>
  );
}
