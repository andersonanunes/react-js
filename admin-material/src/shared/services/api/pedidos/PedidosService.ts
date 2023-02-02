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
    segmento: string;
    score: number;
    pedidoVortex: number;
    pedidoCliente: number;
    dataPedido: string;
    sla: number;
    nomeCompleto: string;
    email: string;
    cpf: string;
    telefone: string;
    vinculo: string;
    enderecoEntrega: string;
    numero: number;
    complemento: string;
    cep: string;
    bairro: string;
    cidade: string;
    estado: string;
    observacoes: string;
    valorFrete: number;
    valorItens: number;
    descontoAplicado: number;
    formaPagamento: string;
    descricaoProduto: string;
    status1: string;
    status2: string;
    decisao: string;
    parceriaEmissor: string;
    dataCriacao: string;
    dataAtualizacao: string;
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