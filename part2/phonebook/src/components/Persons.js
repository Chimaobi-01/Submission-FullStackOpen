

export default function Persons({ filterResult, handleDelete }) {
    

    return (
        <div>
            {filterResult.map((person) => (
                <p key={person.id}>
                    {person.name}
                    {person.number} 
                    <button onClick={() => {
                        handleDelete(person.id)
                        }}>delete</button>
                </p>
            ))}
        </div>
    )
}
