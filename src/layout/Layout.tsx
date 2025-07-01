import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold">Sidebar</h2>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
