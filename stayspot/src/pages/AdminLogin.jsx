// // // // // import React, { useState } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import { useAuth } from '../context/AuthContext.jsx';

// // // // // const AdminLogin = () => {
// // // // //   const { signIn } = useAuth();
// // // // //   const [error, setError] = useState(null);
// // // // //   const navigate = useNavigate();

// // // // //   const onSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     const email = new FormData(e.currentTarget).get('email');
// // // // //     const password = new FormData(e.currentTarget).get('password');
// // // // //     try {
// // // // //       await signIn(email, password);
// // // // //       navigate('/');
// // // // //     } catch (e2) {
// // // // //       setError(e2.response?.data?.message || e2.message);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="container auth">
// // // // //       <h2>Admin Login</h2>
// // // // //       <form onSubmit={onSubmit} className="auth-form">
// // // // //         <input name="email" placeholder="Email" type="email" required />
// // // // //         <input name="password" placeholder="Password" type="password" required />
// // // // //         {error && <div className="error">{error}</div>}
// // // // //         <button>Login</button>
// // // // //       </form>
    
// // // // //   );
// // // // // };

// // // // // export default AdminLogin;




// // // // import React, { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { useAuth } from '../context/AuthContext.jsx';

// // // // const AdminLogin = () => {
// // // //   const { signIn } = useAuth();
// // // //   const [error, setError] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   const onSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setError(null);
// // // //     setLoading(true);
// // // //     const email = new FormData(e.currentTarget).get('email');
// // // //     const password = new FormData(e.currentTarget).get('password');
// // // //     try {
// // // //       await signIn(email, password);
// // // //       navigate('/admin/dashboard'); // Redirect to admin dashboard
// // // //     } catch (e2) {
// // // //       setError(e2.response?.data?.message || e2.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       <div style={styles.card}>
// // // //         <h2 style={styles.title}>Admin Login</h2>
// // // //         <form onSubmit={onSubmit} style={styles.form}>
// // // //           <input
// // // //             name="email"
// // // //             type="email"
// // // //             placeholder="Email"
// // // //             required
// // // //             style={styles.input}
// // // //             disabled={loading}
// // // //           />
// // // //           <input
// // // //             name="password"
// // // //             type="password"
// // // //             placeholder="Password"
// // // //             required
// // // //             style={styles.input}
// // // //             disabled={loading}
// // // //           />
// // // //           {error && <div style={styles.error}>{error}</div>}
// // // //           <button type="submit" style={styles.button} disabled={loading}>
// // // //             {loading ? 'Logging in...' : 'Login'}
// // // //           </button>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const styles = {
// // // //   container: {
// // // //     minHeight: '100vh',
// // // //     display: 'flex',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     background: 'linear-gradient(135deg, #1c92d2, #f2fcfe)',
// // // //     padding: '1rem',
// // // //   },
// // // //   card: {
// // // //     backgroundColor: '#ffffffcc',
// // // //     padding: '2rem',
// // // //     borderRadius: '12px',
// // // //     boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
// // // //     width: '100%',
// // // //     maxWidth: '400px',
// // // //     boxSizing: 'border-box',
// // // //   },
// // // //   title: {
// // // //     marginBottom: '1.5rem',
// // // //     textAlign: 'center',
// // // //     fontSize: '2rem',
// // // //     fontWeight: '700',
// // // //     color: '#333',
// // // //   },
// // // //   form: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //   },
// // // //   input: {
// // // //     padding: '0.75rem 1rem',
// // // //     marginBottom: '1rem',
// // // //     borderRadius: '8px',
// // // //     border: '1.5px solid #ccc',
// // // //     fontSize: '1rem',
// // // //     outline: 'none',
// // // //     transition: 'border-color 0.3s ease',
// // // //   },
// // // //   error: {
// // // //     color: '#e53e3e',
// // // //     marginBottom: '1rem',
// // // //     fontWeight: '600',
// // // //     textAlign: 'center',
// // // //   },
// // // //   button: {
// // // //     backgroundColor: '#1c92d2',
// // // //     color: 'white',
// // // //     padding: '0.75rem 1rem',
// // // //     fontSize: '1.1rem',
// // // //     borderRadius: '8px',
// // // //     border: 'none',
// // // //     cursor: 'pointer',
// // // //     fontWeight: 'bold',
// // // //     transition: 'background-color 0.3s ease',
// // // //   },
// // // // };

// // // // // Optional: Add focus style for inputs (via CSS or inline styles)

// // // // export default AdminLogin;



// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { useAuth } from '../context/AuthContext.jsx';

// // // const AdminLogin = () => {
// // //   const { signIn } = useAuth();
// // //   const [error, setError] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const navigate = useNavigate();

// // //   const onSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError(null);
// // //     setLoading(true);

// // //     const formData = new FormData(e.currentTarget);
// // //     const email = formData.get('email');
// // //     const password = formData.get('password');

