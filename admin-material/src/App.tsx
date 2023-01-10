import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Sidebar } from './shared/components';
import { AppDrawerProvider, AppThemeProvider } from './shared/contexts';

export const App = () => {
    return (
        <AppThemeProvider>
            <AppDrawerProvider>
                <BrowserRouter>
                    <Sidebar>
                        <AppRoutes />
                    </Sidebar>
                </BrowserRouter>
            </AppDrawerProvider>
        </AppThemeProvider>
    );
};
