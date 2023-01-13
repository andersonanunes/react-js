import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from '@mui/material';

interface IDetailsToolsProps {
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoCancelar?: boolean;
    mostrarBotaoExcluir?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarVoltar?: boolean;

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoCancelarCarregando?: boolean;
    mostrarBotaoExcluirCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoSalvarVoltarCarregando?: boolean;

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

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoCancelarCarregando = false, 
    mostrarBotaoExcluirCarregando = false, 
    mostrarBotaoSalvarCarregando = false, 
    mostrarBotaoSalvarVoltarCarregando = false,

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
            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (            
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

            {mostrarBotaoSalvarCarregando && (
                <Skeleton width={180} height={60}/>
            )}

            {(mostrarBotaoSalvarVoltar && !mostrarBotaoSalvarVoltarCarregando) && (
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

            {mostrarBotaoSalvarVoltarCarregando && (
                <Skeleton width={120} height={60}/>
            )}

            {(mostrarBotaoExcluir && !mostrarBotaoExcluirCarregando) && (
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

            {mostrarBotaoExcluirCarregando && (
                <Skeleton width={120} height={60}/>
            )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (
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

            {mostrarBotaoNovoCarregando && (
                <Skeleton width={120} height={60}/>
            )}

            <Divider variant='middle' orientation='vertical' />

            {(mostrarBotaoCancelar && !mostrarBotaoCancelarCarregando) && (
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

            {mostrarBotaoCancelarCarregando && (
                <Skeleton width={120} height={60}/>
            )}

        </Box>
    );
};