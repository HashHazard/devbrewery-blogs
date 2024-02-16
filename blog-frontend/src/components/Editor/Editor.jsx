import "./Preview.css";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import {
  EditorProvider,
  useCurrentEditor,
  useEditor,
  EditorContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useDebugValue, useEffect, useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import CodeIcon from "@mui/icons-material/Code";
import ClearIcon from "@mui/icons-material/Clear";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FormatTextdirectionLToRIcon from "@mui/icons-material/FormatTextdirectionLToR";
import { Render } from "./Render";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="menu-bar">
      <FormatBoldIcon
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`menu-btn ${editor.isActive("bold") ? "is-active" : ""}`}
      />
      <FormatItalicIcon
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`menu-btn ${editor.isActive("italic") ? "is-active" : ""}`}
      />
      <StrikethroughSIcon
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`menu-btn ${editor.isActive("strike") ? "is-active" : ""}`}
      />
      <CodeIcon
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`menu-btn ${editor.isActive("code") ? "is-active" : ""}`}
      />

      <ClearIcon
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="menu-btn"
      />

      <ClearAllIcon
        onClick={() => editor.chain().focus().clearNodes().run()}
        className="menu-btn"
      />

      <FormatTextdirectionLToRIcon
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`menu-btn ${
          editor.isActive("paragraph") ? "is-active" : ""
        }`}
      />

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
        }
      >
        purple
      </button>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

