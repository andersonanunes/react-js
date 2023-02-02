import { FormHandles } from '@unform/core';
import { useCallback, useRef } from 'react';

export const useVForm = () => {

    const formRef = useRef<FormHandles>(null);
    const isSavingAndClose = useRef(false);
    const isSavingAndNew = useRef(false);

    const handleSave = useCallback(() => {
        isSavingAndClose.current = false;
        isSavingAndNew.current = false;
        formRef.current?.submitForm();
    }, []);

    const handleSaveAndNew = useCallback(() => {
        isSavingAndClose.current = false;
        isSavingAndNew.current = true;
        formRef.current?.submitForm();
    }, []);

    const handleSaveAndClose = useCallback(() => {
        isSavingAndClose.current = true;
        isSavingAndNew.current = false;
        formRef.current?.submitForm();
    }, []);

    const handleIsSaveAndNew = useCallback(() => {
        return isSavingAndNew.current;
    }, []);

    const handleIsSaveAndClose = useCallback(() => {
        return isSavingAndClose.current;
    }, []);

    const handleClearForm = useCallback(() => {
        formRef.current?.setData({
            loja: '',
            segmento: '',
            score: '',
            pedidoVortex: '',
            pedidoCliente: '',
            dataPedido: '',
            sla: '',
            nomeCompleto: '',
            email: '',
            cpf: '',
            telefone: '',
            vinculo: '',
            enderecoEntrega: '',
            numero: '',
            complemento: '',
            cep: '',
            bairro: '',
            cidade: '',
            estado: '',
            observacoes: '',
            valorFrete: '',
            valorItens: '',
            descontoAplicado: '',
            formaPagamento: '',
            descricaoProduto: '',
            status1: '',
            status2: '',
            decisao: '',
            parceriaEmissor: '',
            dataCriacao: '',
            dataAtualizacao: ''                           
        });        
    }, []);

    return {
        formRef,
        save: handleSave,
        saveAndNew: handleSaveAndNew,
        saveAndClose: handleSaveAndClose,
        isSaveAndNew: handleIsSaveAndNew,
        isSaveAndClose: handleIsSaveAndClose,
        clearForm: handleClearForm  
    };
};