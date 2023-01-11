import { Routes, Route, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAppDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

export const AppRoutes = () => {

    const { toggleDrawerOpen, SetIsDrawerOptions } = useAppDrawerContext();

    useEffect(() => {
        SetIsDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Página Inicial',
            },
            {
                icon: 'analytics',
                path: '/pedidos',
                label: 'Pedidos',
            },
        ]);
    });

    return(
        <Routes>
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Página Inicial</Button>} />
            <Route path="/pedidos" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Pedidos</Button>} />
        </Routes>
    );
};