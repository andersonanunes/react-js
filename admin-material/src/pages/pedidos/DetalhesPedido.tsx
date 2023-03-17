import { Box, Grid, InputLabel, LinearProgress, MenuItem, Paper, Select, Typography } from '@mui/material';
import { Form } from '@unform/web';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DetailsTools } from '../../shared/components';
import { useVForm, VTextField } from '../../shared/forms';
import { BaseLayout } from '../../shared/layouts';
import { PedidosService } from '../../shared/services/api/pedidos/PedidosService';
import * as yup from 'yup';

interface IFormData {
    loja: string;
    segmento: string;
    score: number;
    pedidoVortex: number;
    pedidoCliente: number;
    dataPedido: string;
    sla: number;
    nomeCompleto: string;
    email: string;
    cpf: string;
    telefone: string;
    vinculo: string;
    enderecoEntrega: string;
    numero: number;
    complemento: string;
    cep: string;
    bairro: string;
    cidade: string;
    estado: string;
    observacoes: string;
    valorFrete: number;
    valorItens: number;
    descontoAplicado: number;
    formaPagamento: string;
    descricaoProduto: string;
    status1: string;
    status2: string;
    decisao: string;
    parceriaEmissor: string;
    dataCriacao: string;
    dataAtualizacao: string;

}

