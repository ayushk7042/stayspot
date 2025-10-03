import React from 'react';
export const Loader = () => <div className="loader">Loading…</div>;
export const ErrorState = ({ msg = 'Something went wrong.' }) => <div className="error">{msg}</div>;
