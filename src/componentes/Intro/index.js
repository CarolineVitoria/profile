import './Intro.css'

export default function Intro() {
    return (
        <header className='header'>
            <div className='ctexto'>
            <h1>Olá, seja bem  vindo!</h1>
            <p>
                Olá, meu nome é vitória! Sou estudante de ciência da computação do 4 período. Atualmente estudo React js, esse projeto foi feito com o mesmo.
            </p>
            </div>

            <div className='imagens'>
                <img src='/img/circulo_colorido.png' alt='circulo' className='circuloColorido' aria-hidden={true}/>

                <img className='minhaFoto' src='/img/eu_portifolio.jpg' alt='eu'></img>
            </div>
            
            
        </header>
    )
}