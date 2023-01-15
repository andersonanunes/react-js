import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../../shared/components';
import { BaseLayout } from '../../shared/layouts';
import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';


export const ListagemPessoas: React.FC = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]);

    useEffect(() => {
        PessoasService.getAll(1, busca)
            .then ((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                } else {
                    console.log(result);
                }
            });
    }, [busca]);

    return (
        <BaseLayout 
            titulo="Listagem de Pessoas"
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