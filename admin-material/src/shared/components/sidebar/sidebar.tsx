import { Drawer, useTheme, Avatar, Divider, Box, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { Icon } from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useAppDrawerContext, useAppThemeContext } from '../../contexts';

interface IListItemLinkProps {
    label: string;
    icon: string;
    to: string;
    onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
    
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};


interface ISidebarProps {
    children: React.ReactNode;
}

export const Sidebar: React.FC<ISidebarProps> = ({ children }) => {
    
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen, isDrawerOptions } = useAppDrawerContext();
    const { toggleTheme } = useAppThemeContext();


    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} alt="Anderson Nunes" src="/static/images/avatar/1.jpg" />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            {isDrawerOptions.map(isDrawerOptions => (
                                <ListItemLink
                                    to={isDrawerOptions.path}
                                    key={isDrawerOptions.path} 
                                    icon={isDrawerOptions.icon}
                                    label={isDrawerOptions.label}
                                    onClick={smDown ? toggleDrawerOpen : undefined}
                                />
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <List component="nav">
                            <ListItemButton onClick={toggleTheme}>
                                <ListItemIcon>
                                    <Icon>dark_mode</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Dark Theme" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={theme.spacing(28)} >
                {children}        
            </Box>
        </>
    );
};