const Editor = () => {
  const blog = `<p>Title
JavaScript Mastery: A Comprehensive Guide to Nailing Top 10 Interview Topics with Examples</p>
<p>Summary
Prepare to tackle JavaScript interviews with confidence! This blog outlines the top 10 topics that frequently appear in interviews, complete with clear explanations and real-world examples. Whether you&#39;re a seasoned developer or just starting, these insights will empower you to stand out and land your dream job.</p>
<p><strong>Introduction:</strong> Welcome to the world of JavaScript interviews! Securing a role in the competitive field of computer science requires a solid understanding of key concepts. In this blog, we&#39;ll explore the top 10 topics that often come up in JavaScript interviews, providing you with a comprehensive guide to impress your interviewers.</p>
<h3 id="1-hoisting-">1. Hoisting:</h3>
<p><strong>Explanation:</strong>
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.</p>
<p><strong>Example:</strong></p>
<pre><code class="lang-javascript"><span class="hljs-built_in">console</span>.log(x); <span class="hljs-comment">// Output: undefined</span>
<span class="hljs-keyword">var</span> x = <span class="hljs-number">5</span>;
<span class="hljs-built_in">console</span>.log(x); <span class="hljs-comment">// Output: 5</span>
</code></pre>
<p>In this example, the <code>var x</code> declaration is hoisted to the top, resulting in <code>undefined</code> when accessed before the actual assignment.</p>
<hr>
<h3 id="2-closures-">2. Closures:</h3>
<p><strong>Explanation:</strong>
Closures allow functions to access variables from their outer (enclosing) scope, even after the outer function has finished executing.</p>
<p><strong>Example:</strong></p>
<pre><code class="lang-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">outerFunction</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">let</span> outerVar = <span class="hljs-number">10</span>;

  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">innerFunction</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(outerVar);
  }

  <span class="hljs-keyword">return</span> innerFunction;
}

<span class="hljs-keyword">const</span> closureExample = outerFunction();
closureExample(); <span class="hljs-comment">// Output: 10</span>
</code></pre>
<p>Here, <code>innerFunction</code> retains access to <code>outerVar</code> even after <code>outerFunction</code> has completed.</p>
<hr>
<h3 id="3-promises-">3. Promises:</h3>
<p><strong>Explanation:</strong>
Promises represent the eventual completion or failure of an asynchronous operation and help manage asynchronous code more effectively.</p>
<p><strong>Example:</strong></p>
<pre><code class="lang-javascript"><span class="hljs-keyword">const</span> fetchData = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
  <span class="hljs-comment">// Simulating an asynchronous operation</span>
  setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    resolve(<span class="hljs-string">'Data fetched successfully!'</span>);
  }, <span class="hljs-number">2000</span>);
});

fetchData.then(<span class="hljs-function">(<span class="hljs-params">result</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(result); <span class="hljs-comment">// Output: Data fetched successfully!</span>
});
</code></pre>
<hr>
<h3 id="4-event-loop-">4. Event Loop:</h3>
<p><strong>Explanation:</strong>
The event loop is a fundamental concept in JavaScript concurrency, ensuring non-blocking behavior by continuously checking the message queue for tasks.</p>
<p><strong>Example:</strong></p>
<pre><code class="lang-javascript">setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Execute after 2 seconds'</span>);
}, <span class="hljs-number">2000</span>);

<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Not blocked by the setTimeout'</span>);
</code></pre>
<p>In this example, the second <code>console.log</code> is not blocked, showcasing the non-blocking nature of the event loop.</p>
<hr>
<h3 id="5-prototypal-inheritance-">5. Prototypal Inheritance:</h3>
<p><strong>Explanation:</strong>
JavaScript uses prototypal inheritance, where objects inherit properties and methods from other objects through prototypes.</p>
<p><strong>Example:</strong></p>
<pre><code class="lang-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Animal</span>(<span class="hljs-params">name</span>) </span>{
  <span class="hljs-keyword">this</span>.name = name;
}

Animal.prototype.sound = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Some generic sound'</span>);
};

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Dog</span>(<span class="hljs-params">name</span>) </span>{
  Animal.call(<span class="hljs-keyword">this</span>, name);
}

Dog.prototype = <span class="hljs-built_in">Object</span>.create(Animal.prototype);
Dog.prototype.constructor = Dog;

<span class="hljs-keyword">const</span> myDog = <span class="hljs-keyword">new</span> Dog(<span class="hljs-string">'Buddy'</span>);
myDog.sound(); <span class="hljs-comment">// Output: Woof!</span>
</code></pre>
<hr>
<h3 id="6-es6-features-">6. ES6 Features:</h3>
<p><strong>Explanation:</strong>
ES6 (ECMAScript 2015) introduced several new features to enhance JavaScript, including arrow functions, destructuring, and template literals.</p>
<p><strong>Examples:</strong></p>
<pre><code class="lang-javascript"><span class="hljs-comment">// Arrow Function</span>
<span class="hljs-keyword">const</span> add = <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a + b;

<span class="hljs-comment">// Destructuring</span>
<span class="hljs-keyword">const</span> person = { <span class="hljs-attr">name</span>: <span class="hljs-string">'John'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">30</span> };
<span class="hljs-keyword">const</span> { name, age } = person;

<span class="hljs-comment">// Template Literals</span>
<span class="hljs-keyword">const</span> greeting = <span class="hljs-string">\`Hello, <span class="hljs-subst">\${name}</span>! You are <span class="hljs-subst">$\{age}</span> years old.\`</span>;
</code></pre>
<hr>
<h3 id="7-async-await-">7. Async/Await:</h3>
<p><strong>Explanation:</strong>
Async/Await is a syntax introduced in ES2017 that simplifies asynchronous code by allowing the use of asynchronous functions in a more synchronous-like style.</p>
<p><strong>Example:</strong></p>
<pre><code class="lang-javascript"><span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fetchData</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">try</span> {
    <span class="hljs-keyword">const</span> response = <span class="hljs-keyword">await</span> fetch(<span class="hljs-string">'https://api.example.com/data'</span>);
    <span class="hljs-keyword">const</span> data = <span class="hljs-keyword">await</span> response.json();
    <span class="hljs-built_in">console</span>.log(data);
  } <span class="hljs-keyword">catch</span> (error) {
    <span class="hljs-built_in">console</span>.error(<span class="hljs-string">'Error fetching data:'</span>, error);
  }
}

fetchData();
</code></pre>
<hr>
<h3 id="8-scope-and-scope-chain-">8. Scope and Scope Chain:</h3>
<p><strong>Explanation:</strong>
Scope refers to the context in which variables are declared, and the scope chain determines the order in which scopes are considered when looking up a variable.</p>
<p><strong>Example:</strong></p>
<pre><code class="lang-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">outer</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">let</span> outerVar = <span class="hljs-string">'I am from outer!'</span>;

  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inner</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">let</span> innerVar = <span class="hljs-string">'I am from inner!'</span>;
    <span class="hljs-built_in">console</span>.log(innerVar); <span class="hljs-comment">// Output: I am from inner!</span>
    <span class="hljs-built_in">console</span>.log(outerVar); <span class="hljs-comment">// Output: I am from outer!</span>
  }

  inner();
}

outer();
</code></pre>
<hr>
<h3 id="9-dom-manipulation-">9. DOM Manipulation:</h3>
<p><strong>Explanation:</strong>
DOM manipulation involves interacting with the Document Object Model to dynamically update or modify the content and structure of a webpage.</p>
<p><strong>Example:</strong></p>
<pre><code class="lang-javascript">// HTML: &lt;<span class="hljs-keyword">div</span> id=<span class="hljs-string">"exampleDiv"</span>&gt;Hello, World!&lt;/<span class="hljs-keyword">div</span>&gt;

const divElement = document.getElementById(<span class="hljs-string">'exampleDiv'</span>);
divElement.innerHTML = <span class="hljs-string">'Greetings, Universe!'</span>;
</code></pre>
<hr>
<h3 id="10-memory-management-">10. Memory Management:</h3>
<p><strong>Explanation:</strong>
Memory management in JavaScript involves handling memory allocation, deallocation, garbage collection, and optimizing memory usage to prevent memory leaks.</p>
<p><strong>Example:</strong></p>
<pre><code class="lang-javascript">function createMemoryConsumption() {
  let largeData =<span class="hljs-built_in"> new </span>Array(1000000).fill('Some data');
  // After this function executes, the largeData<span class="hljs-built_in"> array </span>is no longer in use.
}

createMemoryConsumption();
// Garbage collector identifies unused memory<span class="hljs-built_in"> and </span>frees it up.
</code></pre>
<p>These topics collectively form a strong foundation for JavaScript interviews. Make sure to practice and understand each concept thoroughly to ace your upcoming interviews!</p>
`;

  const [editorContent, setEditorContent] = useState(blog);

  return (
    <>
      <div
        style={{ padding: "100px", background: "#273337", margin: "100px" }}
        className="editor"
      >
        <div>
          <input
            type="text"
            name="title"
            // onBlur={handleData}
            placeholder="title here..."
            className="title-inp"
          />
        </div>
        <EditorProvider
          slotBefore={<MenuBar />}
          extensions={extensions}
          content={editorContent}
          className="content-editor"
          onUpdate={({ editor }) => {
            // onChange(editor?.getHTML());
            setEditorContent(editor?.getHTML());
          }}
        ></EditorProvider>
        <hr />
        {/* <Render /> */}
      </div>
    </>
  );
};

export default Editor;