const validateFormSchema = yup.object().shape({
    loja: yup.string(),
    segmento: yup.string().required(),
    score: yup.number().required().positive().integer(),
    pedidoVortex: yup.number().required().positive().integer(),
    pedidoCliente: yup.number().required().positive().integer(),
    dataPedido: yup.string(),
    sla: yup.number().required().positive().integer(),
    nomeCompleto: yup.string().required(),
    email: yup.string().required().email(),
    cpf: yup.string().required().min(11),
    telefone: yup.string().required(),
    vinculo: yup.string().required(), 
    enderecoEntrega: yup.string().required(),
    numero: yup.number().required().positive().integer(),
    complemento: yup.string(),
    cep: yup.string().required(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
    estado: yup.string().required(),
    observacoes: yup.string(),
    valorFrete: yup.number().required().positive().integer(),
    valorItens: yup.number().required().positive().integer(),
    descontoAplicado: yup.number().positive().integer(),
    formaPagamento: yup.string().required(),
    descricaoProduto: yup.string().required(),
    status1: yup.string().required(),
    status2: yup.string().required(),
    decisao: yup.string().required(),
    parceriaEmissor: yup.string().required(),
    dataCriacao: yup.string().required(),
    dataAtualizacao: yup.string().required(),
});

export const DetalhesPedido: React.FC = () => {

    const { id = 'novo' } = useParams<'id'>();
    const navigate = useNavigate();

    const { formRef, save, saveAndClose, isSaveAndClose, clearForm } = useVForm();

    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState('');

    /**
     * eventos dos select box
     */
    const [selectStatus1, setSelectStatus1] = useState('');
    const listStatus1 = [
        {id: 1, name: 'Aprovado'},
        {id: 2, name: 'Reprovado'},
        {id: 3, name: 'Pendente'},
    ];
    
    const [selectStatus2, setSelectStatus2] = useState('');
    const listStatus2 = [
        {id: 1, name: 'Aprovado'},
        {id: 2, name: 'Reprovado'},
        {id: 3, name: 'Pendente'},
    ];

    const [selectDecisao, setSelectDecisao] = useState('');
    const listDecisao = [
        {id: 1, name: 'Aprovado'},
        {id: 2, name: 'Reprovado'},
        {id: 3, name: 'Pendente'},
    ];
    
    const [selectParceria, setSelectParceria] = useState('');
    const listParceria = [
        {id: 1, name: 'Sim'},
        {id: 2, name: 'Não'},
    ];

    /**
     * estados do form
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
                        setTitle(String(result.pedidoCliente));
                        setSelectStatus1(String(result.status1));
                        setSelectStatus2(String(result.status2));
                        setSelectDecisao(String(result.decisao));
                        setSelectParceria(String(result.parceriaEmissor));
                        //console.log(result);

                        // carrega os dados no form
                        formRef.current?.setData(result);

                    }
                });
        } else {
            clearForm();
        }
    }, [id]);

    /**
     * callback para os botoes - método insert e update
     * @param dados 
     */
    const handleSave = (dados: IFormData) => {

        // validacao dos dados
        validateFormSchema
            .validate(dados, { abortEarly: false })
            .then((dadosValidos) => {
                console.log(dados);

                setIsLoading(true);

                if (id === 'novo') {
                    PedidosService
                        .create(dadosValidos as IFormData)
                        .then((result) => {
                            setIsLoading(false);
                            if (result instanceof Error) {
                                alert (result.message);
                            } else {
                                if (isSaveAndClose()) {
                                    navigate('/pedidos');
                                } else {
                                    console.log(result);
                                    navigate (`/pedidos/detalhe/${result}`);
                                }
                            }                    
                        });
                } else {
                    PedidosService
                        .updateById(Number(id), {id: Number(id), ...dadosValidos as IFormData})
                        .then((result) => {
                            setIsLoading(false);
                            if (result instanceof Error) {
                                alert (result.message);
                            } else {
                                console.log(result);
                                if (isSaveAndClose()) {
                                    navigate('/pedidos');
                                }
                            }          
                        });             
                }
            })
            .catch((error: yup.ValidationError) => {
                console.log(error);
            });
    };

    /**
     * callback para os botoes - metodo delete
     * @param id 
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
                    
                    aoClicarEmSalvar = {save}
                    aoClicarEmSalvarVoltar = {saveAndClose}
                    aoClicarEmExcluir = {() => handleDelete(Number(id))}
                    aoClicarEmNovo = {() => navigate('/pedidos/detalhe/novo')}
                    aoClicarEmVoltar = {() => navigate('/pedidos')}
                />
            }
        >

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
                                <InputLabel id="status1">Status 1</InputLabel>
                                <Select
                                    fullWidth
                                    id="status1"
                                    name={'status1'}
                                    value={selectStatus1}
                                    onChange={e => setSelectStatus1(e.target.value)}
                                >
                                    {listStatus1.map((item, _index) => (
                                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>    
                                    ))}
                                </Select>                                
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                <InputLabel id="status2">Status 2</InputLabel>
                                <Select
                                    fullWidth
                                    name={'status2'}
                                    value={selectStatus2}
                                    onChange={e => setSelectStatus2(e.target.value)}
                                >
                                    {listStatus2.map((item, _index) => (
                                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                    ))}
                                </Select>                                
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                <InputLabel id="decisao">Decisão</InputLabel>
                                <Select
                                    fullWidth
                                    id="decisao"
                                    name="decisao"
                                    value={selectDecisao}
                                    onChange={e => setSelectDecisao(e.target.value)}
                                >
                                    {listDecisao.map((item, _index) => (
                                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                    ))}
                                </Select>                                
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                <InputLabel id="parceria">Parceria Emissor</InputLabel>
                                <Select
                                    fullWidth
                                    id="parceria"
                                    name="parceria"
                                    value={selectParceria}
                                    onChange={e => setSelectParceria(e.target.value)}
                                >
                                    {listParceria.map((item, _index) => (
                                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                    ))}
                                </Select>                                
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                <VTextField 
                                    fullWidth 
                                    name='dataCriacao'
                                    label='Data Criação' 
                                    InputProps={{
                                        readOnly: true,
                                    }} />                                 
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                <VTextField 
                                    fullWidth 
                                    name='dataAtualizacao'
                                    label='Data Atualização' 
                                    InputProps={{
                                        readOnly: true,
                                    }} />                                 
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Form>
            
            {isLoading && (
                <LinearProgress variant='indeterminate' />
            )}     

        </BaseLayout>
    );
};