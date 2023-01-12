import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard } from '../pages';

export const AppRoutes = () => {

    const { SetIsDrawerOptions } = useAppDrawerContext();

    useEffect(() => {
        SetIsDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Página Inicial',
            },

        ]);
    });

    return(
        <Routes>
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            <Route path="/pagina-inicial" element={<Dashboard />} />
            
        </Routes>
    );
};