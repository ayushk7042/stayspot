// import { api } from "./client";

// // Setup axios interceptor to attach Authorization header automatically
// // tokenGetter is a function that returns the current token string
// export const setupAxiosInterceptors = (tokenGetter) => {
//   api.interceptors.request.use(
//     (config) => {
//       const token = tokenGetter();
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );
// };


import { api } from "./client";

let interceptorId = null;

// Setup axios interceptor to add Authorization header with current token
// tokenGetter is a function returning the current token (string)
export const setupAxiosInterceptors = (tokenGetter) => {
  // Eject previous interceptor if any
  if (interceptorId !== null) {
    api.interceptors.request.eject(interceptorId);
  }

  interceptorId = api.interceptors.request.use(
    (config) => {
      const token = tokenGetter();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        delete config.headers.Authorization;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};
