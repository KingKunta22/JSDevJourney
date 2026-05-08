// import { Fragment } from 'react';

const items = [
    'Cebu',
    'Makati',
    'Metro Manila',
    'Davao',
    'Naga'
]

function ListGroup(){
    return (
        <>
            <h1 className='text-4xl font-bold'>List</h1>
            <ul className="w-64 rounded-lg border border-zinc-200 bg-white divide-y divide-zinc-200 overflow-hidden">
                {items.map(item => <li key={item}>{item}</li>)}
            </ul>
        </>
    )
}

export default ListGroup