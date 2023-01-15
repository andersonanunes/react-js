import { DetailsTools } from '../../shared/components';
import { BaseLayout } from '../../shared/layouts';

export const Dashboard = () => {
    return (
        <BaseLayout
            titulo='Dashboard'
            barraDeFerramentas={(
                <DetailsTools mostrarBotaoSalvarVoltar />
            )}
        >
            testando
        </BaseLayout>
    );
};