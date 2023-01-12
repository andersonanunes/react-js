import { SearchBar } from '../../shared/components';
import { BaseLayout } from '../../shared/layouts';

export const Dashboard = () => {
    return (
        <BaseLayout
            titulo='Dashboard'
            barraDeFerramentas={(
                <SearchBar mostrarInput textoBusca={''} textoBotaoNovo={'Novo'} mostrarBotaoNovo />
            )}
        >
            testando
        </BaseLayout>
    );
};