import ResponsiveAppBar from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Layout = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};
