import { Typography, useTheme, IconButton, Icon, useMediaQuery } from '@mui/material/';
import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { useAppDrawerContext } from '../contexts';

interface IBaseLayoutProps {
    children: React.ReactNode;
    titulo: string;
    barraDeFerramentas?: ReactNode;
}

export const BaseLayout: React.FC<IBaseLayoutProps> = ({ children, titulo, barraDeFerramentas }) => {
    
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const { toggleDrawerOpen } = useAppDrawerContext();
    
    return (
        <Box width="100%" height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} display="flex" alignItems="center" gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}
                <Typography variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                    {titulo}
                </Typography>
            </Box>
            
            {barraDeFerramentas && (
                <Box>
                    {barraDeFerramentas}
                </Box>
            )}

            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    );
};