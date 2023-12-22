import {
  AppShell,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../../components/navigation/Header";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import { Outlet } from "react-router";

function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure();
  const handleActiveNavToggle = () => {
    if (mobileOpened) toggleMobile();
    else if (desktopOpened) toggleDesktop();
  };
  return (
    <AppShell
      className="app"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header w={"100dvw"}>
        <Header
          {...{ desktopOpened, mobileOpened, toggleDesktop, toggleMobile }}
        />
      </AppShell.Header>
      <AppShell.Navbar p="lg">
        <Navbar {...{ handleActiveNavToggle }} />
        <Footer />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
