import { Environment } from '../../../environment';
import { Api } from '../axios-config';


export interface IListagemPedidos {
    id: number;
    pedidoVortex: string;
    pedidoCliente: string;
    nomeCompleto: string;
    email: string;
    segmento: string;
    dataCriacao: string;
}

export interface IDetalhePedidos {
    id: number;
    loja: string;
    score: number;
    pedidoVortex: string;
    pedidoCliente: string;
    nomeCompleto: string;
    email: string;
    segmento: string;
    dataCriacao: string;
}

type TPedidosTotalcount = {
    data: IListagemPedidos[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TPedidosTotalcount | Error> => {
    try {
        const urlRelativa = `/pedidos?_page=${page}&_limit=${Environment.LIMITE_LINHAS}&nomeCompleto_like=${filter}`;
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
};

const getById = async (id: number): Promise<IDetalhePedidos | Error> => {
    try {
        const urlrelativa = `/pedidos/${id}`;
        const { data } = await Api.get(urlrelativa);
        if (data) {
            return data;
        }

        return new Error('Nenhum registro encontrado.');

    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || 'Nenhum registro encontrado.');        
    }
};

const create = async (dados: Omit<IDetalhePedidos, 'id'>): Promise<number | Error> => {
    try {
        const urlrelativa = '/pedidos';
        const { data } = await Api.post<IDetalhePedidos>(urlrelativa, dados);
        if (data) {
            return data.id;
        }

        return new Error('Erro ao criar o registro.');

    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || 'Erro ao criar o registro.');            
    }
};

const updateById = async (id: number, dados: IDetalhePedidos): Promise<void | Error> => {
    try {
        const urlrelativa = `/pedidos/${id}`;
        await Api.put(urlrelativa, dados);
    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || 'Erro ao atualizar o registro.');            
    }
};

const deleteById = async (id: number): Promise<void | Error> => {
    try {
        const urlrelativa = `/pedidos/${id}`;
        await Api.delete(urlrelativa);        
    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || 'Erro ao excluir o registro.');            
    }
};

export const PedidosService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
};