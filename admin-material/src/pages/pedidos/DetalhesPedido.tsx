import { Box, Grid, InputLabel, LinearProgress, MenuItem, Paper, Select, SelectChangeEvent, Typography } from '@mui/material';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DetailsTools } from '../../shared/components';
import { VTextField } from '../../shared/forms';
import { BaseLayout } from '../../shared/layouts';
import { PedidosService } from '../../shared/services/api/pedidos/PedidosService';

interface IFormData {
    loja: string;
    score: number;
    pedidoVortex: string;
    pedidoCliente: string;
    nomeCompleto: string;
    email: string;
    segmento: string;
    dataCriacao: string;
}

export const DetalhesPedido: React.FC = () => {

    const { id = 'novo' } = useParams<'id'>();
    const navigate = useNavigate();

    const formRef = useRef<FormHandles>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState('');

    const [status1, setStatus1] = useState('');
    const [status2, setStatus2] = useState('');
    const [decisao, setDecisao] = useState('');
    const [parceria, setParceria] = useState('');

    const handleChangeStatus1 = (event: SelectChangeEvent) => {
        setStatus1(event.target.value as string);
    };

    const handleChangeStatus2 = (event: SelectChangeEvent) => {
        setStatus2(event.target.value as string);
    };

    const handleChangeDecisao = (event: SelectChangeEvent) => {
        setDecisao(event.target.value as string);
    };

    const handleChangeParceria = (event: SelectChangeEvent) => {
        setParceria(event.target.value as string);
    };




    /**
     * consulta que retorna os dados para o form
     */
    useEffect(() => {
        if (id !== 'novo') {
            setIsLoading(true);
            PedidosService.getById(Number(id))
                .then ((result) => {
                    setIsLoading(false);
                    if (result instanceof Error) {
                        alert (result.message);
                        navigate ('/pedidos');
                    } else {
                        setTitle(result.pedidoCliente);
                        //console.log(result);

                        // carrega os dados no form
                        formRef.current?.setData(result);

                    }
                });
        }
    }, [id]);

    const handleSave = (dados: IFormData) => {
        //console.log(dados);
        setIsLoading(true);
        if (id === 'novo') {
            PedidosService.create(dados)
                .then((result) => {
                    setIsLoading(false);
                    if (result instanceof Error) {
                        alert (result.message);
                    } else {
                        navigate (`/pedidos/detalhe/${result}`);
                    }                    
                });
        } else {
            PedidosService.updateById(Number(id), {id: Number(id), ...dados})
                .then((result) => {
                    setIsLoading(false);
                    if (result instanceof Error) {
                        alert (result.message);
                    }                
                });             
        }
    };

    /**
     * callback para os botoes - metodo para apagar o registro
    */
    const handleDelete = (id: number) => {
        if (confirm('Deseja excluir o registro?')) {
            PedidosService.deleteById(id)
                .then(result => {
                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        alert('registro excluído com sucesso!');
                        navigate('/pedidos');
                    }
                });
        }
    };

    return (
        <BaseLayout 
            titulo={ id === 'novo' ? 'Novo Pedido' : `Detalhes do Pedido ${title}` }
            barraDeFerramentas={
                <DetailsTools
                    textoBotaoNovo='Novo'
                    mostrarBotaoNovo = {id !== 'novo'}
                    mostrarBotaoSalvarVoltar
                    mostrarBotaoExcluir = {id !== 'novo'}
                    
                    aoClicarEmSalvar = {() => formRef.current?.submitForm()}
                    aoClicarEmSalvarVoltar = {() => formRef.current?.submitForm()}
                    aoClicarEmExcluir = {() => handleDelete(Number(id))}
                    aoClicarEmNovo = {() => navigate('/pedidos/detalhe/novo')}
                    aoClicarEmVoltar = {() => navigate('/pedidos')}
                />
            }
        >
            {isLoading && (
                <LinearProgress variant='indeterminate' />
            )}        
            

            <Form ref={formRef} onSubmit={handleSave}>
                <Box margin={1} display='flex' flexDirection='column' component={Paper} variant='outlined'>
                    <Grid container direction='column' padding={2} spacing={2}>
                        <Grid item>
                            <Typography variant='h6'>Informações Gerais</Typography>
                        </Grid>
                        <Grid container direction='row' padding={2} spacing={2}>
                            <Grid item xs={12} sm={12} md={12} lg={8} xl={4}>
                                <VTextField
                                    fullWidth 
                                    name='loja' 
                                    label='Loja'
                                    placeholder='Loja' />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={2} xl={3}>
                                <VTextField 
                                    fullWidth 
                                    name='segmento'
                                    label='Segmento' 
                                    placeholder='Segmento' />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={2} xl={1}>
                                <VTextField 
                                    fullWidth 
                                    name='score'
                                    label='Score'
                                    placeholder='Score' />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={1}>
                                <VTextField 
                                    fullWidth 
                                    name='pedidoVortex'
                                    label='Pedido Vortex' 
                                    placeholder='Pedido Vortex' />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={1}>
                                <VTextField 
                                    fullWidth
                                    name='pedidoCliente'
                                    label='Pedido Cliente' 
                                    placeholder='Pedido Cliente' />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={1}>
                                <VTextField 
                                    fullWidth 
                                    name='dataPedido'
                                    label='Data Pedido'
                                    placeholder='Data Pedido' />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3} xl={1}>
                                <VTextField 
                                    fullWidth 
                                    name='sla'
                                    label='Sla'
                                    placeholder='Sla' />
                            </Grid>
                        </Grid>
                        <Grid container direction='row' paddingX={2} paddingBottom={2} spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <VTextField 
                                    fullWidth 
                                    name='nomeCompleto'
                                    label='Nome Cliente' 
                                    placeholder='Nome Cliente' />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <VTextField 
                                    fullWidth 
                                    name='email'
                                    label='Email Contato'
                                    placeholder='Email Contato' />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <VTextField 
                                    fullWidth 
                                    name='cpf'
                                    label='Cpf' 
                                    placeholder='Cpf' />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <VTextField 
                                    fullWidth 
                                    name='telefone'
                                    label='Telefone' 
                                    placeholder='Telefone' />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <VTextField 
                                    fullWidth 
                                    name='vinculo'
                                    label='Vínculo'
                                    placeholder='Vínculo entre ambos' />
                            </Grid>
                        </Grid>
                        <Grid container direction='row' paddingX={2} paddingBottom={2} spacing={2}>
                            <Grid item xs={8} sm={8} md={10} lg={10} xl={10}>
                                <VTextField 
                                    fullWidth 
                                    name='enderecoEntrega'
                                    label='Endereço Entrega' 
                                    placeholder='Endereço de Entrega' />
                            </Grid>    
                            <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
                                <VTextField 
                                    fullWidth 
                                    name='numero'
                                    label='Número' 
                                    placeholder='Número' />
                            </Grid>
                            <Grid item xs={8} sm={8} md={10} lg={10} xl={10}>
                                <VTextField 
                                    fullWidth 
                                    name='complemento'
                                    label='Complemento' 
                                    placeholder='Complemento' />
                            </Grid>
                            <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
                                <VTextField 
                                    fullWidth 
                                    name='cep'
                                    label='Cep' 
                                    placeholder='Cep' />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={5} xl={5}>
                                <VTextField 
                                    fullWidth 
                                    name='bairro'
                                    label='Bairro' 
                                    placeholder='Bairro' />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={5} xl={5}>
                                <VTextField 
                                    fullWidth 
                                    name='cidade'
                                    label='Cidade' 
                                    placeholder='Cidade' />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={2} xl={2}>
                                <VTextField 
                                    fullWidth 
                                    name='estado'
                                    label='Estado' 
                                    placeholder='Estado' />
                            </Grid>
                        </Grid>
                        <Grid container direction='row' paddingX={2} paddingBottom={2} spacing={2}>
                            <Grid item xs={12}>
                                <VTextField 
                                    fullWidth 
                                    multiline rows={6} 
                                    name='observacoes'
                                    label='Observações' 
                                    defaultValue='Observações' />
                            </Grid>    
                        </Grid>
                        <Grid container direction='row' paddingX={2} paddingBottom={2} spacing={2}>
                            <Grid item xs={6} sm={6} md={2} lg={1} xl={1}>
                                <VTextField 
                                    fullWidth 
                                    name='valorFrete'
                                    label='Valor Frete' 
                                    placeholder='Valor Frete' />
                            </Grid>
                            <Grid item xs={6} sm={6} md={2} lg={1} xl={1}>
                                <VTextField 
                                    fullWidth 
                                    name='valorItens'
                                    label='Valor' 
                                    placeholder='Valor' />
                            </Grid>
                            <Grid item xs={6} sm={6} md={2} lg={1} xl={1}>
                                <VTextField 
                                    fullWidth 
                                    name='descontoAplicado'
                                    label='Desconto Aplicado' 
                                    placeholder='Desconto Aplicado' />
                            </Grid>
                            <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                                <VTextField 
                                    fullWidth 
                                    name='formaPagamento'
                                    label='Forma de Pagamento' 
                                    placeholder='Forma de Pagamento' />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={7} xl={7}>
                                <VTextField 
                                    fullWidth 
                                    name='descricaoProduto'
                                    label='Descrição do Produto' 
                                    placeholder='Descrição do Produto' />    
                            </Grid>    
                        </Grid>                  
                    </Grid>
                </Box>
                <Box margin={1} display='flex' flexDirection='column' component={Paper} variant='outlined'>
                    <Grid container direction='column' padding={2} spacing={2}>
                        <Grid item>
                            <Typography variant='h6'>Para uso do Analista</Typography>
                        </Grid>
                        <Grid container direction='row' padding={2} paddingTop={4} spacing={2}>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                <InputLabel id="demo-simple-select-label">Status 1</InputLabel>
                                <Select
                                    fullWidth
                                    id="demo-simple-select"
                                    value={status1}
                                    onChange={handleChangeStatus1}
                                >
                                    <MenuItem value={10}>Aprovado</MenuItem>
                                    <MenuItem value={20}>Reprovado</MenuItem>
                                    <MenuItem value={30}>Pendente</MenuItem>
                                </Select>                                
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                <InputLabel id="demo-simple-select-label">Status 2</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status2}
                                    onChange={handleChangeStatus2}
                                >
                                    <MenuItem value={10}>Aprovado</MenuItem>
                                    <MenuItem value={20}>Reprovado</MenuItem>
                                    <MenuItem value={30}>Pendente</MenuItem>
                                </Select>                                
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                <InputLabel id="demo-simple-select-label">Decisão</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={decisao}
                                    onChange={handleChangeDecisao}
                                >
                                    <MenuItem value={10}>Aprovado</MenuItem>
                                    <MenuItem value={20}>Reprovado</MenuItem>
                                    <MenuItem value={30}>Pendente</MenuItem>
                                </Select>                                
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                <InputLabel id="demo-simple-select-label">Parceria Emissor</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={parceria}
                                    onChange={handleChangeParceria}
                                >
                                    <MenuItem value={10}>Sim</MenuItem>
                                    <MenuItem value={20}>Não</MenuItem>
                                </Select>                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Form>


        </BaseLayout>
    );
};