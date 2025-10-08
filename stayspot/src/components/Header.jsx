



// // // // import React, { useState, useRef, useEffect } from "react";
// // // // import { Link, NavLink, useNavigate } from "react-router-dom";

// // // // const Header = () => {
// // // //   const navigate = useNavigate();
// // // //   const [searchQuery, setSearchQuery] = useState("");
// // // //   const [showLiveSearch, setShowLiveSearch] = useState(false);
// // // //   const [categories, setCategories] = useState([]);
// // // //   const [filteredCategories, setFilteredCategories] = useState([]);
// // // //   const searchRef = useRef(null);
// // // //   const [highlightedIndex, setHighlightedIndex] = useState(-1);
// // // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// // // //   // Fetch categories
// // // //   useEffect(() => {
// // // //     fetch("http://localhost:4000/api/categories")
// // // //       .then(res => res.json())
// // // //       .then(data => setCategories(data))
// // // //       .catch(() => setCategories([]));
// // // //   }, []);

// // // //   // Live search filter
// // // //   useEffect(() => {
// // // //     const input = searchQuery.trim().toLowerCase();
// // // //     if (input.length > 0) {
// // // //       const filtered = categories.filter(c => c.name.toLowerCase().includes(input));
// // // //       setFilteredCategories(filtered);
// // // //       setShowLiveSearch(filtered.length > 0);
// // // //       setHighlightedIndex(-1);
// // // //     } else {
// // // //       setFilteredCategories([]);
// // // //       setShowLiveSearch(false);
// // // //       setHighlightedIndex(-1);
// // // //     }
// // // //   }, [searchQuery, categories]);

// // // //   // Click outside to close dropdown
// // // //   useEffect(() => {
// // // //     const handleClickOutside = (e) => {
// // // //       if (searchRef.current && !searchRef.current.contains(e.target)) {
// // // //         setShowLiveSearch(false);
// // // //         setHighlightedIndex(-1);
// // // //         setMobileMenuOpen(false);
// // // //       }
// // // //     };
// // // //     document.addEventListener("mousedown", handleClickOutside);
// // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // //   }, []);

// // // //   const onKeyDown = (e) => {
// // // //     if (!showLiveSearch) return;
// // // //     if (e.key === "ArrowDown") setHighlightedIndex(i => (i < filteredCategories.length - 1 ? i + 1 : 0));
// // // //     else if (e.key === "ArrowUp") setHighlightedIndex(i => (i > 0 ? i - 1 : filteredCategories.length - 1));
// // // //     else if (e.key === "Enter" && highlightedIndex >= 0) onSelectCategory(filteredCategories[highlightedIndex].slug);
// // // //     else if (e.key === "Escape") { setShowLiveSearch(false); setHighlightedIndex(-1); }
// // // //   };

// // // //   const onSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     const q = searchQuery.trim();
// // // //     if (!q) return;
// // // //     navigate(`/search?q=${encodeURIComponent(q)}`);
// // // //     setShowLiveSearch(false);
// // // //     setSearchQuery("");
// // // //     setHighlightedIndex(-1);
// // // //     setMobileMenuOpen(false);
// // // //   };

// // // //   const onSelectCategory = (slug) => {
// // // //     navigate(`/search?q=${encodeURIComponent(slug)}`);
// // // //     setShowLiveSearch(false);
// // // //     setSearchQuery("");
// // // //     setHighlightedIndex(-1);
// // // //     setMobileMenuOpen(false);
// // // //   };

// // // //   return (
// // // //     <header className="header-modern">
// // // //       <div className="header-inner">
// // // //         {/* Logo */}
// // // //         <Link className="brand" to="/" aria-label="Feedtag Home">
// // // //           <span className="logo-dot" /> Feedtag
// // // //         </Link>

// // // //         {/* Mobile Menu Toggle */}
// // // //         <button
// // // //           className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
// // // //           onClick={() => setMobileMenuOpen(m => !m)}
// // // //           aria-label="Toggle menu"
// // // //         >
// // // //           <span /><span /><span />
// // // //         </button>

// // // //         {/* Navigation Links */}
// // // //         <nav className={`header-links ${mobileMenuOpen ? "open" : ""}`}>
// // // //           <NavLink to="/" end className="navitem" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
// // // //           <NavLink to="/about" className="navitem" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
// // // //           <NavLink to="/contact" className="navitem" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
// // // //         </nav>

