import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../../shared/components';
import { BaseLayout } from '../../shared/layouts';


export const ListagemCidades: React.FC = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]);


    return (
        <BaseLayout 
            titulo="Listagem de Cidades"
            barraDeFerramentas={
                <SearchBar
                    mostrarInput
                    textoBotaoNovo='Nova'
                    mostrarBotaoNovo
                    textoBusca={busca}
                    aoMudarTextoBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
                />
            }    
        >

        </BaseLayout>
        
    );
};