// // // import React, { useState, useRef, useEffect } from "react";
// // // import { Link, NavLink, useNavigate } from "react-router-dom";
// // // import CategoryNav from "./CategoryNav.jsx";
// // // import { useTheme } from "../context/ThemeContext.jsx";
// // // import LiveSearch from "./LiveSearch.jsx";

// // // const Header = () => {
// // //   const navigate = useNavigate();
// // //   const { mode, toggle } = useTheme();
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [showLiveSearch, setShowLiveSearch] = useState(false);
// // //   const [categories, setCategories] = useState([]);
// // //   const [filteredCategories, setFilteredCategories] = useState([]);
// // //   const searchRef = useRef(null);

// // //   // Load categories from backend on mount for search suggestions
// // //   useEffect(() => {
// // //     fetch("http://localhost:4000/api/categories")
// // //       .then(res => res.json())
// // //       .then(data => {
// // //         setCategories(data.map(c => c.slug));
// // //       })
// // //       .catch(() => setCategories([]));
// // //   }, []);

// // //   // Filter categories dynamically as user types
// // //   useEffect(() => {
// // //     const input = searchQuery.trim().toLowerCase();
// // //     if (input.length > 0) {
// // //       setFilteredCategories(
// // //         categories.filter(cat => cat.toLowerCase().includes(input))
// // //       );
// // //       setShowLiveSearch(true);
// // //     } else {
// // //       setFilteredCategories([]);
// // //       setShowLiveSearch(false);
// // //     }
// // //   }, [searchQuery, categories]);

// // //   // Close live search on click outside search container
// // //   useEffect(() => {
// // //     const onClickOutside = (event) => {
// // //       if (
// // //         searchRef.current &&
// // //         !searchRef.current.contains(event.target)
// // //       ) {
// // //         setShowLiveSearch(false);
// // //       }
// // //     };
// // //     document.addEventListener("mousedown", onClickOutside);
// // //     return () => document.removeEventListener("mousedown", onClickOutside);
// // //   }, []);

// // //   const onSubmit = (e) => {
// // //     e.preventDefault();
// // //     const q = searchQuery.trim();
// // //     if (q) {
// // //       // If input matches a category exactly, navigate to filtered homepage by category
// // //       if (categories.includes(q.toLowerCase())) {
// // //         navigate(`/search?q=${encodeURIComponent(q.toLowerCase())}`);
// // //       } else {
// // //         // fallback: navigate search page with query as is
// // //         navigate(`/search?q=${encodeURIComponent(q)}`);
// // //       }
// // //       setShowLiveSearch(false);
// // //       setSearchQuery("");
// // //     }
// // //   };

// // //   const onSelectCategory = (slug) => {
// // //     setShowLiveSearch(false);
// // //     setSearchQuery("");
// // //     navigate(`/search?q=${encodeURIComponent(slug)}`);
// // //   };

// // //   return (
// // //     <header className="header-glass" role="banner">
// // //       <div className="header-inner">
// // //         <Link className="brand" to="/" aria-label="Feedtag Home">
// // //           <span className="logo-dot" aria-hidden="true" />
// // //           Feedtag
// // //         </Link>

// // //         <nav className="header-links" aria-label="Primary navigation">
// // //           <NavLink to="/" className="navitem" end>
// // //             Home
// // //           </NavLink>
// // //           <NavLink to="/about" className="navitem">
// // //             About
// // //           </NavLink>
// // //           <NavLink to="/contact" className="navitem">
// // //             Contact
// // //           </NavLink>
// // //         </nav>

// // //         <form
// // //           onSubmit={onSubmit}
// // //           className="header-search"
// // //           role="search"
// // //           aria-label="Site search"
// // //           ref={searchRef}
// // //           autoComplete="off"
// // //         >
// // //           <input
// // //             name="q"
// // //             type="search"
// // //             placeholder="Search articles by category…"
// // //             value={searchQuery}
// // //             onChange={(e) => setSearchQuery(e.target.value)}
// // //             aria-autocomplete="list"
// // //             aria-controls="live-search-results"
// // //             aria-expanded={showLiveSearch}
// // //             aria-haspopup="listbox"
// // //             spellCheck="false"
// // //           />
// // //           <button className="search-btn" aria-label="Submit search" type="submit">
// // //             <svg height="18" width="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
// // //               <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
// // //               <path d="M21 21l-3.9-3.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
// // //             </svg>
// // //           </button>

