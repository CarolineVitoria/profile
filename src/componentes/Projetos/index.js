import Card from '../Card';
import './Projetos.css'

export default function Projetos() {
    const fotos = [
        {url:'/img/capa1.png', descricao:'Uni — aplicativo mobile criado em um projeto de extensão. Permite que pessoas ofereçam serviços e ajudas à comunidade, como doações, cortes de cabelo e divulgação de eventos locais. Desenvolvido em React Native com js e Expo.', titulo: 'Uni', caminho: 'https://github.com/CarolineVitoria/Uni '},
        {url:'/img/capa2.png', descricao: 'App nutriAção, projeto da disciplian de desenvolvimento Mobile, participei do desencolvimento do front', titulo: 'NutriAção', caminho: 'https://github.com/KarolVSDev/AppNutriAcao '},
        { url: '/img/capa3.png', descricao: 'Site feito em React para criação de cards de jogadores de futebol', titulo: 'Organo jogadores', caminho: 'https://github.com/CarolineVitoria/Organo---jogadores' }
    ];
    return (
        <main className='cprojetos' id='projetos'>
            <div className='divh2'>
            <h2>Meus Projetos</h2>
            </div>
            
            <div className='a'>
                {fotos.map((item, index)=>(
                    <Card end={item.url} titulo={item.titulo} desc={item.descricao} cami={item.caminho} key={index}/>
                ))}
            </div>
        </main>
    )
}