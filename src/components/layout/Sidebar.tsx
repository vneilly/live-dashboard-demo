import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { label: "Dashboard", to: "/" },
    { label: "Map View", to: "/map" },
    { label: "Analytics", to: "/analytics" },
  ];

  return (
    <aside className="w-64 bg-gray-100 h-screen p-4">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-gray-200 font-medium ${
                isActive
                  ? "bg-blue-200 text-blue-900 font-semibold"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
