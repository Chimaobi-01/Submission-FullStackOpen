

export default function Filter({filterPersons, handleFilterPersons }) {
  return (
    <div>filter shown with <input value={filterPersons} onChange={handleFilterPersons} /></div>
  )
}
