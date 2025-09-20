import { CommonLayout } from "@/shared/layouts";
import { SidebarMenu } from "@/shared/ui/sidebar-menu";

const MainLayout = () => {
  return (
    <>
      <div className="main-layout-wrapper">
        <SidebarMenu />
        <CommonLayout classes="main-layout" />
      </div>
    </>
  );
};
export default MainLayout;