// // // //         {/* Search Bar */}
// // // //         <form onSubmit={onSubmit} className="header-search" ref={searchRef}>
// // // //           <input
// // // //             type="search"
// // // //             placeholder="Search articles or categories..."
// // // //             value={searchQuery}
// // // //             onChange={e => setSearchQuery(e.target.value)}
// // // //             onKeyDown={onKeyDown}
// // // //           />
// // // //           <button type="submit" className="search-btn">🔍</button>
// // // //           {showLiveSearch && filteredCategories.length > 0 && (
// // // //             <ul className="live-search-dropdown">
// // // //               {filteredCategories.map((cat, idx) => (
// // // //                 <li
// // // //                   key={cat._id}
// // // //                   className={highlightedIndex === idx ? "highlighted" : ""}
// // // //                   onClick={() => onSelectCategory(cat.slug)}
// // // //                 >
// // // //                   {cat.name}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           )}
// // // //         </form>

// // // //         {/* Admin Login */}
// // // //         <NavLink to="/admin/login" className="admin-btn">Admin</NavLink>
// // // //       </div>

// // // //       {/* Category Scroll */}
// // // //       <div className="category-scroll">
// // // //         {categories.map(c => (
// // // //           <Link key={c._id} to={`/search?q=${encodeURIComponent(c.slug)}`} className="category-link">{c.name}</Link>
// // // //         ))}
// // // //       </div>

// // // //       {/* Styling */}
// // // //       <style>{`
// // // //         .header-modern {
// // // //           position: sticky; top:0; z-index:2000;
// // // //           background: #ffffff; box-shadow: 0 3px 16px rgba(0,0,0,0.08);
// // // //           padding: 0.8rem 1rem; font-family: 'Inter', sans-serif;
// // // //           transition: all 0.3s ease;
// // // //         }
// // // //         .header-inner { display:flex; align-items:center; max-width:1200px; margin:auto; gap:1rem; flex-wrap:wrap; }
// // // //         .brand { font-weight:800; font-size:1.7rem; display:flex; align-items:center; color:#111827; text-decoration:none; }
// // // //         .logo-dot { width:16px; height:16px; background:#4338ca; border-radius:50%; margin-right:6px; }
// // // //         .header-links { display:flex; gap:1rem; flex-grow:1; }
// // // //         .navitem { font-weight:500; padding:0.55rem 1rem; border-radius:8px; color:#374151; transition:0.25s; }
// // // //         .navitem:hover, .navitem.active { background:#4338ca; color:white; }
// // // //         .mobile-menu-toggle { display:none; flex-direction: column; justify-content: space-around; width:30px; height:22px; background:none; border:none; cursor:pointer; }
// // // //         .mobile-menu-toggle span { width:100%; height:3px; background:#4338ca; border-radius:3px; transition:0.3s; }
// // // //         .mobile-menu-toggle.open span:nth-child(1){transform:rotate(45deg); top:0;}
// // // //         .mobile-menu-toggle.open span:nth-child(2){opacity:0;}
// // // //         .mobile-menu-toggle.open span:nth-child(3){transform:rotate(-45deg); top:0;}
// // // //         .header-links.open{flex-direction:column; position:absolute; top:100%; left:0; right:0; background:white; border-radius:0 0 12px 12px; padding:1rem; box-shadow:0 4px 18px rgba(0,0,0,0.12);}
// // // //         .header-search{position:relative; min-width:220px; max-width:400px;}
// // // //         .header-search input{width:100%; padding:0.55rem 2.8rem 0.55rem 1rem; border-radius:10px; border:1px solid #d1d5db; outline:none; font-size:0.95rem; transition:0.3s;}
// // // //         .header-search input:focus{border-color:#4338ca; box-shadow:0 0 8px rgba(67,56,202,0.3);}
// // // //         .search-btn{position:absolute; top:50%; right:12px; transform:translateY(-50%); background:none; border:none; cursor:pointer; color:#6b7280; font-size:1rem;}
// // // //         .search-btn:hover{color:#4338ca;}
// // // //         .live-search-dropdown{position:absolute; top:110%; left:0; right:0; background:white; border:1px solid #d1d5db; border-radius:10px; box-shadow:0 4px 16px rgba(0,0,0,0.15); max-height:220px; overflow-y:auto; z-index:999;}
// // // //         .live-search-dropdown li{padding:0.55rem 1rem; cursor:pointer; transition:0.2s; font-weight:500;}
// // // //         .live-search-dropdown li.highlighted,.live-search-dropdown li:hover{background:#4338ca; color:white;}
// // // //         .admin-btn{margin-left:1rem;padding:0.45rem 1rem;border-radius:8px;border:1px solid #4338ca;color:#4338ca;text-decoration:none;font-weight:500;transition:0.25s;}
// // // //         .admin-btn:hover{background:#4338ca;color:white;}
// // // //         .category-scroll{display:flex; gap:0.5rem; overflow-x:auto; padding:0.55rem 0; margin-top:0.5rem; scrollbar-width:none;-ms-overflow-style:none;}
// // // //         .category-scroll::-webkit-scrollbar{display:none;}
// // // //         .category-link{flex-shrink:0; padding:0.45rem 0.95rem; border-radius:8px; background:#e0e7ff; color:#4338ca; font-weight:500; transition:0.25s; white-space:nowrap;}
// // // //         .category-link:hover{background:#4338ca;color:white;}
// // // //         @media(max-width:720px){.mobile-menu-toggle{display:flex;}.header-links{display:none;}}
// // // //       `}</style>
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Header;



