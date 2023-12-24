import { Center, Container } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import Construction from "../components/Construction";

function Docs() {
  useDocumentTitle("Docs | p.s")
  return (
    <Container className="docs" size={"lg"}>
      <Center>
        <Construction />
      </Center>
    </Container>
  );
}
export default Docs;
