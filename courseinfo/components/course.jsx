const Header = (props) => {
    return (
      <div>
        <h2>{props.header}</h2>
      </div>
    )
  }
  
  const Part = ({ part }) => {
    return (
      <div>
        <li>{part.name} {part.exercises}</li>
      </div>
    )
  }
  
  const Content = (props) => {
  
    return (
      <div>
        <ul>
          {props.content.parts.map(part =>
            <Part part={part} key={part.id} />
          )}
        </ul>
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <div>
        <p><strong>Total of {props.courses.reduce((accu, curr) => accu + curr.exercises, 0)} exercises</strong></p>
      </div>
    )
  }
  
  const Course = (props) => {
    return (
      <div>
        <Header header={props.course.name} />
        <Content content={props.course} />
        <Total courses={props.course.parts} />
      </div>
    )
  }
  
  export default Course;