// // // import React, { useState, useRef, useEffect } from "react";
// // // import { Link, NavLink, useNavigate } from "react-router-dom";
// // // import axios from "axios";

// // // const Header = () => {
// // //   const navigate = useNavigate();
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [showLiveSearch, setShowLiveSearch] = useState(false);
// // //   const [categories, setCategories] = useState([]);
// // //   const [filteredCategories, setFilteredCategories] = useState([]);
// // //   const [logo, setLogo] = useState(null); // New: logo state
// // //   const searchRef = useRef(null);
// // //   const [highlightedIndex, setHighlightedIndex] = useState(-1);
// // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// // //   // Fetch categories
// // //   useEffect(() => {
// // //     fetch("http://localhost:4000/api/categories")
// // //       .then(res => res.json())
// // //       .then(data => setCategories(data))
// // //       .catch(() => setCategories([]));
// // //   }, []);

// // //   // Fetch logo from backend
// // //   useEffect(() => {
// // //     axios.get("http://localhost:4000/api/logo")
// // //       .then(res => {
// // //         if (res.data && res.data.length > 0) setLogo(res.data[0].url); // Take first logo
// // //       })
// // //       .catch(err => console.error("Error fetching logo:", err));
// // //   }, []);

// // //   // Live search filter
// // //   useEffect(() => {
// // //     const input = searchQuery.trim().toLowerCase();
// // //     if (input.length > 0) {
// // //       const filtered = categories.filter(c => c.name.toLowerCase().includes(input));
// // //       setFilteredCategories(filtered);
// // //       setShowLiveSearch(filtered.length > 0);
// // //       setHighlightedIndex(-1);
// // //     } else {
// // //       setFilteredCategories([]);
// // //       setShowLiveSearch(false);
// // //       setHighlightedIndex(-1);
// // //     }
// // //   }, [searchQuery, categories]);

// // //   // Click outside to close dropdown
// // //   useEffect(() => {
// // //     const handleClickOutside = (e) => {
// // //       if (searchRef.current && !searchRef.current.contains(e.target)) {
// // //         setShowLiveSearch(false);
// // //         setHighlightedIndex(-1);
// // //         setMobileMenuOpen(false);
// // //       }
// // //     };
// // //     document.addEventListener("mousedown", handleClickOutside);
// // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // //   }, []);

// // //   const onKeyDown = (e) => {
// // //     if (!showLiveSearch) return;
// // //     if (e.key === "ArrowDown") setHighlightedIndex(i => (i < filteredCategories.length - 1 ? i + 1 : 0));
// // //     else if (e.key === "ArrowUp") setHighlightedIndex(i => (i > 0 ? i - 1 : filteredCategories.length - 1));
// // //     else if (e.key === "Enter" && highlightedIndex >= 0) onSelectCategory(filteredCategories[highlightedIndex].slug);
// // //     else if (e.key === "Escape") { setShowLiveSearch(false); setHighlightedIndex(-1); }
// // //   };

