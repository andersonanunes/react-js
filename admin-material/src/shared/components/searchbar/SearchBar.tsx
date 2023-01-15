import { Box, Button, TextField, Paper, useTheme, Icon } from '@mui/material';


interface ISearchBarProps {
    textoBusca?: string;
    mostrarInput: boolean;
    aoMudarTextoBusca?: (novoTexto: string) => void;  
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void; 
}

export const SearchBar: React.FC<ISearchBarProps> = ({ 
    textoBusca = '', 
    mostrarInput = false, 
    aoMudarTextoBusca,
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo, 
    aoClicarEmNovo 
}) => {
    
    const theme = useTheme();
    
    return (
        <Box 
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
            display='flex'
            alignItems='center'
            gap={1} 
            component={Paper}
        >
            {mostrarInput && (
                <TextField 
                    size='small' 
                    placeholder='pesquisar...'
                    value={textoBusca}
                    onChange={(e) => aoMudarTextoBusca?.(e.target.value)}
                />
            )}
            <Box flex={1} display='flex' justifyContent='end'>
                {mostrarBotaoNovo && (                
                    <Button 
                        variant='contained' 
                        color='primary' 
                        disableElevation 
                        onClick={aoClicarEmNovo}
                        endIcon={<Icon>add</Icon>}
                    >
                        {textoBotaoNovo}
                    </Button>
                )}
            </Box>
        </Box>
    );
};