// // //           {showLiveSearch && filteredCategories.length > 0 && (
// // //             <ul
// // //               id="live-search-results"
// // //               role="listbox"
// // //               className="live-search-dropdown"
// // //               tabIndex={-1}
// // //             >
// // //               {filteredCategories.map((slug) => (
// // //                 <li
// // //                   key={slug}
// // //                   role="option"
// // //                   tabIndex={0}
// // //                   onClick={() => onSelectCategory(slug)}
// // //                   onKeyDown={(e) => {
// // //                     if (e.key === "Enter" || e.key === " ") {
// // //                       onSelectCategory(slug);
// // //                     }
// // //                   }}
// // //                   className="live-search-item"
// // //                 >
// // //                   {slug.charAt(0).toUpperCase() + slug.slice(1)}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           )}
// // //         </form>

// // //         <button
// // //           className="theme-toggle"
// // //           onClick={toggle}
// // //           aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
// // //           aria-pressed={mode === "dark"}
// // //           title="Toggle Theme"
// // //         >
// // //           {mode === "light" ? "🌞" : "🌙"}
// // //         </button>

// // //         <NavLink className="admin-btn" to="/admin/login" aria-label="Admin login">
// // //           Admin
// // //         </NavLink>
// // //       </div>

// // //       <CategoryNav />
// // //     </header>
// // //   );
// // // };

// // // export default Header;




// // import React, { useState, useRef, useEffect } from "react";
// // import { Link, NavLink, useNavigate } from "react-router-dom";
// // import CategoryNav from "./CategoryNav.jsx";
// // import { useTheme } from "../context/ThemeContext.jsx";

// // const Header = () => {
// //   const navigate = useNavigate();
// //   const { mode, toggle } = useTheme();
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [showLiveSearch, setShowLiveSearch] = useState(false);
// //   const [categories, setCategories] = useState([]);
// //   const [filteredCategories, setFilteredCategories] = useState([]);
// //   const searchRef = useRef(null);
// //   const liveSearchListRef = useRef(null);
// //   const [highlightedIndex, setHighlightedIndex] = useState(-1);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const navRef = useRef(null);

// //   // Fetch categories on mount
// //   useEffect(() => {
// //     fetch("http://localhost:4000/api/categories")
// //       .then(res => res.json())
// //       .then(data => setCategories(data.map(c => c.slug)))
// //       .catch(() => setCategories([]));
// //   }, []);

// //   // Filter categories dynamically
// //   useEffect(() => {
// //     const input = searchQuery.trim().toLowerCase();
// //     if (input.length > 0) {
// //       const filtered = categories.filter(cat => cat.toLowerCase().includes(input));
// //       setFilteredCategories(filtered);
// //       setShowLiveSearch(filtered.length > 0);
// //       setHighlightedIndex(-1);
// //     } else {
// //       setFilteredCategories([]);
// //       setShowLiveSearch(false);
// //       setHighlightedIndex(-1);
// //     }
// //   }, [searchQuery, categories]);

// //   // Close autocomplete when clicking outside search or nav
// //   useEffect(() => {
// //     const onClickOutside = (event) => {
// //       if (
// //         searchRef.current && !searchRef.current.contains(event.target) &&
// //         navRef.current && !navRef.current.contains(event.target)
// //       ) {
// //         setShowLiveSearch(false);
// //         setHighlightedIndex(-1);
// //         setMobileMenuOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", onClickOutside);
// //     return () => document.removeEventListener("mousedown", onClickOutside);
// //   }, []);

// //   // Keyboard navigation in live search
// //   const onKeyDown = (e) => {
// //     if (!showLiveSearch) return;
// //     if (e.key === "ArrowDown") {
// //       e.preventDefault();
// //       setHighlightedIndex(i => (i < filteredCategories.length - 1 ? i + 1 : 0));
// //     } else if (e.key === "ArrowUp") {
// //       e.preventDefault();
// //       setHighlightedIndex(i => (i > 0 ? i - 1 : filteredCategories.length - 1));
// //     } else if (e.key === "Enter" && highlightedIndex >= 0) {
// //       e.preventDefault();
// //       onSelectCategory(filteredCategories[highlightedIndex]);
// //     } else if (e.key === "Escape") {
// //       setShowLiveSearch(false);
// //       setHighlightedIndex(-1);
// //     }
// //   };