// // //   const onSubmit = (e) => {
// // //     e.preventDefault();
// // //     const q = searchQuery.trim();
// // //     if (!q) return;
// // //     navigate(`/search?q=${encodeURIComponent(q)}`);
// // //     setShowLiveSearch(false);
// // //     setSearchQuery("");
// // //     setHighlightedIndex(-1);
// // //     setMobileMenuOpen(false);
// // //   };

// // //   const onSelectCategory = (slug) => {
// // //     navigate(`/search?q=${encodeURIComponent(slug)}`);
// // //     setShowLiveSearch(false);
// // //     setSearchQuery("");
// // //     setHighlightedIndex(-1);
// // //     setMobileMenuOpen(false);
// // //   };

// // //   return (
// // //     <header className="header-modern">
// // //       <div className="header-inner">
// // //         {/* Logo */}
// // //         <Link className="brand" to="/" aria-label="Feedtag Home">
// // //           {logo ? (
// // //             <img src={`http://localhost:4000/${logo}`} alt="Feedtag Logo" className="logo-img" />
// // //           ) : (
// // //             <span className="logo-dot" />
// // //           )}
// // //           Feedtag
// // //         </Link>

// // //         {/* Mobile Menu Toggle */}
// // //         <button
// // //           className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
// // //           onClick={() => setMobileMenuOpen(m => !m)}
// // //           aria-label="Toggle menu"
// // //         >
// // //           <span /><span /><span />
// // //         </button>

// // //         {/* Navigation Links */}
// // //         <nav className={`header-links ${mobileMenuOpen ? "open" : ""}`}>
// // //           <NavLink to="/" end className="navitem" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
// // //           <NavLink to="/about" className="navitem" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
// // //           <NavLink to="/contact" className="navitem" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
// // //         </nav>

// // //         {/* Search Bar */}
// // //         <form onSubmit={onSubmit} className="header-search" ref={searchRef}>
// // //           <input
// // //             type="search"
// // //             placeholder="Search articles or categories..."
// // //             value={searchQuery}
// // //             onChange={e => setSearchQuery(e.target.value)}
// // //             onKeyDown={onKeyDown}
// // //           />
// // //           <button type="submit" className="search-btn">🔍</button>
// // //           {showLiveSearch && filteredCategories.length > 0 && (
// // //             <ul className="live-search-dropdown">
// // //               {filteredCategories.map((cat, idx) => (
// // //                 <li
// // //                   key={cat._id}
// // //                   className={highlightedIndex === idx ? "highlighted" : ""}
// // //                   onClick={() => onSelectCategory(cat.slug)}
// // //                 >
// // //                   {cat.name}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           )}
// // //         </form>

// // //         {/* Admin Login */}
// // //         <NavLink to="/admin/login" className="admin-btn">Admin</NavLink>
// // //       </div>

// // //       {/* Category Scroll */}
// // //       <div className="category-scroll">
// // //         {categories.map(c => (
// // //           <Link key={c._id} to={`/search?q=${encodeURIComponent(c.slug)}`} className="category-link">{c.name}</Link>
// // //         ))}
// // //       </div>

