import Card from '../Card';
import './Projetos.css'

export default function Projetos() {
    const fotos = [
        {url:'/img/capa1.png', descricao:'Esse projeto é um a lista de tarefas, onde cada tarefa escrita é salva, podendo ser apagada ou marcada como concluída. Sempre que voltar a página, as tarefas que não foram apagadas estarão lá.', titulo: 'To-do-list', caminho: 'https://github.com/CarolineVitoria/To-do-list'},
        {url:'/img/capa2.png', descricao: 'Formulário inspirado em The Witcher', titulo: 'the Witcher', caminho: 'https://github.com/CarolineVitoria/Form-do-The-Witcher'},
        { url: '/img/capa3.png', descricao: 'Site feito em React para criação de cards de jogadores de futebol', titulo: 'Organo jogadores', caminho: 'https://github.com/CarolineVitoria/Organo---jogadores' }
    ];
    return (
        <main className='cprojetos' id='projetos'>
            
            <h2>Meus Projetos</h2>
            <div className='a'>
                {fotos.map((item, index)=>(
                    <Card end={item.url} titulo={item.titulo} desc={item.descricao} cami={item.caminho} key={index}/>
                ))}
            </div>
        </main>
    )
}