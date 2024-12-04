import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './hooks/useCart';
import './axiosConfig';
import { AuthProvider } from './hooks/useAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingProvider } from './hooks/useLoading';
import './interceptors/authInterceptor';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://e72617c8a19b8705c3e77587fc0c8c26@o4508408659836929.ingest.us.sentry.io/4508408662654976',
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

reportWebVitals(console.log);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <LoadingProvider>
      <AuthProvider>
        <CartProvider>
          <App />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </CartProvider>
      </AuthProvider>
    </LoadingProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
