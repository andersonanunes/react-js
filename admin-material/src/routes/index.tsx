import { Routes, Route, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAppDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {

    const { toogleDrawerOpen } = useAppDrawerContext();

    return(
        <Routes>
            <Route path="/" element={<Button variant="contained" color="primary" onClick={toogleDrawerOpen}>Página Inicial</Button>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};