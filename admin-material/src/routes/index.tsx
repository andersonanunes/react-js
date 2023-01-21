import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard, ListagemPedidos, ListagemCidades } from '../pages';


export const AppRoutes = () => {

    const { SetIsDrawerOptions } = useAppDrawerContext();

    useEffect(() => {
        SetIsDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Home',
            },
            {
                icon: 'receipt',
                path: '/pedidos',
                label: 'Pedidos',
            },
            {
                icon: 'settings',
                path: '/cidades',
                label: 'Configurações',
            },
        ]);
    });

    return(
        <Routes>
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            <Route path="/pagina-inicial" element={<Dashboard />} />
            <Route path="/pedidos" element={<ListagemPedidos />} />
            <Route path="/pedidos/detalhe/:id" element={<p>pagina de detalhes</p> } />
            <Route path="/cidades" element={<ListagemCidades />} />
            
        </Routes>
    );
};