import { Environment } from "../../../environment";
import { Api } from "../axios-config"


interface IListagemPessoa {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
}

interface IDetalhePessoa {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
}

type TPessoasTotalcount = {
    data: IListagemPessoa[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TPessoasTotalcount | Error> => {
    try {
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_LINHAS}&nomeCompleto_like=${filter}`
        const { data, headers } = await Api.get(urlRelativa);
        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_LINHAS),
            };
        }

        return new Error('Erro ao listar os registros');

    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || 'Erro ao listar os registros.');
    }
}

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
    try {
        const urlrelativa = `/pessoas/${id}`;
        const { data } = await Api.get(urlrelativa);
        if (data) {
            return data;
        }

        return new Error('Nenhum registro encontrado.');

    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || 'Nenhum registro encontrado.');        
    }
}

const create = async (dados: Omit<IDetalhePessoa, 'id'>): Promise<Number | Error> => {
    try {
        const urlrelativa = `/pessoas`
        const { data } = await Api.post<IDetalhePessoa>(urlrelativa, dados);
        if (data) {
            return data.id;
        }

        return new Error('Erro ao criar o registro.');

    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || 'Erro ao criar o registro.');            
    }
}

const updateById = async (id: number, dados: IDetalhePessoa): Promise<void | Error> => {
    try {
        const urlrelativa = `/pessoas/${id}`;
        await Api.put(urlrelativa, dados);
    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || 'Erro ao atualizar o registro.');            
    }
}

const deleteById = async (id: number): Promise<void | Error> => {
    try {
        const urlrelativa = `/pessoas/${id}`;
        await Api.delete(urlrelativa);        
    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || 'Erro ao excluir o registro.');            
    }
}

export const PessoasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
}