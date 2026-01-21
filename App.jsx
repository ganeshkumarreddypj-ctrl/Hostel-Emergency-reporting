import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Landing from './pages/Landing';
import StudentDashboard from './pages/Student/Dashboard';
import AuthorityDashboard from './pages/Authority/Dashboard';
import ResponderDashboard from './pages/Responder/Dashboard';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" />;
  if (user.role !== allowedRole) return <Navigate to="/" />;
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/student/*" element={
        <ProtectedRoute allowedRole="student">
          <StudentDashboard />
        </ProtectedRoute>
      } />
      <Route path="/authority/*" element={
        <ProtectedRoute allowedRole="authority">
          <AuthorityDashboard />
        </ProtectedRoute>
      } />
      <Route path="/responder/*" element={
        <ProtectedRoute allowedRole="responder">
          <ResponderDashboard />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
