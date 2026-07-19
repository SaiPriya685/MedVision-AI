import Sidebar from "../components/common/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8">

        {children}

      </div>

    </div>
  );
}

export default MainLayout;