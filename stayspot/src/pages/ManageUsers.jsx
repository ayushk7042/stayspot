// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext.jsx";
// import { getUsers, updateUser } from "../api/client.js";
// // Assume: getUsers -> GET /api/users, updateUser(token, id, data) -> PATCH /api/users/:id

// const ManageUsers = () => {
//   const { token } = useAuth();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [err, setErr] = useState(null);

//   const fetchUsers = async () => {
//     setLoading(true); setErr(null);
//     try {
//       const data = await getUsers(token); // Should return array of users
//       setUsers(data);
//     } catch { setErr("Failed to load users"); } finally { setLoading(false); }
//   };

//   useEffect(() => { fetchUsers(); }, []);

//   const handleToggleActive = async (user) => {
//     try {
//       await updateUser(token, user._id, { isActive: !user.isActive });
//       fetchUsers();
//     } catch {
//       setErr("Could not update user");
//     }
//   };

//   return (
//     <div style={{ maxWidth: 700 }}>
//       <h2>User Management</h2>
//       {loading && <p>Loading users...</p>}
//       {err && <p style={{ color: "#d32f2f" }}>{err}</p>}
//       <table className="admin-table">
//         <thead>
//           <tr><th>Name</th><th>Email</th><th>Status</th><th>Actions</th></tr>
//         </thead>
//         <tbody>
//           {users.map(u => (
//             <tr key={u._id}>
//               <td>{u.name || "No Name"}</td>
//               <td>{u.email}</td>
//               <td>
//                 {u.isActive
//                   ? <span style={{ color: "#16a34a" }}>Active</span>
//                   : <span style={{ color: "#d32f2f" }}>Inactive</span>}
//               </td>
//               <td>
//                 <button
//                   onClick={() => handleToggleActive(u)}
//                   style={{
//                     background: u.isActive ? '#f87171' : '#22d3ee',
//                     border: 'none',
//                     color: "white",
//                     borderRadius: 6,
//                     padding: "6px 14px",
//                     fontWeight: 600,
//                     cursor: "pointer"
//                   }}
//                   title={u.isActive ? "Deactivate" : "Activate"}
//                 >
//                   {u.isActive ? "Deactivate" : "Activate"}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <style>{`
//         .admin-table { width:100%; border-collapse:collapse; margin-top: 1rem;}
//         .admin-table th, .admin-table td { padding:10px; border:1px solid #e0e7ef; }
//         .admin-table th { background:#f1f5f9; }
//       `}</style>
//     </div>
//   );
// };

// export default ManageUsers;




import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { getUsers, updateUser } from "../api/client.js";

const ManageUsers = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const fetchUsers = async () => {
    if (!token) return;
    setLoading(true);
    setErr(null);
    try {
      const data = await getUsers(token); // Pass valid token here
      setUsers(data);
    } catch {
      setErr("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) return;  // Wait until token is available before fetching
    fetchUsers();
  }, [token]);

  const handleToggleActive = async (user) => {
    try {
      await updateUser(token, user._id, { isActive: !user.isActive });
      fetchUsers();
    } catch {
      setErr("Could not update user");
    }
  };

  return (
    <div style={{ maxWidth: 700 }}>
      <h2>User Management</h2>
      {loading && <p>Loading users...</p>}
      {err && <p style={{ color: "#d32f2f" }}>{err}</p>}
      <table className="admin-table">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.name || "No Name"}</td>
              <td>{u.email}</td>
              <td>
                {u.isActive
                  ? <span style={{ color: "#16a34a" }}>Active</span>
                  : <span style={{ color: "#d32f2f" }}>Inactive</span>}
              </td>
              <td>
                <button
                  onClick={() => handleToggleActive(u)}
                  style={{
                    background: u.isActive ? '#f87171' : '#22d3ee',
                    border: 'none',
                    color: "white",
                    borderRadius: 6,
                    padding: "6px 14px",
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                  title={u.isActive ? "Deactivate" : "Activate"}
                >
                  {u.isActive ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style>{`
        .admin-table { width:100%; border-collapse:collapse; margin-top: 1rem;}
        .admin-table th, .admin-table td { padding:10px; border:1px solid #e0e7ef; }
        .admin-table th { background:#f1f5f9; }
      `}</style>
    </div>
  );
};

export default ManageUsers;
