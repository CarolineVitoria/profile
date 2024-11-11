import './Card.css'

export default function Card({ end, desc, titulo, cami }) {
    console.log(cami)
    return (
        <>
        <div className='divcard'>
        <div className='card'>
                <img
                    className='capa'
                    src={end} alt='fotos' />
                <h3 className='titulo'>{titulo}</h3>
                <button onClick={()=>window.location.href=cami} className='botaoLer'>Acessar</button>
            </div>
            <div className='conp'>
            <p>{desc}</p>
            </div>
            
        </div>

        </>

    )

}