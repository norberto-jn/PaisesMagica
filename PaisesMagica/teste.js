class App extends React.Component{
    constructor(){
        super()
        this.state={
            controle:0,
            botaoAlterar:'Apresentar',
            botaoEscolha:"Esconder",
            opcao:'',
            resultado:"Nao foi setado",
            imagem1:"0000.png",
            imagem2:"0000.png",
            imagem3:"0000.png",
            imagem4:"0000.png",
            imagem5:"0000.png",
            imagem6:"0000.png",
            imagem7:"0000.png",
            imagem8:"0000.png",
            imagem9:"0000.png",           
            QuadroEscolha:'Esconder',
            ApresentarEscolhido:'Esconder',
            TodosPaises:'Apresentar',
            progresso:'progresso-0'           
        }
    }
     
    Alterar=()=>{        
        var n=this.state.controle
        n++      
        this.setState({controle:n})         

        if(n>=6){         
            this.setState({
                controle:0,
                progresso:'progresso-0',
                ApresentarEscolhido:'Esconder',
                QuadroEscolha:'Esconder',
                opcao:'',
                resultado:"",
                TodosPaises:'Apresentar'
            })
        }

        if(n==5){                      
            this.setState({                   
                progresso:'progresso-100',           
                ApresentarEscolhido:'Apresentar',
                botaoAlterar:'Apresentar',
                botaoEscolha:'Esconder',
                QuadroEscolha:'Esconder'                     
            })
        }
        
        if(n==4){           
            this.setState({
                imagem1:'0001.png',
                imagem2:'0011.png',
                imagem3:'0101.png',
                imagem4:'0111.png',
                imagem5:'1001.png',
                imagem6:'1011.png',
                imagem7:'1101.png',
                imagem8:'1111.png',
                imagem9:'0000.png',
                progresso:'progresso-100'                                
            })
        }

        if(n==3){            
            this.setState({
                imagem1:'0010.png',
                imagem2:'0011.png',
                imagem3:'0110.png',
                imagem4:'0111.png',
                imagem5:'1010.png',
                imagem6:'1011.png',
                imagem7:'1111.png',
                imagem8:'1110.png',
                imagem9:'0000.png',
                progresso:'progresso-75'
            })
        }

        if(n==2){          
            this.setState({
                imagem1:'0100.png',
                imagem2:'0101.png',
                imagem3:'0110.png',
                imagem4:'0111.png',
                imagem5:'1100.png',
                imagem6:'1101.png',
                imagem7:'1110.png',
                imagem8:'1111.png',
                imagem9:'0000.png',
                progresso:'progresso-50'
            })
        }

        if(n==1){            
            this.setState({
                imagem1:'1000.png',
                imagem2:'1001.png',
                imagem3:'1010.png',
                imagem4:'1011.png',
                imagem5:'1100.png',
                imagem6:'1101.png',
                imagem7:'1110.png',
                imagem8:'1111.png',
                imagem9:'0000.png',
                QuadroEscolha:'Apresentar',
                botaoEscolha:"Apresentar",
                TodosPaises:'Esconder',
                botaoAlterar:'Esconder',
                progresso:'progresso-25'                
            })
        }
    }
    
    teste=(event)=>{                 
        
        var n=this.state.opcao+event.target.value        
        this.setState({
            opcao:n,
            resultado:n
        }) 
        this.Alterar()
    }

    render(){ 
        const estilo='progress-bar progress-bar-striped bg-success '+ this.state.progresso
        return(
            <div>
                <div className="list-group painel menu"> 

                    <button type="button" className={`btn btn-secondary alterar ${this.state.botaoAlterar}`} onClick={this.Alterar}>
                        <svg className="bi bi-caret-right" width="10rem" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 000-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 001.659.753z" clip-rule="evenodd"/>
                    </svg>
                    </button>
                                                     
                    <button type="button" value='1' className={`btn btn-success ${this.state.botaoEscolha}`} onClick={this.teste}>SIM</button>                    
                    <button type="button" value='0' className={`btn btn-danger espace ${this.state.botaoEscolha}`} onClick={this.teste}>NAO</button>
                    <div className="progress margem">
                        <div className={`${estilo}`}  role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                </div>
                <div className="grupo">
                    <Quadro 
                        imagem1={this.state.imagem1} 
                        imagem2={this.state.imagem2}
                        imagem3={this.state.imagem3} 
                        imagem4={this.state.imagem4}
                        imagem5={this.state.imagem5}
                        imagem6={this.state.imagem6}
                        imagem7={this.state.imagem7}
                        imagem8={this.state.imagem8}
                        imagem9={this.state.imagem9} 
                        status={this.state.QuadroEscolha}              
                                        
                    />                
                    <PaisEscolhido imagemFinal={this.state.resultado} status={this.state.ApresentarEscolhido}/> 
                    <TodosPaises status={this.state.TodosPaises}/>                                                
                </div>               
            </div>
        )
    }
}

//-----------------------------//---------------------// 

class TodosPaises extends React.Component{
    render(){
        const imagens=[
            '0001.png',
            '0010.png',
            '0011.png',
            '0100.png',
            '0101.png',
            '0110.png',
            '0111.png',
            '1000.png',
            '1001.png',
            '1010.png',
            '1011.png',
            '1100.png',
            '1101.png',
            '1110.png',
            '1111.png'
        ]

        const listImagem=imagens.map((imagem,index)=>(<img src={imagem} key={index} className='img-lista-total'/>))
        return(
            <div className={this.props.status}>
                {listImagem}
            </div>
        )
    }
}


//-----------------------------//---------------------// 

class Quadro extends React.Component{   

    render(){
        const imagem=[
            this.props.imagem1,
            this.props.imagem2,
            this.props.imagem3,
            this.props.imagem4,                      
            this.props.imagem5,                      
            this.props.imagem6,                      
            this.props.imagem7,                      
            this.props.imagem8,                      
            this.props.imagem9,                      
        ]

        const listaimage=imagem.map((imagem,index)=>(<img src={imagem} key={index} className='img-lista'/>))
        return(
            
                <div className={this.props.status}>
                    {listaimage}
                </div>              
            
        )
    }
}

//-----------------------------//---------------------// 

class PaisEscolhido extends React.Component{
    render(){
        return(
            <div className={this.props.status}>
                <h1>Pais Escolhido</h1>
                <img src={this.props.imagemFinal+".png"} className='pais-final'/>
                <br/>                               
            </div>
        )
    }
}

const root=document.getElementById('root');
ReactDOM.render(<App/>,root)



            
           
