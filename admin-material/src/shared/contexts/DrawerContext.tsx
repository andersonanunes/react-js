import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerOptions {
    icon: string;
    path: string;
    label: string;
    color: string;
}

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    isDrawerOptions: IDrawerOptions[];
    SetIsDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void; 
}

interface IAppDrawerProviderProps {
    children: React.ReactNode;
}


const DrawerContext = createContext({} as IDrawerContextData );

export const useAppDrawerContext = () => {
    return useContext(DrawerContext);
};

export const AppDrawerProvider: React.FC<IAppDrawerProviderProps> = ({ children }) => {
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    
    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);
    
    const [isDrawerOptions, setIsDrawerOptions] = useState<IDrawerOptions[]>([]);

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
        setIsDrawerOptions(newDrawerOptions);
    }, []);

    return(
        <DrawerContext.Provider value={{ isDrawerOpen, isDrawerOptions, toggleDrawerOpen, SetIsDrawerOptions: handleSetDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    );
};