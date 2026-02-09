import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import clsx from "clsx"; // utility for class merging

export default function Sidebar({ open, onClose }) {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/", sectionId: "home" },
    { label: "About", path: "/about", sectionId: "about" },
    { label: "Services", path: "/services", sectionId: "services" },
    { label: "Contact", path: "/contact", sectionId: "contact" },
  ];

  const handleMenuClick = (item) => {
    // If sectionId is provided, scroll to that section
    if (item.sectionId) {
      const section = document.getElementById(item.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        onClose();
        return;
      }
    }
    // Otherwise, navigate to the path
    navigate(item.path);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={clsx(
          "fixed inset-0 bg-black/50 transition-opacity duration-300 z-40",
          open ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      />

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-4 flex flex-col space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleMenuClick(item)}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
