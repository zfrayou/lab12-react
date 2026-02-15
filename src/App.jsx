import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const courseTitle = "Advanced Web Development";
function App() {
   
const studentName = "Nejia Zeineb";
const student = {
  name: "Rayen",
  age: 20,
  track: "Web Development"
};
function sayHello() {
   return `Hello ${studentName}, welcome back!`;
}
  return (
    <div>
      <h1>Zeineb's First React Component</h1>
      <p>{studentName}</p>
      <p>{courseTitle}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>

      <label htmlFor="nameInput">Enter your name:</label>
      <input type="text" id="nameInput" />

<p>Name: {student.name}</p>
<p>Age: {student.age}</p>
<p>Track: {student.track}</p>

<p>{sayHello()}</p>


    </div>
  )
}

export default App
// Why must React components start with a capital letter?
// Because React treats lowercase names as HTML elements.
// Capitalized names tell React that it is a custom component.

// What error do you get if you return two sibling elements?
// You get an error saying:
// "Adjacent JSX elements must be wrapped in an enclosing tag."
// React requires one parent element.

// What happens if you remove {} around the variable?
// If we remove {}, JSX treats the variable name as plain text.
// It will display the word "studentName" instead of its value.

// Can JSX read JavaScript directly without {}?
// No. JSX can only evaluate JavaScript expressions inside {}.
// Without {}, it is just normal text.

// Why is this variable still accessible inside the component?
// Because of JavaScript scope (lexical scope).
// Variables defined outside the component but inside the same file
// are accessible inside functions in that file.

// When might this be a bad idea in a real application?
// It can be a bad idea if the value needs to change dynamically.
// Variables outside the component are not reactive and do not trigger re-renders.
// In real applications, we usually use state or props instead.

// What type of expression is allowed inside {}?
// Any valid JavaScript expression that returns a value.
// For example: variables, numbers, string operations,
// function calls, or conditional expressions.
// Statements like if, for, or while are not allowed inside {}.

// Why does React use htmlFor instead of for?
// React uses htmlFor instead of for
// because "for" is a reserved keyword in JavaScript.
// JSX replaces it with htmlFor to avoid conflict.

// Can React render an object directly?
// No. React cannot render a whole object directly.
// It can only render strings, numbers, JSX elements,
// or arrays of renderable items.


// Why does {student} cause an error?
// Because "student" is a JavaScript object.
// React does not know how to display a plain object in the UI.
// This causes the error: "Objects are not valid as a React child."

// DEBUGGING 
//Console:
//Uncaught Error: Objects are not valid as a React child (found: object with keys {name, age, track}). If you meant to render a collection of children, use an array instead.

// What’s the difference between {sayHello} and {sayHello()}?
// {sayHello} refers to the function itself.
// {sayHello()} calls the function and renders its returned value.

// Step 8 – Reflection

// One thing I understand well in this lab:
// I understand the difference between a React component (like App)
// and a normal JavaScript function (like sayHello).
// a component can access its variables.

// One thing that is still confusing:
// It is still a bit confusing when a function should be placed
// inside the component versus outside, especially regarding scope
// and re-render behavior.
//how scope works and why functions inside

// One mistake I made and fixed:
// One mistake I made and fixed:
// I tried moving sayHello outside the component while it
// depended on studentName, which caused a scope issue.
// I fixed it by either keeping the function inside the component
// or passing studentName as a parameter.