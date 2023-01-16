import { useEffect, useMemo, useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, TableFooter, LinearProgress, Pagination, IconButton, Icon } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { IListagemPessoa, PessoasService } from '../../shared/services/api/pessoas/PessoasService';
import { Environment } from '../../shared/environment';
import { SearchBar } from '../../shared/components';
import { useDebounce } from '../../shared/hooks';
import { BaseLayout } from '../../shared/layouts';


export const ListagemPessoas: React.FC = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const {debounce} = useDebounce();

    const navigate = useNavigate();

    const [rows, setRows] = useState<IListagemPessoa[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]);

    const pagina = useMemo(() => {
        return Number(searchParams.get('pagina') || '1');
    }, [searchParams]);

    useEffect(() => {
    
        setIsLoading(true);
    
        debounce(() => {
            PessoasService.getAll(pagina, busca)
                .then ((result) => {
                    setIsLoading(false);
                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        console.log(result);
                        setRows(result.data);
                        setTotalCount(result.totalCount);
                    }
                });
        });
    }, [busca, pagina]);


    /**
     * callback para os botoes - metodo para apagar o registro
    */
    const handleDelete = (id: number) => {
        if (confirm('Deseja excluir o registro?')) {
            PessoasService.deleteById(id)
                .then(result => {
                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        setRows(oldRows => [
                            ...oldRows.filter(oldRow => oldRow.id !== id),
                        ]);
                        alert('registro excluído com sucesso!');
                    }
                });
        }
    };

    return (
        <BaseLayout 
            titulo="Listagem de Pessoas"
            barraDeFerramentas={
                <SearchBar
                    mostrarInput
                    textoBotaoNovo='Nova'
                    mostrarBotaoNovo
                    textoBusca={busca}
                    aoMudarTextoBusca={texto => setSearchParams({ busca: texto, pagina: '1' }, { replace: true })}
                />
            }    
        >
            <TableContainer component={Paper} variant='outlined' sx={{ margin: 1, width: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Nome Completo</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {rows.map( row => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.nomeCompleto}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => navigate(`/pessoas/detalhe/${row.id}`)}>  
                                        <Icon>edit</Icon>
                                    </IconButton>
                                    <IconButton  size='small' onClick={() => handleDelete(row.id)}>
                                        <Icon>delete</Icon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>

                    {totalCount === 0 && !isLoading && (
                        <caption>{Environment.LISTAGEM_VAZIA}</caption>
                    )}

                    <TableFooter>
                        {isLoading &&(
                            <TableRow>
                                <TableCell colSpan={3}>
                                    <LinearProgress variant='indeterminate' />
                                </TableCell>
                            </TableRow>
                        )}
                        {(totalCount > 0 && totalCount > Environment.LIMITE_LINHAS) && (
                            <TableRow>
                                <TableCell colSpan={4}>
                                    <Pagination 
                                        page={pagina} 
                                        count={Math.ceil(totalCount / Environment.LIMITE_LINHAS)} 
                                        onChange={(_, newPage) => setSearchParams({ busca, pagina: newPage.toString() }, { replace: true })}
                                    />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableFooter>
                </Table>
            </TableContainer>
        </BaseLayout>
    );
};