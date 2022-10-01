import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Item from './components/pages/Item'
import LoginPage from './components/pages/LoginPage';
import 'leaflet/dist/leaflet.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';
import LoginLayout from './components/layout/LoginLayout';
import ItemLayout from './components/layout/ItemLayout';
import CardDetail from './components/pages/CardDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>

            <Route element={<MainLayout />}>
                <Route path='/' element={<App />} />
                
            </Route>

            <Route element = {<ItemLayout />}>
                <Route path='/:id' element={<CardDetail />} />
            </Route>

            <Route element={<LoginLayout />}>
                <Route path='/login' element={<LoginPage />}/>
                <Route path='/register'/>
            </Route>
            
        </Routes>
    </BrowserRouter>
);