// //   const onSubmit = (e) => {
// //     e.preventDefault();
// //     const q = searchQuery.trim();
// //     if (!q) return;
// //     navigate(`/search?q=${encodeURIComponent(q)}`);
// //     setShowLiveSearch(false);
// //     setSearchQuery("");
// //     setHighlightedIndex(-1);
// //     setMobileMenuOpen(false);
// //   };

// //   const onSelectCategory = (slug) => {
// //     setShowLiveSearch(false);
// //     setSearchQuery("");
// //     setHighlightedIndex(-1);
// //     setMobileMenuOpen(false);
// //     navigate(`/search?q=${encodeURIComponent(slug)}`);
// //   };

// //   const toggleMobileMenu = () => {
// //     setMobileMenuOpen(m => !m);
// //   };

// //   return (
// //     <header className="header-glass" role="banner">
// //       <div className="header-inner">
// //         <Link className="brand" to="/" aria-label="Feedtag Home">
// //           <span className="logo-dot" aria-hidden="true" />
// //           Feedtag
// //         </Link>

// //         <button
// //           className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
// //           aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
// //           aria-expanded={mobileMenuOpen}
// //           onClick={toggleMobileMenu}
// //         >
// //           <span />
// //           <span />
// //           <span />
// //         </button>

// //         <nav
// //           className={`header-links ${mobileMenuOpen ? "open" : ""}`}
// //           aria-label="Primary navigation"
// //           ref={navRef}
// //         >
// //           <NavLink to="/" className="navitem" end onClick={() => setMobileMenuOpen(false)}>
// //             Home
// //           </NavLink>
// //           <NavLink to="/about" className="navitem" onClick={() => setMobileMenuOpen(false)}>
// //             About
// //           </NavLink>
// //           <NavLink to="/contact" className="navitem" onClick={() => setMobileMenuOpen(false)}>
// //             Contact
// //           </NavLink>
// //         </nav>

// //         <form
// //           onSubmit={onSubmit}
// //           className="header-search"
// //           role="search"
// //           aria-label="Site search"
// //           ref={searchRef}
// //           autoComplete="off"
// //         >
// //           <input
// //             name="q"
// //             type="search"
// //             placeholder="Search articles by category…"
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //             aria-autocomplete="list"
// //             aria-controls="live-search-results"
// //             aria-expanded={showLiveSearch}
// //             aria-haspopup="listbox"
// //             onKeyDown={onKeyDown}
// //             spellCheck="false"
// //             role="combobox"
// //             aria-activedescendant={highlightedIndex >= 0 ? `live-search-item-${highlightedIndex}` : undefined}
// //           />
// //           <button className="search-btn" aria-label="Submit search" type="submit">
// //             <svg height="18" width="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
// //               <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
// //               <path d="M21 21l-3.9-3.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
// //             </svg>
// //           </button>

// //           {showLiveSearch && filteredCategories.length > 0 && (
// //             <ul
// //               id="live-search-results"
// //               role="listbox"
// //               className="live-search-dropdown"
// //               tabIndex={-1}
// //             >
// //               {filteredCategories.map((slug, idx) => (
// //                 <li
// //                   key={slug}
// //                   id={`live-search-item-${idx}`}
// //                   role="option"
// //                   tabIndex={-1}
// //                   aria-selected={highlightedIndex === idx}
// //                   onClick={() => onSelectCategory(slug)}
// //                   onKeyDown={(e) => {
// //                     if (e.key === "Enter" || e.key === " ") {
// //                       e.preventDefault();
// //                       onSelectCategory(slug);
// //                     }
// //                   }}
// //                   className={`live-search-item ${highlightedIndex === idx ? "highlighted" : ""}`}
// //                 >
// //                   {slug.charAt(0).toUpperCase() + slug.slice(1)}
// //                 </li>
// //               ))}
// //             </ul>
// //           )}
// //         </form>

// //         <button
// //           className="theme-toggle"
// //           onClick={toggle}
// //           aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
// //           aria-pressed={mode === "dark"}
// //           title="Toggle Theme"
// //         >
// //           {mode === "light" ? "🌞" : "🌙"}
// //         </button>

// //         <NavLink className="admin-btn" to="/admin/login" aria-label="Admin login" onClick={() => setMobileMenuOpen(false)}>
// //           Admin
// //         </NavLink>
// //       </div>

// //       <CategoryNav />

