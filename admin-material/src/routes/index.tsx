import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard, ListagemPedidos, ListagemCidades, DetalhesPedido } from '../pages';


export const AppRoutes = () => {

    const { SetIsDrawerOptions } = useAppDrawerContext();

    useEffect(() => {
        SetIsDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Home',
                color: '#fff',
            },
            {
                icon: 'receipt',
                path: '/pedidos',
                label: 'Pedidos',
                color: '#fff',
            },
            {
                icon: 'settings',
                path: '/cidades',
                label: 'Configurações',
                color: '#fff',
            },
        ]);
    });

    return(
        <Routes>
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            <Route path="/pagina-inicial" element={<Dashboard />} />
            <Route path="/pedidos" element={<ListagemPedidos />} />
            <Route path="/pedidos/detalhe/:id" element={<DetalhesPedido />} />
            <Route path="/cidades" element={<ListagemCidades />} />
            
        </Routes>
    );
};