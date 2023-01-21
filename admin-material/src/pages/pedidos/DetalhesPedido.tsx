import { useParams, useNavigate } from 'react-router-dom';
import { DetailsTools, SearchBar } from '../../shared/components';
import { BaseLayout } from '../../shared/layouts';

export const DetalhesPedido: React.FC = () => {

    const { id = 'novo' } = useParams<'id'>();
    const navigate = useNavigate();

    const handleSave = () => {
        console.log('Salvar');
    };

    const handleDelete = () => {
        console.log('Excluir');
    };

    return (
        <BaseLayout 
            titulo='Detalhes do Pedido'
            barraDeFerramentas={
                <DetailsTools
                    textoBotaoNovo='Novo'
                    mostrarBotaoNovo = {id !== 'novo'}
                    mostrarBotaoSalvarVoltar
                    mostrarBotaoExcluir = {id !== 'novo'}
                    
                    aoClicarEmSalvar = {handleSave}
                    aoClicarEmSalvarVoltar = {handleSave}
                    aoClicarEmExcluir = {handleDelete}
                    aoClicarEmNovo = {() => navigate('/pedidos/detalhe/novo')}
                    aoClicarEmVoltar = {() => navigate('/pedidos')}
                />
            }
        >        
            <p>Detalhes do Pedido {id}</p>
        </BaseLayout>
    );
};