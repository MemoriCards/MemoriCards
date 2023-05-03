import { Header } from "../../components/Header";
import { StyledMain } from "./style";
import logo_linkedin from "../../assets/logo_linkedin.svg";
import logo_github from "../../assets/logo_github.svg";

export const AboutPage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <section>
          <h2>MemoriCards</h2>

          <p>
            Era uma vez cinco estudantes da Kenzie Academy que tinham uma paixão
            em comum: a programação. Juntos, eles decidiram desenvolver uma
            aplicação de flashcards para ajudar estudantes a aprenderem de forma
            mais eficiente.
          </p>
          {/* <img src="#" alt="#" /> */}
        </section>

        <section>
          <h2>Desenvolvedores</h2>

          <ul>
            <li>
              <img
                src="https://avatars.githubusercontent.com/u/118852471?v=4"
                alt="#"
              />
              <h4>Luana Carneiro</h4>
              <h5>Tech Lead</h5>
              <span>
                <a href="https://www.google.com/">
                  <img src={logo_linkedin} alt="" />
                </a>

                <a href="https://www.google.com/">
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
                <a href="https://www.google.com/">
                  <img src={logo_linkedin} alt="" />
                </a>

                <a href="https://www.google.com/">
                  <img src={logo_github} alt="" />
                </a>
              </span>
            </li>

            <li>
              <img
                src="https://avatars.githubusercontent.com/u/98988774?v=4"
                alt="#"
              />
              <h4>Eric Vinicius F. Silva</h4>
              <h5>Product Owner</h5>
              <span>
                <a href="https://www.google.com/">
                  <img src={logo_linkedin} alt="" />
                </a>

                <a href="https://www.google.com/">
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
                <a href="https://www.google.com/">
                  <img src={logo_linkedin} alt="" />
                </a>

                <a href="https://www.google.com/">
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
                <a href="https://www.google.com/">
                  <img src={logo_linkedin} alt="" />
                </a>

                <a href="https://www.google.com/">
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
