import { Anchor, AppShell } from "@mantine/core";

function Footer() {
  return (
    <AppShell.Footer className="footer">
      <Anchor
        className="copyright"
        fz={12}
        href="#"
        p={20}
      >
        Copyright © 2023 Preston Nalls
      </Anchor>
    </AppShell.Footer>
  );
}
export default Footer;
