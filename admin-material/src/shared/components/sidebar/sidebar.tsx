import { Drawer, useTheme, Avatar, Divider, Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Icon } from '@mui/material';





interface ISidebarProps {
    children: React.ReactNode;
}

export const Sidebar: React.FC<ISidebarProps> = ({ children }) => {
    
    const theme = useTheme();
    
    return (
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} alt="Anderson Nunes" src="/static/images/avatar/1.jpg" />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>analytics</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Loren Ipsum" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>analytics</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Loren Ipsum" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>analytics</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Loren Ipsum" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>analytics</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Loren Ipsum" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>analytics</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Loren Ipsum" />
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