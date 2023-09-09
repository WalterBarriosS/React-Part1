import React from 'react'
import ReactDOM from 'react-dom'

var total = 0;
const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props)=>{
  total += parseFloat(props.exercises)
  return(
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}
const Total = ()=>{
  return(
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}
const App = () => {
  return (
    <>
      <Header course="Half Stack application development"/>
      <Content part="Fundamentals of React" exercises="10" />
      <Content part="Using props to pass data" exercises="7" />
      <Content part="State of a component" exercises="14" />
      <Total/>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root')) 