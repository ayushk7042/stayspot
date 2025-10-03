import React from 'react';
import RoutesConfig from './routes.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <RoutesConfig />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
