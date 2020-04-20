// Script para cálcular preço médio de sua carteira de investimentos
// Dúvidas consulte o artigo: https://bominvest.blogspot.com/2020/04/como-calcular-preco-medio-da-minha.html
// Guilherme Ferreira

function CalcularPM(pmAnt, quantidadeAnt, taxas, quantidade, preco = 0)
{
    function CalcularPMCompra(pmAnt, quantidadeAnt, preco, quantidadeCompra, taxas)
    {
        return ((pmAnt * quantidadeAnt + preco * quantidadeCompra + taxas)/(quantidadeAnt + quantidadeCompra));
    }
    
    // Retorna 0 quando todos os papéis foram vendidos
    function CalcularPMVenda(pmAnt, quantidadeAnt, quantidadeVenda, taxas)
    {
        var deltaQ = quantidadeAnt - quantidadeVenda;
    
        if(deltaQ <= 0)
            return 0;
    
        return (pmAnt * deltaQ + taxas)/deltaQ;
    }

    if(preco > 0)
        return CalcularPMCompra(pmAnt, quantidadeAnt, preco, quantidade, taxas);

    return CalcularPMVenda(pmAnt, quantidadeAnt, quantidade, taxas);
}