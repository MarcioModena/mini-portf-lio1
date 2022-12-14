/* 
   OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada 
   pelo usuário e esconder o conteúdo da aba anterior
PASSOS:
1 - pegar os elementos que representam as abas no HTML
2 - identificar o clique no elemento aba
3 - quando o usuario clicar, desmarcar a aba selecionada
4 - marcar a aba clicada como selecionado
5 - esconder o conteúdo anterior
6 - mostrar conteúd da aba selecionada
*/

// passo 1 - guardar as abas em uma const
const abas = document.querySelectorAll(".aba")


abas.forEach(aba => {
    //passo 2 - pegar evento de clique
    aba.addEventListener("click", function() {

        //se a aba já estiver selecionada retorne
        if(aba.classList.contains("selecionado")){
            return
        }
        //chama as funções 
        selecionarAba(aba)
        mostrarInformacoesAba(aba)
    })
})

function selecionarAba(aba){
    //passo 3 - desmarcar aba
    const abaSelecionada = document.querySelector(".aba.selecionado")
    abaSelecionada.classList.remove("selecionado")

    //passo 4 - selecionar aba clicada
    aba.classList.add("selecionado")
}

function mostrarInformacoesAba(aba){
     //passo 5 - esconder conteudo anterior
     const informacaoSelecionada = document.querySelector(".informacao.selecionado")
     informacaoSelecionada.classList.remove("selecionado")

     //passo 6 - mostrar o conteudo da aba
     const idElementoInformacaoAba = `informacao-${aba.id}`

     const informacaoMostrada = document.getElementById(idElementoInformacaoAba)
     informacaoMostrada.classList.add("selecionado")
}