// //       <style>{`
// //         /* Header base styles */
// //         .header-glass {
// //           position: sticky;
// //           top: 0;
// //           background: rgba(255 255 255 / 0.85);
// //           backdrop-filter: saturate(180%) blur(10px);
// //           box-shadow: 0 1px 10px rgb(0 0 0 / 0.05);
// //           border-bottom: 1px solid rgba(203, 213, 225, 0.4);
// //           padding: 0.5rem 1rem;
// //           z-index: 2000;
// //         }
// //         .header-inner {
// //           max-width: 1200px;
// //           margin: auto;
// //           display: flex;
// //           align-items: center;
// //           gap: 1.5rem;
// //           flex-wrap: wrap;
// //           position: relative;
// //         }

// //         .brand {
// //           font-weight: 900;
// //           font-size: 1.5rem;
// //           color: #2563eb;
// //           display: flex;
// //           align-items: center;
// //           text-decoration: none;
// //           user-select: none;
// //           flex-shrink: 0;
// //         }
// //         .logo-dot {
// //           width: 12px;
// //           height: 12px;
// //           background-color: #2563eb;
// //           border-radius: 50%;
// //           margin-right: 8px;
// //         }

// //         /* Navigation */
// //         .header-links {
// //           display: flex;
// //           gap: 1rem;
// //           flex-grow: 1;
// //         }
// //         .navitem {
// //           color: #374151;
// //           text-decoration: none;
// //           font-weight: 600;
// //           font-size: 1rem;
// //           padding: 0.3rem 0.6rem;
// //           border-radius: 6px;
// //           transition: background-color 0.2s ease;
// //           user-select: none;
// //         }
// //         .navitem.active,
// //         .navitem:hover,
// //         .navitem:focus-visible {
// //           background-color: #2563eb;
// //           color: white;
// //           outline: none;
// //         }

// //         /* Mobile Menu Toggle */
// //         .mobile-menu-toggle {
// //           display: none;
// //           flex-direction: column;
// //           justify-content: space-around;
// //           width: 28px;
// //           height: 22px;
// //           background: transparent;
// //           border: none;
// //           cursor: pointer;
// //           padding: 0;
// //           margin-left: auto;
// //           user-select: none;
// //         }
// //         .mobile-menu-toggle span {
// //           width: 100%;
// //           height: 3px;
// //           background-color: #2563eb;
// //           border-radius: 3px;
// //           transition: all 0.3s linear;
// //           position: relative;
// //           transform-origin: 1px;
// //         }
// //         .mobile-menu-toggle.open span:nth-child(1) {
// //           transform: rotate(45deg);
// //         }
// //         .mobile-menu-toggle.open span:nth-child(2) {
// //           opacity: 0;
// //           transform: translateX(20px);
// //         }
// //         .mobile-menu-toggle.open span:nth-child(3) {
// //           transform: rotate(-45deg);
// //         }

// //         /* Mobile nav open */
// //         .header-links.open {
// //           display: flex;
// //           flex-direction: column;
// //           position: absolute;
// //           top: 100%;
// //           left: 0;
// //           right: 0;
// //           background: white;
// //           border-bottom-left-radius: 10px;
// //           border-bottom-right-radius: 10px;
// //           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
// //           padding: 1rem;
// //           z-index: 1500;
// //         }

// //         /* Search form */
// //         .header-search {
// //           position: relative;
// //           flex-shrink: 1;
// //           flex-grow: 0;
// //           min-width: 240px;
// //           max-width: 400px;
// //         }
// //         .header-search input[type="search"] {
// //           width: 100%;
// //           padding: 0.5rem 2.8rem 0.5rem 1rem;
// //           font-size: 1rem;
// //           border-radius: 8px;
// //           border: 1.5px solid #cbd5e1;
// //           outline-offset: 2px;
// //           box-sizing: border-box;
// //           transition: border-color 0.3s ease;
// //         }
// //         .header-search input[type="search"]:focus {
// //           border-color: #2563eb;
// //           box-shadow: 0 0 4px #2563ebaa;
// //         }
// //         .search-btn {
// //           position: absolute;
// //           top: 50%;
// //           right: 6px;
// //           transform: translateY(-50%);
// //           background: none;
// //           border: none;
// //           padding: 0;
// //           cursor: pointer;
// //           color: #6b7280;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           user-select: none;
// //         }
// //         .search-btn:hover,
// //         .search-btn:focus-visible {
// //           color: #2563eb;
// //           outline: none;
// //         }
// //         /* Live Search Dropdown */
// //         .live-search-dropdown {
// //           position: absolute;
// //           top: 110%;
// //           left: 0;
// //           right: 0;
// //           background: white;
// //           border: 1px solid #cbd5e1;
// //           border-radius: 8px;
// //           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
// //           max-height: 220px;
// //           overflow-y: auto;
// //           z-index: 3000;
// //         }
// //         .live-search-item {
// //           padding: 0.5rem 1rem;
// //           cursor: pointer;
// //           font-weight: 600;
// //           color: #374151;
// //           user-select: none;
// //           outline-offset: 2px;
// //         }
// //         .live-search-item.highlighted,
// //         .live-search-item:hover,
// //         .live-search-item:focus-visible {
// //           background-color: #2563eb;
// //           color: white;
// //           outline: none;
// //         }

