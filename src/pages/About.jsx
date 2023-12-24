import { Anchor, Container, Text } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";

function About() {
  useDocumentTitle("About | p.s");
  return (
    <Container className="about" size={"xs"}>
      <Text ta={"left"} mt={"calc(50dvh - 140px)"}>
        🧮🧑‍💻🧩 Problem-solving code to common issues Preston (
        <Anchor href="https://github.com/pjnalls">@pjnalls</Anchor>) has
        encountered which can hopefully help others
      </Text>
    </Container>
  );
}
export default About;
