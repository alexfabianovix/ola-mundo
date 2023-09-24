import styles from "./Banner.module.css";
import circuloColorido from "assets/images/circulo_colorido.png";
import minhaFoto from "assets/images/gato.jpg";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.Apresentacao}>
                <h1 className={styles.Titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.Paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Alex Fabiano, estudante de Front-end da Alura. Aqui compartilho vários aprendizados, espero que o estimule a aprender algo novo :)
                </p>
            </div>
            <div className={styles.imagens} >
                
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden = {true}
                    alt="Imagem de um círculo colorido."
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de um Gato."

                />

            </div>
        </div>
    )
}