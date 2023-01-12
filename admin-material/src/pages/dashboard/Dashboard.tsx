import { BarraFerramentas } from '../../shared/components';
import { BaseLayout } from '../../shared/layouts';



export const Dashboard = () => {
    return (
        <BaseLayout
            titulo='Dashboard'
            barraDeFerramentas={(
                <BarraFerramentas mostrarInput textoBusca={''} textoBotaoNovo={'Novo'} mostrarBotaoNovo />
            )}
        >
            testando
        </BaseLayout>
    );
};