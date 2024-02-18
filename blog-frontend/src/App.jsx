import { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import BlogList from "./components/Blog/BlogList";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import MyBlogs from "./components/MyBlogs/MyBlogs";
// import WriteBlog from "./components/OtherPages/WriteBlog";
import OtherAuthors from "./components/OtherPages/OtherAuthors";
// import Profile from "./components/OtherPages/Profile";
import NotFound from "./components/NotFound";
import BlogPage from "./components/Blog/BlogPage";
import Editor from "./components/Editor/Editor";
import Post from "./components/Blog/Post";
import Signup from "./components/Signup/Signup";
import { CookiesProvider } from "react-cookie";
import WriteBlogs from "./components/MyBlogs/WriteBlogs";

export const ArticlesContext = createContext(undefined);

const blog = `### Introduction 
Welcome to the world of JavaScript interviews! Securing a role in the competitive field of computer science requires a solid understanding of key concepts. In this blog, we'll explore the top 10 topics that often come up in JavaScript interviews, providing you with a comprehensive guide to impress your interviewers.

### 1. Hoisting:

**Explanation:**
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.

**Example:**
\`\`\`javascript
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
\`\`\`
In this example, the \`var x\` declaration is hoisted to the top, resulting in \`undefined\` when accessed before the actual assignment.

---

### 2. Closures:

**Explanation:**
Closures allow functions to access variables from their outer (enclosing) scope, even after the outer function has finished executing.

**Example:**
\`\`\`javascript
function outerFunction() {
  let outerVar = 10;

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: 10
\`\`\`
Here, \`innerFunction\` retains access to \`outerVar\` even after \`outerFunction\` has completed.

---

### 3. Promises:

**Explanation:**
Promises represent the eventual completion or failure of an asynchronous operation and help manage asynchronous code more effectively.

**Example:**
\`\`\`javascript
const fetchData = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    resolve('Data fetched successfully!');
  }, 2000);
});

fetchData.then((result) => {
  console.log(result); // Output: Data fetched successfully!
});
\`\`\`

---

### 4. Event Loop:

**Explanation:**
The event loop is a fundamental concept in JavaScript concurrency, ensuring non-blocking behavior by continuously checking the message queue for tasks.

**Example:**
\`\`\`javascript
setTimeout(() => {
  console.log('Execute after 2 seconds');
}, 2000);

console.log('Not blocked by the setTimeout');
\`\`\`
In this example, the second \`console.log\` is not blocked, showcasing the non-blocking nature of the event loop.

---

### 5. Prototypal Inheritance:

**Explanation:**
JavaScript uses prototypal inheritance, where objects inherit properties and methods from other objects through prototypes.

**Example:**
\`\`\`javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.sound = function() {
  console.log('Some generic sound');
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const myDog = new Dog('Buddy');
myDog.sound(); // Output: Woof!
\`\`\`

---

### 6. ES6 Features:

**Explanation:**
ES6 (ECMAScript 2015) introduced several new features to enhance JavaScript, including arrow functions, destructuring, and template literals.

**Examples:**
\`\`\`javascript
// Arrow Function
const add = (a, b) => a + b;

// Destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;

// Template Literals
const greeting = \`Hello, \${name}! You are \${age} years old.\`;
\`\`\`

---

### 7. Async/Await:

**Explanation:**
Async/Await is a syntax introduced in ES2017 that simplifies asynchronous code by allowing the use of asynchronous functions in a more synchronous-like style.

**Example:**
\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
\`\`\`

---

### 8. Scope and Scope Chain:

**Explanation:**
Scope refers to the context in which variables are declared, and the scope chain determines the order in which scopes are considered when looking up a variable.

**Example:**
\`\`\`javascript
function outer() {
  let outerVar = 'I am from outer!';

  function inner() {
    let innerVar = 'I am from inner!';
    console.log(innerVar); // Output: I am from inner!
    console.log(outerVar); // Output: I am from outer!
  }

  inner();
}

outer();
\`\`\`

---

### 9. DOM Manipulation:

**Explanation:**
DOM manipulation involves interacting with the Document Object Model to dynamically update or modify the content and structure of a webpage.

**Example:**
\`\`\`javascript
// HTML: <div id="exampleDiv">Hello, World!</div>

const divElement = document.getElementById('exampleDiv');
divElement.innerHTML = 'Greetings, Universe!';
\`\`\`

---

### 10. Memory Management:

**Explanation:**
Memory management in JavaScript involves handling memory allocation, deallocation, garbage collection, and optimizing memory usage to prevent memory leaks.

**Example:**
\`\`\`javascript
function createMemoryConsumption() {
  let largeData = new Array(1000000).fill('Some data');
  // After this function executes, the largeData array is no longer in use.
}

createMemoryConsumption();
// Garbage collector identifies unused memory and frees it up.
\`\`\`
`;
function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Token c009638bf4040876402fdb802ca4027ab0823988",
      },
    })
      .then((res) => res.json())
      .then((res) => setArticles(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <CookiesProvider>
        <ArticlesContext.Provider value={articles}>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Navbar />}> */}
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<Post />} />
            {/* <Route path="/myblogs" element={<BlogPage />} /> */}
            <Route path="/myblogs" element={<MyBlogs />} />
            <Route path="/writeblog" element={<WriteBlogs />} />
            <Route path="/writeblog/:id" element={<WriteBlogs />} />
            {/* <Route path="/authors" element={<OtherAuthors />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
            {/* </Route> */}
          </Routes>
          {/* <Navbar />
      <BlogList /> */}
        </ArticlesContext.Provider>
      </CookiesProvider>
    </div>
  );
}

export default App;
