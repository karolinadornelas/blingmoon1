
            const items = [
                {
                    id: 0,
                    nome: 'pulseira',
                    img: 'pulseira.gif',
                    quantidade: 0

                },
                {
                    id: 1,
                    nome: 'brinco',
                    img: 'brinco.gif',
                    quantidade: 0
                    
                },
                {
                    id: 2,
                    nome: 'colar',
                    img:'colar.gif',
                    quantidade: 0
                    
                },
            ]
            
            inicializarLoja = () => {
                var containerProdutos = document.getElementById('produtos');
                items.map((val)=>{
                    containerProdutos.innerHTML+= `
                    
                    <div class="produto-single">
                        <img src="`+val.img+`" />
                        <p>`+val.nome+`</p>
                        <a key="`+val.id+`" href="">Adicionar ao carrinho!</a>
                    </div>
                    
                    `;
                
                })
            }
            
             inicializarLoja();

             atualizarCarrinho = () => {
                console.log(items);
             }
             
             var links = document.getElementsByTagName('a');
    
             for(var i = 0; i < links.lenght; i++){  
                links[i].addEventListener("click",function(){
                    let key = this.getAttribute('key');
                    items[key].quantidade++;
                    atualizarCarrinho();
                    return false;
                })
             }