// // //     try {
// // //       await signIn(email, password);
// // //       navigate('/admin/dashboard'); // Redirect to admin dashboard upon success
// // //     } catch (e2) {
// // //       // Handle common error response formats gracefully
// // //       setError(
// // //         e2.response?.data?.message ||
// // //         e2.message ||
// // //         'Failed to login. Please check your credentials and try again.'
// // //       );
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <div style={styles.card}>
// // //         <h2 style={styles.title}>Admin Login</h2>
// // //         <form onSubmit={onSubmit} style={styles.form}>
// // //           <input
// // //             name="email"
// // //             type="email"
// // //             placeholder="Email"
// // //             required
// // //             style={styles.input}
// // //             disabled={loading}
// // //             autoComplete="username"
// // //           />
// // //           <input
// // //             name="password"
// // //             type="password"
// // //             placeholder="Password"
// // //             required
// // //             style={styles.input}
// // //             disabled={loading}
// // //             autoComplete="current-password"
// // //           />
// // //           {error && <div style={styles.error}>{error}</div>}
// // //           <button type="submit" style={styles.button} disabled={loading}>
// // //             {loading ? 'Logging in...' : 'Login'}
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   container: {
// // //     minHeight: '100vh',
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     background: 'linear-gradient(135deg, #1c92d2, #f2fcfe)',
// // //     padding: '1rem',
// // //   },
// // //   card: {
// // //     backgroundColor: '#ffffffcc',
// // //     padding: '2rem',
// // //     borderRadius: '12px',
// // //     boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
// // //     width: '100%',
// // //     maxWidth: '400px',
// // //     boxSizing: 'border-box',
// // //   },
// // //   title: {
// // //     marginBottom: '1.5rem',
// // //     textAlign: 'center',
// // //     fontSize: '2rem',
// // //     fontWeight: '700',
// // //     color: '#333',
// // //   },
// // //   form: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //   },
// // //   input: {
// // //     padding: '0.75rem 1rem',
// // //     marginBottom: '1rem',
// // //     borderRadius: '8px',
// // //     border: '1.5px solid #ccc',
// // //     fontSize: '1rem',
// // //     outline: 'none',
// // //     transition: 'border-color 0.3s ease',
// // //   },
// // //   error: {
// // //     color: '#e53e3e',
// // //     marginBottom: '1rem',
// // //     fontWeight: '600',
// // //     textAlign: 'center',
// // //   },
// // //   button: {
// // //     backgroundColor: '#1c92d2',
// // //     color: 'white',
// // //     padding: '0.75rem 1rem',
// // //     fontSize: '1.1rem',
// // //     borderRadius: '8px',
// // //     border: 'none',
// // //     cursor: 'pointer',
// // //     fontWeight: 'bold',
// // //     transition: 'background-color 0.3s ease',
// // //   },
// // // };

// // // export default AdminLogin;





// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext.jsx";

// // const AdminLogin = () => {
// //   const { signIn, loading, error: authError } = useAuth();
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   const onSubmit = async (e) => {
// //     e.preventDefault();
// //     setError(null);

// //     const formData = new FormData(e.currentTarget);
// //     const email = formData.get("email");
// //     const password = formData.get("password");

// //     try {
// //       console.log("Trying to sign in", email);
// //       await signIn(email, password);
// //       console.log("Login successful, navigating to dashboard");
// //       navigate("/admin/dashboard");
// //     } catch (e2) {
// //       console.error("Login error:", e2);
// //       setError(
// //         e2.response?.data?.message ||
// //           e2.message ||
// //           "Failed to login. Please check your credentials and try again."
// //       );
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.card}>
// //         <h2 style={styles.title}>Admin Login</h2>
// //         <form onSubmit={onSubmit} style={styles.form}>
// //           <input
// //             name="email"
// //             type="email"
// //             placeholder="Email"
// //             required
// //             style={styles.input}
// //             disabled={loading}
// //             autoComplete="username"
// //           />
// //           <input
// //             name="password"
// //             type="password"
// //             placeholder="Password"
// //             required
// //             style={styles.input}
// //             disabled={loading}
// //             autoComplete="current-password"
// //           />
// //           {(error || authError) && (
// //             <div style={styles.error}>{error || authError}</div>
// //           )}
// //           <button type="submit" style={styles.button} disabled={loading}>
// //             {loading ? "Logging in..." : "Login"}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     minHeight: "100vh",
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     background: "linear-gradient(135deg, #1c92d2, #f2fcfe)",
// //     padding: "1rem",
// //   },
// //   card: {
// //     backgroundColor: "#ffffffcc",
// //     padding: "2rem",
// //     borderRadius: "12px",
// //     boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
// //     width: "100%",
// //     maxWidth: "400px",
// //     boxSizing: "border-box",
// //   },
// //   title: {
// //     marginBottom: "1.5rem",
// //     textAlign: "center",
// //     fontSize: "2rem",
// //     fontWeight: "700",
// //     color: "#333",
// //   },
// //   form: {
// //     display: "flex",
// //     flexDirection: "column",
// //   },
// //   input: {
// //     padding: "0.75rem 1rem",
// //     marginBottom: "1rem",
// //     borderRadius: "8px",
// //     border: "1.5px solid #ccc",
// //     fontSize: "1rem",
// //     outline: "none",
// //     transition: "border-color 0.3s ease",
// //   },
// //   error: {
// //     color: "#e53e3e",
// //     marginBottom: "1rem",
// //     fontWeight: "600",
// //     textAlign: "center",
// //   },
// //   button: {
// //     backgroundColor: "#1c92d2",
// //     color: "white",
// //     padding: "0.75rem 1rem",
// //     fontSize: "1.1rem",
// //     borderRadius: "8px",
// //     border: "none",
// //     cursor: "pointer",
// //     fontWeight: "bold",
// //     transition: "background-color 0.3s ease",
// //   },
// // };

// // export default AdminLogin;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext.jsx";
// import { login as loginApi } from "../api/client.js"; // import API login

// const AdminLogin = () => {
//   const { login } = useAuth();
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     const formData = new FormData(e.currentTarget);
//     const email = formData.get("email");
//     const password = formData.get("password");

//     setLoading(true);
//     try {
//       console.log("Trying to log in", email);
//       const data = await loginApi(email, password);
//       login(data.token, data.user);
//       console.log("Login successful, navigating to dashboard");
//       navigate("/admin/dashboard");
//     } catch (e2) {
//       console.error("Login error:", e2);
//       setError(
//         e2.response?.data?.message ||
//         e2.message ||
//         "Failed to login. Please check your credentials and try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Admin Login</h2>
//         <form onSubmit={onSubmit} style={styles.form}>
//           <input
//             name="email"
//             type="email"
//             placeholder="Email"
//             required
//             style={styles.input}
//             disabled={loading}
//             autoComplete="username"
//             autoFocus
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             required
//             style={styles.input}
//             disabled={loading}
//             autoComplete="current-password"
//           />
//           {error && (
//             <div style={styles.error}>{error}</div>
//           )}
//           <button type="submit" style={styles.button} disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(135deg, #1c92d2, #f2fcfe)",
//     padding: "1rem",
//   },
//   card: {
//     backgroundColor: "#ffffffcc",
//     padding: "2rem",
//     borderRadius: "12px",
//     boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
//     width: "100%",
//     maxWidth: "400px",
//     boxSizing: "border-box",
//   },
//   title: {
//     marginBottom: "1.5rem",
//     textAlign: "center",
//     fontSize: "2rem",
//     fontWeight: "700",
//     color: "#333",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   input: {
//     padding: "0.75rem 1rem",
//     marginBottom: "1rem",
//     borderRadius: "8px",
//     border: "1.5px solid #ccc",
//     fontSize: "1rem",
//     outline: "none",
//     transition: "border-color 0.3s ease",
//   },
//   error: {
//     color: "#e53e3e",
//     marginBottom: "1rem",
//     fontWeight: "600",
//     textAlign: "center",
//   },
//   button: {
//     backgroundColor: "#1c92d2",
//     color: "white",
//     padding: "0.75rem 1rem",
//     fontSize: "1.1rem",
//     borderRadius: "8px",
//     border: "none",
//     cursor: "pointer",
//     fontWeight: "bold",
//     transition: "background-color 0.3s ease",
//   },
// };

// export default AdminLogin;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";


const AdminLogin = () => {
  const { signIn } = useAuth(); // <-- Use signIn from context
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    setLoading(true);
    try {
      console.log("Trying to log in", email);
      await signIn(email, password); // <-- Use signIn here
      console.log("Login successful, navigating to dashboard");
      navigate("/admin/dashboard");
    } catch (e2) {
      console.error("Login error:", e2);
      setError(
        e2.response?.data?.message ||
        e2.message ||
        "Failed to login. Please check your credentials and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Login</h2>
        <form onSubmit={onSubmit} style={styles.form}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            style={styles.input}
            disabled={loading}
            autoComplete="username"
            autoFocus
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            style={styles.input}
            disabled={loading}
            autoComplete="current-password"
          />
          {error && (
            <div style={styles.error}>{error}</div>
          )}
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1c92d2, #f2fcfe)",
    padding: "1rem",
  },
  card: {
    backgroundColor: "#ffffffcc",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
    width: "100%",
    maxWidth: "400px",
    boxSizing: "border-box",
  },
  title: {
    marginBottom: "1.5rem",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "700",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "0.75rem 1rem",
    marginBottom: "1rem",
    borderRadius: "8px",
    border: "1.5px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  error: {
    color: "#e53e3e",
    marginBottom: "1rem",
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1c92d2",
    color: "white",
    padding: "0.75rem 1rem",
    fontSize: "1.1rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};

export default AdminLogin;
