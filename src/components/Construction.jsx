import { Card, Text, Title } from "@mantine/core";
import "./Construction.css";

function Construction() {
  return (
    <Card
      className="construction"
      maw={480}
      ta={"center"}
      w={"calc(100dvw - 24px)"}
      mt={"calc(50dvh - 240px)"}
      ml={"calc(50dvw - 280px)"}
    >
      <Title fz={64} fw={700} order={1}>
        UNDER
        <br />
      </Title>
      <Title fz={28} fw={400} order={1}>
        CONSTRUCTION
        <br />
      </Title>
      <Text fz={99.9}>👷</Text>
      <Title fz={28} fw={700} order={1}>
        COMING SOON
      </Title>
    </Card>
  );
}
export default Construction;
