const Total = ({ course }) => {
    const add = (total, current) => total + current.exercises
    const total = course.reduce(add, 0)

    return (
      <strong>total of {total} excercises</strong>
    )
  }
  export default Total