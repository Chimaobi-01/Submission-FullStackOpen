

const Part = ({ course }) => {
  const { name, exercises } = course
    return (
      <p>{name} {exercises} </p>
    )
  }

  export default Part