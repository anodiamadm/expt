import { useLoaderData } from 'react-router-dom'

const CareerDetails = () => {
    const career = useLoaderData()

    return (
        <div className='career-details'>
            <h2>Career Details for { career.title }</h2>
            <p>Starting Salary : { career.salary }</p>
            <p>Location : { career.location }</p>
            <div className='details'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit nam amet vitae sequi nihil autem excepturi cupiditate. Explicabo amet enim omnis, ea autem eos quis dolorem cum repudiandae! Maiores.
            </div>
        </div>
    )
}

export default CareerDetails

export const careerDetailsLoader = async({params}) => {
    const { id } = params
    const res = await fetch('http://localhost:4000/careers/' + id)

    if(!res.ok){
        throw Error('Could not find that career')
    }
    return res.json()
}
