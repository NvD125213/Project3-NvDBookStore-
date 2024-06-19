import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import reportWebVitals from "./reportWebVitals";
import routers from './router'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
        <RecoilRoot>
            {/* <App /> */}
            <RouterProvider router={routers} />
        </RecoilRoot>
  </React.StrictMode>,
);
reportWebVitals();
