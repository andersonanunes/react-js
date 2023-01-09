import { Routes, Route, Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useAppThemeContext } from "../shared/contexts";

export const AppRoutes = () => {

    const { toogleTheme } = useAppThemeContext();

    return(
        <Routes>
            <Route path="/" element={<Button variant="contained" color="primary" onClick={toogleTheme}>Página Inicial</Button>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}