// // //       {/* Styling */}
// // //       <style>{`
// // //         .header-modern { position: sticky; top:0; z-index:2000; background:#ffffff; box-shadow:0 3px 16px rgba(0,0,0,0.08); padding:0.8rem 1rem; font-family:'Inter',sans-serif; transition:all 0.3s ease;}
// // //         .header-inner { display:flex; align-items:center; max-width:1200px; margin:auto; gap:1rem; flex-wrap:wrap;}
// // //         .brand { font-weight:800; font-size:1.7rem; display:flex; align-items:center; color:#111827; text-decoration:none;}
// // //         .logo-dot { width:16px; height:16px; background:#4338ca; border-radius:50%; margin-right:6px;}
// // //         .logo-img { width:32px; height:32px; margin-right:8px; object-fit:contain; } /* New */
// // //         .header-links { display:flex; gap:1rem; flex-grow:1;}
// // //         .navitem { font-weight:500; padding:0.55rem 1rem; border-radius:8px; color:#374151; transition:0.25s;}
// // //         .navitem:hover, .navitem.active { background:#4338ca; color:white;}
// // //         .mobile-menu-toggle { display:none; flex-direction: column; justify-content: space-around; width:30px; height:22px; background:none; border:none; cursor:pointer;}
// // //         .mobile-menu-toggle span { width:100%; height:3px; background:#4338ca; border-radius:3px; transition:0.3s;}
// // //         .mobile-menu-toggle.open span:nth-child(1){transform:rotate(45deg); top:0;}
// // //         .mobile-menu-toggle.open span:nth-child(2){opacity:0;}
// // //         .mobile-menu-toggle.open span:nth-child(3){transform:rotate(-45deg); top:0;}
// // //         .header-links.open{flex-direction:column; position:absolute; top:100%; left:0; right:0; background:white; border-radius:0 0 12px 12px; padding:1rem; box-shadow:0 4px 18px rgba(0,0,0,0.12);}
// // //         .header-search{position:relative; min-width:220px; max-width:400px;}
// // //         .header-search input{width:100%; padding:0.55rem 2.8rem 0.55rem 1rem; border-radius:10px; border:1px solid #d1d5db; outline:none; font-size:0.95rem; transition:0.3s;}
// // //         .header-search input:focus{border-color:#4338ca; box-shadow:0 0 8px rgba(67,56,202,0.3);}
// // //         .search-btn{position:absolute; top:50%; right:12px; transform:translateY(-50%); background:none; border:none; cursor:pointer; color:#6b7280; font-size:1rem;}
// // //         .search-btn:hover{color:#4338ca;}
// // //         .live-search-dropdown{position:absolute; top:110%; left:0; right:0; background:white; border:1px solid #d1d5db; border-radius:10px; box-shadow:0 4px 16px rgba(0,0,0,0.15); max-height:220px; overflow-y:auto; z-index:999;}
// // //         .live-search-dropdown li{padding:0.55rem 1rem; cursor:pointer; transition:0.2s; font-weight:500;}
// // //         .live-search-dropdown li.highlighted,.live-search-dropdown li:hover{background:#4338ca; color:white;}
// // //         .admin-btn{margin-left:1rem;padding:0.45rem 1rem;border-radius:8px;border:1px solid #4338ca;color:#4338ca;text-decoration:none;font-weight:500;transition:0.25s;}
// // //         .admin-btn:hover{background:#4338ca;color:white;}
// // //         .category-scroll{display:flex; gap:0.5rem; overflow-x:auto; padding:0.55rem 0; margin-top:0.5rem; scrollbar-width:none;-ms-overflow-style:none;}
// // //         .category-scroll::-webkit-scrollbar{display:none;}
// // //         .category-link{flex-shrink:0; padding:0.45rem 0.95rem; border-radius:8px; background:#e0e7ff; color:#4338ca; font-weight:500; transition:0.25s; white-space:nowrap;}
// // //         .category-link:hover{background:#4338ca;color:white;}
// // //         @media(max-width:720px){.mobile-menu-toggle{display:flex;}.header-links{display:none;}}
// // //       `}</style>
// // //     </header>
// // //   );
// // // };

// // // export default Header;



