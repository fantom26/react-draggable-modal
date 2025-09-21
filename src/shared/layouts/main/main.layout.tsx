import { CommonLayout } from "@/shared/layouts";
import { Footer } from "@/shared/ui/footer";
import { Header } from "@/shared/ui/header";
import { SidebarMenu } from "@/shared/ui/sidebar-menu";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="main-layout-wrapper">
        <SidebarMenu />
        <CommonLayout classes="main-layout" />
      </div>
      <Footer />
    </>
  );
};
export default MainLayout;
