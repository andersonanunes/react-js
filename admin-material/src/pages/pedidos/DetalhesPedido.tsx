import { LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DetailsTools } from '../../shared/components';
import { BaseLayout } from '../../shared/layouts';
import { PedidosService } from '../../shared/services/api/pedidos/PedidosService';

export const DetalhesPedido: React.FC = () => {

    const { id = 'novo' } = useParams<'id'>();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState('');

    /**
     * consuta que retorna os dados para o form
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

    const handleSave = () => {
        console.log('Salvar');
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
                    
                    aoClicarEmSalvar = {handleSave}
                    aoClicarEmSalvarVoltar = {handleSave}
                    aoClicarEmExcluir = {() => handleDelete(Number(id))}
                    aoClicarEmNovo = {() => navigate('/pedidos/detalhe/novo')}
                    aoClicarEmVoltar = {() => navigate('/pedidos')}
                />
            }
        >
            {isLoading && (
                <LinearProgress variant='indeterminate' />
            )}        
            <p>Detalhes do Pedido {id}</p>
        </BaseLayout>
    );
};