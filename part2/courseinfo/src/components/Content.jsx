import Part from "./Part"

const Content = ({ course }) => {
    return (
      <div>
        {
          course.map(course => <Part key={course.id} course={course} />)
        }
      </div>
    )
  }

export default Content