// //         /* Theme toggle button */
// //         .theme-toggle {
// //           border: none;
// //           background: none;
// //           font-size: 1.5rem;
// //           cursor: pointer;
// //           color: #2563eb;
// //           padding: 8px 10px;
// //           border-radius: 8px;
// //           user-select: none;
// //           margin-left: 0.5rem;
// //           transition: background-color 0.3s ease;
// //           flex-shrink: 0;
// //         }
// //         .theme-toggle:hover,
// //         .theme-toggle:focus-visible {
// //           background-color: #2563eb22;
// //           outline: none;
// //         }

// //         /* Admin button */
// //         .admin-btn {
// //           margin-left: 1rem;
// //           text-decoration: none;
// //           font-weight: 600;
// //           color: #2563eb;
// //           user-select: none;
// //           padding: 0.3rem 0.75rem;
// //           border-radius: 6px;
// //           border: 1.5px solid transparent;
// //           transition: background-color 0.3s ease, border-color 0.3s ease;
// //           flex-shrink: 0;
// //         }
// //         .admin-btn:hover,
// //         .admin-btn:focus-visible {
// //           background-color: #2563eb;
// //           border-color: #2563eb;
// //           color: white;
// //           outline: none;
// //         }

// //         @media (max-width: 720px) {
// //           .header-inner {
// //             justify-content: space-between;
// //           }
// //           .header-links {
// //             flex-basis: 100%;
// //             justify-content: flex-start;
// //             margin-top: 8px;
// //             order: 3;
// //             display: none;
// //           }
// //           .header-links.open {
// //             display: flex;
// //           }
// //           .navitem {
// //             padding: 0.8rem 0;
// //             font-size: 1.2rem;
// //           }
// //           .admin-btn {
// //             margin-left: 0;
// //             font-size: 1.1rem;
// //             padding: 0.6rem 0;
// //           }
// //         }
// //       `}</style>
// //     </header>
// //   );
// // };

// // export default Header;



// import React, { useState, useRef, useEffect } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import CategoryNav from "./CategoryNav.jsx";
// import { useTheme } from "../context/ThemeContext.jsx";

// const Header = () => {
//   const navigate = useNavigate();
//   const { mode, toggle } = useTheme();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showLiveSearch, setShowLiveSearch] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [filteredCategories, setFilteredCategories] = useState([]);
//   const searchRef = useRef(null);
//   const [highlightedIndex, setHighlightedIndex] = useState(-1);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:4000/api/categories")
//       .then(res => res.json())
//       .then(data => setCategories(data.map(c => c.slug)))
//       .catch(() => setCategories([]));
//   }, []);

//   useEffect(() => {
//     const input = searchQuery.trim().toLowerCase();
//     if (input.length > 0) {
//       const filtered = categories.filter(cat => cat.toLowerCase().includes(input));
//       setFilteredCategories(filtered);
//       setShowLiveSearch(filtered.length > 0);
//       setHighlightedIndex(-1);
//     } else {
//       setFilteredCategories([]);
//       setShowLiveSearch(false);
//       setHighlightedIndex(-1);
//     }
//   }, [searchQuery, categories]);

//   useEffect(() => {
//     const onClickOutside = (event) => {
//       if (
//         searchRef.current && !searchRef.current.contains(event.target)
//       ) {
//         setShowLiveSearch(false);
//         setHighlightedIndex(-1);
//         setMobileMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", onClickOutside);
//     return () => document.removeEventListener("mousedown", onClickOutside);
//   }, []);

