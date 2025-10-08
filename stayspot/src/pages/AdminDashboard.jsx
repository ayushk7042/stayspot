

import React, { useState } from "react";
import ManagePosts from "./ManagePosts.jsx";
import ManageCategories from "./ManageCategories.jsx";
import Analytics from "./Analytics.jsx"; // New component placeholder
import { useAuth } from "../context/AuthContext.jsx";
import AdminHomePosts from "./AdminHomePosts.jsx";
import AdminAllPosts from "./AdminAllPosts.jsx"; // adjust path as needed

//import ManageSubcategories from "./ManageSubcategories.jsx";

import ManageLogo from "./ManageLogo.jsx";  // new import
//import { FaImage } from "react-icons/fa";   // for logo icon

//import CreatePostForm from "../components/CreatePostForm.jsx";
import { FaRegNewspaper, FaFolderOpen, FaChartBar, FaSignOutAlt, FaUserCircle,FaImage  } from "react-icons/fa";

const tabs = [
  { id: "posts", label: "Posts", icon: FaRegNewspaper, component: ManagePosts },
  { id: "categories", label: "Categories", icon: FaFolderOpen, component: ManageCategories },
  { id: "analytics", label: "Analytics", icon: FaChartBar, component: Analytics },
  { id: "all-posts", label: "All Posts", icon: FaRegNewspaper, component: AdminHomePosts },
  { id: "logo", label: "Manage Logo", icon: FaImage, component: ManageLogo },

  // { id: "subcategories", label: "Subcategories", icon: FaFolderOpen, component: ManageSubcategories }, // NEW
  //{ id: "allposts", label: "All Posts", icon: FaRegNewspaper, component: AdminAllPosts }, 
  //{ id: "create", label: "Create Post", icon: FaPlusCircle, component: CreatePostForm }, // Add your form here
];

const AdminDashboard = () => {
  const { signOut, user } = useAuth();
  const [activeTab, setActiveTab] = useState("posts");

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || ManagePosts;

  return (
    <div style={{ maxWidth: 1200, margin: "auto", padding: "2rem 1rem", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
        <h1 style={{ fontWeight: 700, fontSize: "1.75rem" }}>Admin Dashboard</h1>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <FaUserCircle size={36} color="#6278f7" />
          <span style={{ fontSize: "1rem", fontWeight: 600 }}>
            {user?.name || user?.email || "Admin"}
          </span>
          <button
            onClick={signOut}
            style={{
              padding: "8px 16px",
              backgroundColor: "#e53e3e",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#c53030")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#e53e3e")}
            aria-label="Logout"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </header>

      <div style={{ display: "flex", gap: 24 }}>
        {/* Sidebar navigation */}
        <nav
          style={{
            flexShrink: 0,
            minWidth: 160,
            borderRight: "1px solid #ddd",
            paddingRight: 16,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
          aria-label="Admin main navigation"
        >
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={activeTab === id ? "tab-button active" : "tab-button"}
              style={{
                all: "unset",
                cursor: "pointer",
                padding: "10px 14px",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                gap: 10,
                backgroundColor: activeTab === id ? "#6278f7" : "transparent",
                color: activeTab === id ? "white" : "#444",
                fontWeight: activeTab === id ? 700 : 600,
                fontSize: "1rem",
                transition: "background-color 0.25s ease, color 0.25s ease",
              }}
              aria-current={activeTab === id ? "true" : undefined}
            >
              <Icon />
              {label}
            </button>
          ))}
        </nav>

        {/* Main content area with simple fade-in animation */}
        <section
          style={{
            flexGrow: 1,
            paddingLeft: 16,
            minHeight: 400,
            animation: "fadeIn 0.35s ease",
          }}
        >
          <ActiveComponent />
        </section>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {opacity: 0; transform: translateY(15px);}
            to {opacity: 1; transform: translateY(0);}
          }
          button.tab-button:hover:not(.active) {
            background-color: #e6f0ff;
            color: #4054b2;
          }
        `}
      </style>
    </div>
  );
};

export default AdminDashboard;



