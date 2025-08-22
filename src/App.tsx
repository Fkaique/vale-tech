import './App.css'

function App() {

  return (
    <>
      <div className="conteudo">
        <nav>
            <ul className="start">
                <div className="logo">
                    <li><a href="#sectionS"><img src="images/logo-preto.png" alt=""/></a></li>
                </div>
                <div className="item-nav">
                    <li><a href="#section1"><strong>Sessão 1</strong></a></li>
                </div>
                <div className="item-nav">
                    <li><a href="#section2"><strong>Sessão 2</strong></a></li>
                </div>
            </ul>
        </nav>
        
        
        <header>
            <div className="background"></div>
            <section className="section center" id="sectionS">
                <div className="texto color-3 center">
                    <h1>Apresentation</h1>
                    <p>Slogan ou sei lá</p>
                </div>
            </section>
            <div className="sections">
                <section className="section start" id="section1">
                    <div className="imagem">
                        <img src="images/logo-roxo.png" alt=""/>
                    </div>
                    <div className="texto color-1">
                        <h1>Titulo</h1>
                        <p>Percebemos, cada vez mais, que o acompanhamento das preferências de consumo é uma das consequências de alternativas às soluções ortodoxas</p>
                        <p>Mais alguma coisa</p>
                    </div>
                </section>
    
                <section className="section end" id="section2">
                    <div className="texto color-1 end">
                        <h1 className="end">Titulo</h1>
                        <p>Acima de tudo, é fundamental ressaltar que o acompanhamento das preferências de consumo faz parte de um processo de gerenciamento das diversas correntes de pensamento.</p>
                    </div>
                    <div className="imagem">
                        <img src="images/logo-preto.png" alt=""/>
                    </div>
                </section>
            </div>
            <section className="section center" id="sectionS">
                <div className="texto color-3 center">
                    <h1>É isso ai</h1>
                    <p>Do mesmo modo, o início da atividade geral de formação de atitudes obstaculiza a apreciação da importância do processo de comunicação como um todo.</p>
                </div>
            </section>
        </header>
    </div>

    <footer className="color-3">
        <div className="footer">
            <p className="center">© 2025 - ValeTech</p>
        </div>
    </footer>
    </>
  )
}

export default App