//   const onKeyDown = (e) => {
//     if (!showLiveSearch) return;
//     if (e.key === "ArrowDown") setHighlightedIndex(i => (i < filteredCategories.length - 1 ? i + 1 : 0));
//     else if (e.key === "ArrowUp") setHighlightedIndex(i => (i > 0 ? i - 1 : filteredCategories.length - 1));
//     else if (e.key === "Enter" && highlightedIndex >= 0) onSelectCategory(filteredCategories[highlightedIndex]);
//     else if (e.key === "Escape") { setShowLiveSearch(false); setHighlightedIndex(-1); }
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const q = searchQuery.trim();
//     if (!q) return;
//     navigate(`/search?q=${encodeURIComponent(q)}`);
//     setShowLiveSearch(false);
//     setSearchQuery("");
//     setHighlightedIndex(-1);
//     setMobileMenuOpen(false);
//   };

//   const onSelectCategory = (slug) => {
//     setShowLiveSearch(false);
//     setSearchQuery("");
//     setHighlightedIndex(-1);
//     setMobileMenuOpen(false);
//     navigate(`/search?q=${encodeURIComponent(slug)}`);
//   };

//   return (
//     <header className="header-modern">
//       <div className="header-inner">
//         <Link className="brand" to="/" aria-label="Feedtag Home">
//           <span className="logo-dot" aria-hidden="true" />
//           Feedtag
//         </Link>

//         <button
//           className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
//           aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
//           onClick={() => setMobileMenuOpen(m => !m)}
//         >
//           <span /><span /><span />
//         </button>

//         <nav className={`header-links ${mobileMenuOpen ? "open" : ""}`}>
//           <NavLink to="/" className="navitem" end onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
//           <NavLink to="/about" className="navitem" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
//           <NavLink to="/contact" className="navitem" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
//         </nav>

//         <form onSubmit={onSubmit} className="header-search" ref={searchRef}>
//           <input
//             type="search"
//             placeholder="Search articles or categories..."
//             value={searchQuery}
//             onChange={e => setSearchQuery(e.target.value)}
//             onKeyDown={onKeyDown}
//             aria-autocomplete="list"
//           />
//           <button type="submit" className="search-btn" aria-label="Search">
//             🔍
//           </button>

//           {showLiveSearch && filteredCategories.length > 0 && (
//             <ul className="live-search-dropdown">
//               {filteredCategories.map((slug, idx) => (
//                 <li
//                   key={slug}
//                   className={highlightedIndex === idx ? "highlighted" : ""}
//                   onClick={() => onSelectCategory(slug)}
//                 >
//                   {slug.charAt(0).toUpperCase() + slug.slice(1)}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </form>

//         <button className="theme-toggle" onClick={toggle}>{mode === "light" ? "🌞" : "🌙"}</button>
//         <NavLink to="/admin/login" className="admin-btn">Admin</NavLink>
//       </div>
//       <CategoryNav />