import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showLiveSearch, setShowLiveSearch] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [logoUrl, setLogoUrl] = useState(null); // state for dynamic logo
  const searchRef = useRef(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fetch categories
  useEffect(() => {
    fetch("http://localhost:4000/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(() => setCategories([]));
  }, []);

  // Fetch latest logo
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/logo");
        if (res.data && res.data.length > 0) {
          setLogoUrl(res.data[0].url); // latest uploaded logo
        }
      } catch (err) {
        console.error("Error fetching logo:", err);
      }
    };
    fetchLogo();
  }, []);

  // Live search filter
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

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowLiveSearch(false);
        setHighlightedIndex(-1);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
        {/* Logo */}
        <Link className="brand" to="/" aria-label="Feedtag Home">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt="Feedtag Logo"
              style={{ width: 30, height: 30, marginRight: 6, objectFit: "contain" }}
            />
          ) : (
            <span className="logo-dot" />
          )}
          Feedtag
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(m => !m)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        {/* Navigation Links */}
        <nav className={`header-links ${mobileMenuOpen ? "open" : ""}`}>
          <NavLink to="/" end className="navitem" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="navitem" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className="navitem" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
        </nav>

        {/* Search Bar */}
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

        {/* Admin Login */}
        {/* <NavLink to="/admin/login" className="admin-btn">Admin</NavLink> */}
      </div>

      {/* Category Scroll */}
      <div className="category-scroll">
        {categories.map(c => (
          <Link key={c._id} to={`/search?q=${encodeURIComponent(c.slug)}`} className="category-link">{c.name}</Link>
        ))}
      </div>

      {/* Styling */}
      <style>{`
        .header-modern {
          position: sticky; top:0; z-index:2000;
          background: #ffffff; box-shadow: 0 3px 16px rgba(0,0,0,0.08);
          padding: 0.8rem 1rem; font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
        }
        .header-inner { display:flex; align-items:center; max-width:1200px; margin:auto; gap:1rem; flex-wrap:wrap; }
        .brand { font-weight:800; font-size:1.7rem; display:flex; align-items:center; color:#111827; text-decoration:none; }
        .logo-dot { width:16px; height:16px; background:#4338ca; border-radius:50%; margin-right:6px; }
        .header-links { display:flex; gap:1rem; flex-grow:1; }
        .navitem { font-weight:500; padding:0.55rem 1rem; border-radius:8px; color:#374151; transition:0.25s; }
        .navitem:hover, .navitem.active { background:#4338ca; color:white; }
        .mobile-menu-toggle { display:none; flex-direction: column; justify-content: space-around; width:30px; height:22px; background:none; border:none; cursor:pointer; }
        .mobile-menu-toggle span { width:100%; height:3px; background:#4338ca; border-radius:3px; transition:0.3s; }
        .mobile-menu-toggle.open span:nth-child(1){transform:rotate(45deg); top:0;}
        .mobile-menu-toggle.open span:nth-child(2){opacity:0;}
        .mobile-menu-toggle.open span:nth-child(3){transform:rotate(-45deg); top:0;}
        .header-links.open{flex-direction:column; position:absolute; top:100%; left:0; right:0; background:white; border-radius:0 0 12px 12px; padding:1rem; box-shadow:0 4px 18px rgba(0,0,0,0.12);}
        .header-search{position:relative; min-width:220px; max-width:400px;}
        .header-search input{width:100%; padding:0.55rem 2.8rem 0.55rem 1rem; border-radius:10px; border:1px solid #d1d5db; outline:none; font-size:0.95rem; transition:0.3s;}
        .header-search input:focus{border-color:#4338ca; box-shadow:0 0 8px rgba(67,56,202,0.3);}
        .search-btn{position:absolute; top:50%; right:12px; transform:translateY(-50%); background:none; border:none; cursor:pointer; color:#6b7280; font-size:1rem;}
        .search-btn:hover{color:#4338ca;}
        .live-search-dropdown{position:absolute; top:110%; left:0; right:0; background:white; border:1px solid #d1d5db; border-radius:10px; box-shadow:0 4px 16px rgba(0,0,0,0.15); max-height:220px; overflow-y:auto; z-index:999;}
        .live-search-dropdown li{padding:0.55rem 1rem; cursor:pointer; transition:0.2s; font-weight:500;}
        .live-search-dropdown li.highlighted,.live-search-dropdown li:hover{background:#4338ca; color:white;}
        .admin-btn{margin-left:1rem;padding:0.45rem 1rem;border-radius:8px;border:1px solid #4338ca;color:#4338ca;text-decoration:none;font-weight:500;transition:0.25s;}
        .admin-btn:hover{background:#4338ca;color:white;}
        .category-scroll{display:flex; gap:0.5rem; overflow-x:auto; padding:0.55rem 0; margin-top:0.5rem; scrollbar-width:none;-ms-overflow-style:none;}
        .category-scroll::-webkit-scrollbar{display:none;}
        .category-link{flex-shrink:0; padding:0.45rem 0.95rem; border-radius:8px; background:#e0e7ff; color:#4338ca; font-weight:500; transition:0.25s; white-space:nowrap;}
        .category-link:hover{background:#4338ca;color:white;}
        @media(max-width:720px){.mobile-menu-toggle{display:flex;}.header-links{display:none;}}
      `}</style>
    </header>
  );
};

export default Header;



