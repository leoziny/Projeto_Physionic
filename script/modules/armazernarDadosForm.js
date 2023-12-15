
export default function pegarDados (){
    document.getElementById('formulario').addEventListener('submit', function(event){

        
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        const dados = new Dados(nome, email);

        console.log(dados)
        
        
    })
    
            function Dados (nome, email){
                this.nome = nome;
                this.email = email;
            }
    }


    