//       <style>{`
//         .header-modern {
//           position: sticky;
//           top:0;
//           z-index:2000;
//           background: rgba(255 255 255 / 0.85);
//           backdrop-filter: blur(12px) saturate(180%);
//           padding: 0.5rem 1rem;
//           box-shadow: 0 4px 20px rgba(0,0,0,0.08);
//           border-bottom: 1px solid rgba(203,213,225,0.3);
//         }
//         .header-inner {
//           display: flex;
//           align-items: center;
//           max-width: 1200px;
//           margin: auto;
//           gap:1rem;
//           flex-wrap: wrap;
//         }
//         .brand {
//           font-weight: 900;
//           font-size: 1.6rem;
//           display: flex;
//           align-items: center;
//           color: #4338ca;
//           text-decoration: none;
//         }
//         .logo-dot {
//           width:14px; height:14px;
//           background: #4338ca;
//           border-radius:50%;
//           margin-right:6px;
//         }
//         .header-links {
//           display:flex;
//           gap:1rem;
//           flex-grow:1;
//         }
//         .navitem {
//           font-weight:600;
//           padding:0.4rem 0.8rem;
//           border-radius:8px;
//           transition:0.2s;
//           color:#374151;
//         }
//         .navitem:hover,.navitem.active { background:#4338ca; color:white; }
//         .mobile-menu-toggle {
//           display:none;
//           flex-direction: column;
//           justify-content: space-around;
//           width:28px; height:22px;
//           background:none; border:none; cursor:pointer;
//         }
//         .mobile-menu-toggle span {
//           width:100%; height:3px;
//           background:#4338ca; border-radius:3px;
//           transition:0.3s;
//         }
//         .mobile-menu-toggle.open span:nth-child(1){transform:rotate(45deg);}
//         .mobile-menu-toggle.open span:nth-child(2){opacity:0;}
//         .mobile-menu-toggle.open span:nth-child(3){transform:rotate(-45deg);}
//         .header-links.open{flex-direction:column; position:absolute; top:100%; left:0; right:0; background:white; border-radius:0 0 12px 12px; padding:1rem; box-shadow:0 4px 16px rgba(0,0,0,0.12);}
//         .header-search{position:relative; min-width:200px; max-width:400px;}
//         .header-search input{width:100%; padding:0.5rem 2.5rem 0.5rem 1rem; border-radius:8px; border:1.5px solid #cbd5e1; outline:none; transition:0.3s;}
//         .header-search input:focus{border-color:#4338ca; box-shadow:0 0 6px #4338caaa;}
//         .search-btn{position:absolute; top:50%; right:8px; transform:translateY(-50%); background:none; border:none; cursor:pointer; color:#6b7280; font-size:1rem;}
//         .search-btn:hover{color:#4338ca;}
//         .live-search-dropdown{position:absolute; top:110%; left:0; right:0; background:white; border:1px solid #cbd5e1; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.12); max-height:220px; overflow-y:auto;}
//         .live-search-dropdown li{padding:0.5rem 1rem; cursor:pointer; transition:0.2s; font-weight:600;}
//         .live-search-dropdown li.highlighted,.live-search-dropdown li:hover{background:#4338ca; color:white;}
//         .theme-toggle{margin-left:0.5rem;border:none;background:none;font-size:1.4rem;cursor:pointer;color:#4338ca;padding:0.4rem;border-radius:6px;transition:0.2s;}
//         .theme-toggle:hover{background:#4338ca22;}
//         .admin-btn{margin-left:1rem;padding:0.3rem 0.8rem;border-radius:6px;border:1.5px solid #4338ca;color:#4338ca;text-decoration:none;font-weight:600;transition:0.2s;}
//         .admin-btn:hover{background:#4338ca;color:white;}
//         @media(max-width:720px){.mobile-menu-toggle{display:flex;}.header-links{display:none;}}
//       `}</style>
//     </header>
//   );
// };

// export default Header;




import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

