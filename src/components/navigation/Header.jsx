import { Anchor, Burger, Flex, Group, Text } from "@mantine/core";
import React from "react";

function Header({ desktopOpened, mobileOpened, toggleDesktop, toggleMobile }) {
  return (
    <Group  h="100%" justify={"space-between"} px="md">
      <Flex align={"center"} gap={12}>
        <Anchor href="/" w={24}>
          <Text fw={"bolder"} fz={24}>p.s</Text>
        </Anchor>
        <Text fw={400} fz={16} pl={4}>
          <Anchor href="/">
            problem.solvers
          </Anchor>
        </Text>
      </Flex>
      <Group>
        <Burger
          aria-label="Toggle mobile navigation"
          hiddenFrom="sm"
          onClick={toggleMobile}
          opened={mobileOpened}
          size="sm"
        />
        <Burger
          aria-label="Toggle desktop navigation"
          onClick={toggleDesktop}
          opened={desktopOpened}
          size="sm"
          visibleFrom="sm"
        />
      </Group>
    </Group>
  );
}
export default Header;
