import { LinearProgress } from '@mui/material';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DetailsTools } from '../../shared/components';
import { VTextField } from '../../shared/forms';
import { BaseLayout } from '../../shared/layouts';
import { PedidosService } from '../../shared/services/api/pedidos/PedidosService';

interface IFormData {
    pedidoVortex: string;
    pedidoCliente: string;
    nomeCompleto: string;
    email: string;
    segmento: string;
}

export const DetalhesPedido: React.FC = () => {

    const { id = 'novo' } = useParams<'id'>();
    const navigate = useNavigate();

    const formRef = useRef<FormHandles>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState('');

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
                        console.log(result);
                    }
                });
        }
    }, [id]);

    const handleSave = (dados: IFormData) => {
        console.log(dados);
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
                <VTextField name='pedidoVortex' />
                <VTextField name='pedidoCliente' />
                <VTextField name='nomeCompleto' />
                <VTextField name='email' />
                <VTextField name='segmento' />


            </Form>


        </BaseLayout>
    );
};