const Header = () => {
  const navigate = useNavigate();
  const { mode, toggle } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [showLiveSearch, setShowLiveSearch] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const searchRef = useRef(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    const input = searchQuery.trim().toLowerCase();
    if (input.length > 0) {
      const filtered = categories.filter(c => c.name.toLowerCase().includes(input));
      setFilteredCategories(filtered);
      setShowLiveSearch(filtered.length > 0);
      setHighlightedIndex(-1);
    } else {
      setFilteredCategories([]);
      setShowLiveSearch(false);
      setHighlightedIndex(-1);
    }
  }, [searchQuery, categories]);

  useEffect(() => {
    const onClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowLiveSearch(false);
        setHighlightedIndex(-1);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const onKeyDown = (e) => {
    if (!showLiveSearch) return;
    if (e.key === "ArrowDown") setHighlightedIndex(i => (i < filteredCategories.length - 1 ? i + 1 : 0));
    else if (e.key === "ArrowUp") setHighlightedIndex(i => (i > 0 ? i - 1 : filteredCategories.length - 1));
    else if (e.key === "Enter" && highlightedIndex >= 0) onSelectCategory(filteredCategories[highlightedIndex].slug);
    else if (e.key === "Escape") { setShowLiveSearch(false); setHighlightedIndex(-1); }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
    setShowLiveSearch(false);
    setSearchQuery("");
    setHighlightedIndex(-1);
    setMobileMenuOpen(false);
  };

  const onSelectCategory = (slug) => {
    navigate(`/search?q=${encodeURIComponent(slug)}`);
    setShowLiveSearch(false);
    setSearchQuery("");
    setHighlightedIndex(-1);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header-modern">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Feedtag Home">
          <span className="logo-dot" /> Feedtag
        </Link>

        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(m => !m)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <nav className={`header-links ${mobileMenuOpen ? "open" : ""}`}>
          <NavLink to="/" end className="navitem" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="navitem" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className="navitem" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
        </nav>

        <form onSubmit={onSubmit} className="header-search" ref={searchRef}>
          <input
            type="search"
            placeholder="Search articles or categories..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <button type="submit" className="search-btn">🔍</button>
          {showLiveSearch && filteredCategories.length > 0 && (
            <ul className="live-search-dropdown">
              {filteredCategories.map((cat, idx) => (
                <li
                  key={cat._id}
                  className={highlightedIndex === idx ? "highlighted" : ""}
                  onClick={() => onSelectCategory(cat.slug)}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          )}
        </form>

        <button className="theme-toggle" onClick={toggle}>{mode === "light" ? "🌞" : "🌙"}</button>
        <NavLink to="/admin/login" className="admin-btn">Admin</NavLink>
      </div>

      <div className="category-scroll">
        {categories.map(c => (
          <Link key={c._id} to={`/search?q=${encodeURIComponent(c.slug)}`} className="category-link">{c.name}</Link>
        ))}
      </div>

      <style>{`
        .header-modern { position:sticky; top:0; z-index:2000; background:rgba(255 255 255 /0.9); backdrop-filter:blur(12px); padding:0.5rem 1rem; box-shadow:0 4px 20px rgba(0,0,0,0.08); }
        .header-inner { display:flex; align-items:center; max-width:1200px; margin:auto; gap:1rem; flex-wrap:wrap; }
        .brand { font-weight:900; font-size:1.6rem; display:flex; align-items:center; color:#4338ca; text-decoration:none; }
        .logo-dot { width:14px; height:14px; background:#4338ca; border-radius:50%; margin-right:6px; }
        .header-links { display:flex; gap:1rem; flex-grow:1; }
        .navitem { font-weight:600; padding:0.4rem 0.8rem; border-radius:8px; transition:0.2s; color:#374151; }
        .navitem:hover,.navitem.active { background:#4338ca; color:white; }
        .mobile-menu-toggle { display:none; flex-direction: column; justify-content: space-around; width:28px; height:22px; background:none; border:none; cursor:pointer; }
        .mobile-menu-toggle span { width:100%; height:3px; background:#4338ca; border-radius:3px; transition:0.3s; }
        .mobile-menu-toggle.open span:nth-child(1){transform:rotate(45deg);}
        .mobile-menu-toggle.open span:nth-child(2){opacity:0;}
        .mobile-menu-toggle.open span:nth-child(3){transform:rotate(-45deg);}
        .header-links.open{flex-direction:column; position:absolute; top:100%; left:0; right:0; background:white; border-radius:0 0 12px 12px; padding:1rem; box-shadow:0 4px 16px rgba(0,0,0,0.12);}
        .header-search{position:relative; min-width:200px; max-width:400px;}
        .header-search input{width:100%; padding:0.5rem 2.5rem 0.5rem 1rem; border-radius:8px; border:1.5px solid #cbd5e1; outline:none; transition:0.3s;}
        .header-search input:focus{border-color:#4338ca; box-shadow:0 0 6px #4338caaa;}
        .search-btn{position:absolute; top:50%; right:8px; transform:translateY(-50%); background:none; border:none; cursor:pointer; color:#6b7280; font-size:1rem;}
        .search-btn:hover{color:#4338ca;}
        .live-search-dropdown{position:absolute; top:110%; left:0; right:0; background:white; border:1px solid #cbd5e1; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.12); max-height:220px; overflow-y:auto;}
        .live-search-dropdown li{padding:0.5rem 1rem; cursor:pointer; transition:0.2s; font-weight:600;}
        .live-search-dropdown li.highlighted,.live-search-dropdown li:hover{background:#4338ca; color:white;}
        .theme-toggle{margin-left:0.5rem;border:none;background:none;font-size:1.4rem;cursor:pointer;color:#4338ca;padding:0.4rem;border-radius:6px;transition:0.2s;}
        .theme-toggle:hover{background:#4338ca22;}
        .admin-btn{margin-left:1rem;padding:0.3rem 0.8rem;border-radius:6px;border:1.5px solid #4338ca;color:#4338ca;text-decoration:none;font-weight:600;transition:0.2s;}
        .admin-btn:hover{background:#4338ca;color:white;}
        .category-scroll{display:flex; gap:0.5rem; overflow-x:auto; padding:0.5rem 0; margin-top:0.5rem; scrollbar-width:none;-ms-overflow-style:none;}
        .category-scroll::-webkit-scrollbar{display:none;}
        .category-link{flex-shrink:0; padding:0.4rem 0.8rem; border-radius:6px; background:#e0e7ff; color:#4338ca; font-weight:600; transition:0.2s; white-space:nowrap;}
        .category-link:hover{background:#4338ca;color:white;}
        @media(max-width:720px){.mobile-menu-toggle{display:flex;}.header-links{display:none;}}
      `}</style>
    </header>
  );
};

export default Header;
