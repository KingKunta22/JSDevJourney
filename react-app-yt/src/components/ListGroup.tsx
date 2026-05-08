// import { Fragment } from 'react';
import { MouseEvent } from "react";

function ListGroup() {
    function getMessage() {
    return <p>Sample Message</p>;
    }

    const items = ["Cebu", "Makati", "Metro Manila", "Davao", "Naga"];
    // Event Handler
    const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <h1 className="text-4xl font-bold">List Group</h1>
      {items.length === 0 && getMessage()}
      <ul className="w-64 rounded-lg border border-zinc-200 bg-white divide-y divide-zinc-200 overflow-hidden">
        {items.map((item) => (
          <li
            className="px-4 py-2 hover:bg-zinc-50 cursor-pointer"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
