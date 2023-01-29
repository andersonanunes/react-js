import { Box, Grid, InputLabel, LinearProgress, MenuItem, Paper, Select, SelectChangeEvent } from '@mui/material';
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

    const [status, setStatus] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
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
                        <Grid container direction='row' padding={2} spacing={2}>
                            <Grid item xs={6}>
                                <VTextField 
                                    fullWidth 
                                    name='loja' 
                                    placeholder='Loja' />
                            </Grid>
                            <Grid item xs={1}>
                                <VTextField 
                                    fullWidth 
                                    name='segmento' 
                                    placeholder='Segmento' />
                            </Grid>
                            <Grid item xs={1}>
                                <VTextField 
                                    fullWidth 
                                    name='score'
                                    placeholder='Score' />
                            </Grid>
                            <Grid item xs={1}>
                                <VTextField 
                                    fullWidth 
                                    name='pedidoVortex' 
                                    placeholder='Pedido Vortex' />
                            </Grid>
                            <Grid item xs={1}>
                                <VTextField 
                                    fullWidth 
                                    name='pedidoCliente' 
                                    placeholder='Pedido Cliente' />
                            </Grid>
                            <Grid item xs={1}>
                                <VTextField 
                                    fullWidth 
                                    name='dataPedido' 
                                    placeholder='Data Pedido' />
                            </Grid>
                            <Grid item xs={1}>
                                <VTextField 
                                    fullWidth 
                                    name='sla' 
                                    placeholder='Sla' />
                            </Grid>
                        </Grid>
                        <Grid container direction='row' paddingX={2} paddingBottom={2} spacing={2}>
                            <Grid item xs={6}>
                                <VTextField 
                                    fullWidth 
                                    name='nomeCompleto' 
                                    placeholder='Nome Cliente' />
                            </Grid>
                            <Grid item xs={6}>
                                <VTextField 
                                    fullWidth 
                                    name='email'
                                    placeholder='Email Contato' />
                            </Grid>
                            <Grid item xs={4}>
                                <VTextField 
                                    fullWidth 
                                    name='cpf' 
                                    placeholder='Cpf' />
                            </Grid>
                            <Grid item xs={4}>
                                <VTextField 
                                    fullWidth 
                                    name='telefone' 
                                    placeholder='Telefone' />
                            </Grid>
                            <Grid item xs={4}>
                                <VTextField 
                                    fullWidth 
                                    name='vinculo' 
                                    placeholder='Vínculo entre ambos' />
                            </Grid>
                        </Grid>
                        <Grid container direction='row' paddingX={2} paddingBottom={2} spacing={2}>
                            <Grid item xs={10}>
                                <VTextField 
                                    fullWidth 
                                    name='enderecoEntrega' 
                                    placeholder='Endereço de Entrega' />
                            </Grid>    
                            <Grid item xs={2}>
                                <VTextField 
                                    fullWidth 
                                    name='numero' 
                                    placeholder='Número' />
                            </Grid>
                            <Grid item xs={10}>
                                <VTextField 
                                    fullWidth 
                                    name='complemento' 
                                    placeholder='Complemento' />
                            </Grid>
                            <Grid item xs={2}>
                                <VTextField 
                                    fullWidth 
                                    name='cep' 
                                    placeholder='Cep' />
                            </Grid>
                            <Grid item xs={6}>
                                <VTextField 
                                    fullWidth 
                                    name='bairro' 
                                    placeholder='Bairro' />
                            </Grid>
                            <Grid item xs={4}>
                                <VTextField 
                                    fullWidth 
                                    name='cidade' 
                                    placeholder='Cidade' />
                            </Grid>
                            <Grid item xs={2}>
                                <VTextField 
                                    fullWidth 
                                    name='estado' 
                                    placeholder='Estado' />
                            </Grid>
                        </Grid>
                        <Grid container direction='row' paddingX={2} paddingBottom={2} spacing={2}>
                            <Grid item xs={12}>
                                <VTextField 
                                    fullWidth 
                                    multiline rows={8} 
                                    name='observacoes' 
                                    defaultValue='Observações' />
                            </Grid>    
                        </Grid>
                        <Grid container direction='row' paddingX={2} paddingBottom={2} spacing={2}>
                            <Grid item xs={2}>
                                <VTextField 
                                    fullWidth 
                                    name='valorFrete' 
                                    placeholder='Valor Frete' />
                            </Grid>
                            <Grid item xs={2}>
                                <VTextField 
                                    fullWidth 
                                    name='valor' 
                                    placeholder='Valor' />
                            </Grid>
                            <Grid item xs={2}>
                                <VTextField 
                                    fullWidth 
                                    name='descontoAplicado' 
                                    placeholder='Desconto Aplicado' />
                            </Grid>
                            <Grid item xs={2}>
                                <VTextField 
                                    fullWidth 
                                    name='formaPagamento' 
                                    placeholder='Forma de Pagamento' />
                            </Grid>
                            <Grid item xs={4}>
                                <VTextField 
                                    fullWidth 
                                    name='descricaoProduto' 
                                    placeholder='Descrição do Produto' />    
                            </Grid>    
                        </Grid>                  
                    </Grid>
                </Box>
                <Box margin={1} display='flex' flexDirection='column' component={Paper} variant='outlined'>
                    <Grid container direction='column' padding={2} spacing={2}>
                        <Grid container direction='row' padding={2} spacing={2}>
                            <Grid item xs={3}>
                                <InputLabel id="demo-simple-select-label">Status 1</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Aprovado</MenuItem>
                                    <MenuItem value={20}>Reprovado</MenuItem>
                                    <MenuItem value={30}>Pendente</MenuItem>
                                </Select>                                
                            </Grid>
                            <Grid item xs={3}>
                                <InputLabel id="demo-simple-select-label">Status 2</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Aprovado</MenuItem>
                                    <MenuItem value={20}>Reprovado</MenuItem>
                                    <MenuItem value={30}>Pendente</MenuItem>
                                </Select>                                
                            </Grid>
                            <Grid item xs={3}>
                                <InputLabel id="demo-simple-select-label">Decisão</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Aprovado</MenuItem>
                                    <MenuItem value={20}>Reprovado</MenuItem>
                                    <MenuItem value={30}>Pendente</MenuItem>
                                </Select>                                
                            </Grid>
                            <Grid item xs={3}>
                                <InputLabel id="demo-simple-select-label">Parceria Emissor</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    label="Age"
                                    onChange={handleChange}
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