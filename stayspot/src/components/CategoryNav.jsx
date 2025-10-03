// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { getCategories } from '../api/client.js';

// const CategoryNav = () => {
//   const [cats, setCats] = useState([]);
//   useEffect(() => {
//     getCategories().then(({ data }) => setCats(data)).catch(()=>{});
//   }, []);
//   return (
//     <nav className="catnav">
//       <ul>
//         {cats.map((c) => (
//           <li key={c.slug}>
//             <NavLink to={`/category/${c.slug}`}>{c.name}</NavLink>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default CategoryNav;


import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getCategories } from "../api/client.js";

const CategoryNav = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCategories()
      .then((data) => setCats(Array.isArray(data) ? data : []))
      .catch(() => setCats([])); // Defensive fallback to empty array
  }, []);

  return (
    <nav className="catnav">
      <ul>
        {Array.isArray(cats) && cats.length > 0 ? (
          cats.map((c) => (
            <li key={c.slug}>
              <NavLink to={`/category/${c.slug}`}>{c.name}</NavLink>
            </li>
          ))
        ) : (
          <li style={{ color: "#aaa" }}>No categories found</li>
        )}
      </ul>
    </nav>
  );
};

export default CategoryNav;
