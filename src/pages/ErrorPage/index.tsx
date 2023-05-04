import { ErrorSection } from "../../components/ErrorSection";
import { Header } from "../../components/Header";
import { DivMain } from './style';

export const ErrorPage = () => {
  return (
    <>
      <Header />
      <DivMain>
        <ErrorSection />
      </DivMain>
    </>
  );
};
