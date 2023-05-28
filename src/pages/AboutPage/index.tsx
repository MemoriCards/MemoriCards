import { Header } from "../../components/Header";
import { StyledMain } from "./style";
import logo_linkedin from "../../assets/logo_linkedin.svg";
import logo_github from "../../assets/logo_github.svg";

export const AboutPage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <section className="about">
          <h2>MemoriCards</h2>

          <p>
            Imagine poder estudar ou aprender algo novo de forma eficiente,
            divertida e totalmente personalizada às suas necessidades e
            interesses. Com MemoriCards, você tem acesso a uma plataforma de
            aprendizado inovadora que utiliza flashcards autorais para desafiar
            a sua memória e ajudá-lo a dominar conceitos importantes de maneira
            dinâmica e interativa. Crie seus próprios cards e pratique de forma
            eficiente, seja para se preparar para uma prova, aprender um novo
            idioma ou simplesmente ampliar seu conhecimento em qualquer área.
            Com MemoriCards, você transforma seu aprendizado em uma jornada
            prazerosa e recompensadora, e alcança resultados surpreendentes em
            pouco tempo. Experimente agora essa ferramenta revolucionária e
            sinta a diferença em seu potencial de aprendizagem!
          </p>
        </section>

        <section className="social-networking">
          <h2>Desenvolvedores</h2>

          <ul>
            <li>
              <img
                src="https://avatars.githubusercontent.com/u/118852471?v=4"
                alt="#"
              />
              <h4>Luana Carneiro</h4>
              <h5>Teach Leader</h5>
              <span>
                <a
                  href="https://www.linkedin.com/in/luanamariacarneiro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_linkedin} alt="" />
                </a>

                <a
                  href="https://github.com/Luhmaria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_github} alt="" />
                </a>
              </span>
            </li>

            <li>
              <img
                src="https://avatars.githubusercontent.com/u/95241648?v=4"
                alt="#"
              />
              <h4>Thomaz Rosseti</h4>
              <h5>Scrum Master </h5>
              <span>
                <a
                  href="https://www.linkedin.com/in/thomaz-rosseti-coelho-ti369/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_linkedin} alt="" />
                </a>

                <a
                  href="https://github.com/ThomazRc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_github} alt="" />
                </a>
              </span>
            </li>

            <li>
              <img
                src="https://avatars.githubusercontent.com/u/98988774?v=4"
                alt="#"
              />
              <h4>Eric Vinicius</h4>
              <h5>Product Owner</h5>
              <span>
                <a
                  href="https://www.linkedin.com/in/eric-vinicius-felix-silva-457b63249/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_linkedin} alt="" />
                </a>

                <a
                  href="https://github.com/Ericvini000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_github} alt="" />
                </a>
              </span>
            </li>

            <li>
              <img
                src="https://avatars.githubusercontent.com/u/103968190?v=4"
                alt="#"
              />
              <h4>Matheus Rosa</h4>
              <h5>Quality Assurance</h5>
              <span>
                <a
                  href="https://www.linkedin.com/in/mathrosa96/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_linkedin} alt="" />
                </a>

                <a
                  href="https://github.com/math-rosa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_github} alt="" />
                </a>
              </span>
            </li>

            <li>
              <img
                src="https://pps.whatsapp.net/v/t61.24694-24/328697136_878672886552276_424727089830709200_n.jpg?ccb=11-4&oh=01_AdSWuU5etkvTG7lsR1BwyoP684Ia9TtZZLjfi_fW_aQZaQ&oe=645E87F2"
                alt="#"
              />
              <h4>Nil Joshua</h4>
              <h5>Quality Assurance</h5>
              <span>
                <a
                  href="hhttps://www.linkedin.com/in/niljoshua/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_linkedin} alt="" />
                </a>

                <a
                  href="https://github.com/niljoshua"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_github} alt="" />
                </a>
              </span>
            </li>
          </ul>
        </section>
      </StyledMain>
    </>
  );
};
