// import { Fragment } from 'react';

function ListGroup(){
    return (
        <>
            <h1 className='text-4xl font-bold'>List</h1>
            <ul className="w-64 rounded-lg border border-zinc-200 bg-white divide-y divide-zinc-200 overflow-hidden">
                <li className="px-4 py-2 hover:bg-zinc-50 cursor-pointer">Item 1</li>
                <li className="px-4 py-2 hover:bg-zinc-50 cursor-pointer">Item 2</li>
                <li className="px-4 py-2 hover:bg-zinc-50 cursor-pointer">Item 3</li>
                <li className="px-4 py-2 hover:bg-zinc-50 cursor-pointer">Item 4</li>
            </ul>
        </>
    )
}

export default ListGroup