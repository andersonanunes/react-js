import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';

interface IDetailsToolsProps {
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoCancelar?: boolean;
    mostrarBotaoExcluir?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarVoltar?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmExcluir?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarVoltar?: () => void;
}

export const DetailsTools: React.FC<IDetailsToolsProps> = ({ 
    textoBotaoNovo = 'Novo', 
    mostrarBotaoNovo = true,
    mostrarBotaoCancelar = true, 
    mostrarBotaoExcluir = true, 
    mostrarBotaoSalvar = true, 
    mostrarBotaoSalvarVoltar = false,
    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmExcluir,
    aoClicarEmSalvar,
    aoClicarEmSalvarVoltar
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
            {mostrarBotaoSalvar && (            
                <Button 
                    variant='contained' 
                    color='primary' 
                    disableElevation
                    onClick={aoClicarEmSalvar} 
                    startIcon={<Icon>save</Icon>}
                >
                    Salvar
                </Button>  
            )}

            {mostrarBotaoSalvarVoltar && (
                <Button 
                    variant='outlined' 
                    color='primary' 
                    disableElevation
                    onClick={aoClicarEmSalvarVoltar}
                    startIcon={<Icon>save</Icon>}
                >
                    Salvar e Voltar
                </Button> 
            )} 

            {mostrarBotaoExcluir && (
                <Button 
                    variant='outlined' 
                    color='primary' 
                    disableElevation
                    onClick={aoClicarEmExcluir}
                    startIcon={<Icon>delete</Icon>}
                >
                    Excluir
                </Button>
            )}  

            {mostrarBotaoNovo && (
                <Button 
                    variant='outlined' 
                    color='primary' 
                    disableElevation
                    onClick={aoClicarEmNovo}
                    startIcon={<Icon>add</Icon>}
                >
                    {textoBotaoNovo}
                </Button>
            )}           

            <Divider variant='middle' orientation='vertical' />

            {mostrarBotaoCancelar && (
                <Button 
                    variant='outlined' 
                    color='primary' 
                    disableElevation
                    onClick={aoClicarEmVoltar}
                    startIcon={<Icon>arrow_back</Icon>}
                >
                    Cancelar
                </Button>
            )}  

        </Box>
    );
};