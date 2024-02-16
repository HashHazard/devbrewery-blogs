import React from "react";
import { Render } from "../Editor/Render";

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

const article = `## Summary:
Learn how to enhance user experience by implementing a theme switcher in your ReactJS application using the powerful Context API. This step-by-step guide will walk you through the process of creating a dynamic and user-friendly theme switcher, allowing your users to customize the look and feel of your app effortlessly.

---

## Introduction:

In the ever-evolving world of web development, providing a personalized user experience is crucial. One way to achieve this is by incorporating a theme switcher into your ReactJS application. In this blog post, we'll delve into the usage of React's Context API to build an elegant and efficient theme switcher that allows users to seamlessly toggle between light and dark themes.

---

## Table of Contents:

1. Understanding Context API
2. Setting Up a React App
3. Creating a Theme Context
4. Implementing the Theme Switcher
5. Applying Styles Dynamically
6. Testing and Optimizing

---

## 1. Understanding Context API:

Context API is a powerful feature in ReactJS that enables you to share values (such as themes) across the entire component tree without passing props manually at each level. This makes it an ideal choice for building features like a theme switcher.

---

## 2. Setting Up a React App:

Before we dive into the implementation, let's set up a new React application using Create React App. If you haven't installed it yet, run the following commands:

\`\`\`bash
npx create-react-app theme-switcher-app
cd theme-switcher-app
\`\`\`

---

## 3. Creating a Theme Context:

To get started with the Theme Switcher, we need to create a \`ThemeContext\`. This context will hold the current theme and provide a method to toggle between themes. Here's a simplified example:

\`\`\`jsx
// ThemeContext.js
import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
\`\`\`

---

## 4. Implementing the Theme Switcher:

Now that we have our \`ThemeContext\`, let's integrate it into our app and create a simple theme switcher button.

\`\`\`jsx
// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcherButton from './ThemeSwitcherButton';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher App</h1>
        <ThemeSwitcherButton />
        {/* Your app components go here */}
      </div>
    </ThemeProvider>
  );
};

export default App;
\`\`\`

---

## 5. Applying Styles Dynamically:

To make our theme switcher visually appealing, let's dynamically apply styles based on the selected theme. We can achieve this by using the \`ThemeContext\` in our styled components.

\`\`\`jsx
// ThemeSwitcherButton.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from './ThemeContext';

const Button = styled.button\`
  background-color: \${(props) => (props.theme === 'light' ? '#fff' : '#333')};
  color: \${(props) => (props.theme === 'light' ? '#333' : '#fff')};
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
\`;

const ThemeSwitcherButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </Button>
  );
};

export default ThemeSwitcherButton;
\`\`\`

---

## 6. Testing and Optimizing:

Once your theme switcher is implemented, it's crucial to test it thoroughly across different components of your app. Additionally, consider optimizing the performance by incorporating React.memo and useMemo hooks where necessary.

---

## Conclusion:

By leveraging React's Context API, you can create a theme switcher that not only enhances user experience but also demonstrates the flexibility and power of ReactJS. Empower your users to personalize their journey through your app by implementing this straightforward and effective feature.

Happy theming! 🌈🚀`;

const html = `<p><strong>Title: &quot;Mastering Theme Switching in ReactJS with Context API: A Comprehensive Guide&quot;</strong></p>
<p><strong>Summary:</strong>
Explore the power of React&#39;s Context API to seamlessly implement a theme switcher in your web applications. This blog will guide you through the process of creating a dynamic theme-switching functionality, enhancing the user experience and allowing for a personalized touch to your React projects. Dive into the world of context providers and consumers to effortlessly manage global state and bring your UI to life with a theme switcher.</p>
<hr>
<p><strong>Content:</strong></p>
<h3 id="introduction">Introduction</h3>
<p>In the dynamic landscape of web development, creating user-friendly and visually appealing interfaces is paramount. One effective way to enhance the user experience is by incorporating a theme switcher into your React applications. In this blog post, we&#39;ll delve into the React Context API, unlocking its potential to implement a robust and customizable theme-switching feature.</p>
<h3 id="understanding-react-context-api">Understanding React Context API</h3>
<p>The Context API is a powerful tool in React that allows components to share state without passing it explicitly through each level of the component tree. It consists of two main components: the <code>Provider</code> and the <code>Consumer</code>. The <code>Provider</code> component encapsulates the shared state, while the <code>Consumer</code> component allows consuming that state.</p>
<h3 id="setting-up-your-react-app">Setting Up Your React App</h3>
<p>Begin by creating a new React application using your preferred setup (e.g., Create React App). Once your project is set up, you can start implementing the theme switcher.</p>
<h3 id="creating-the-theme-context">Creating the Theme Context</h3>
<p>First, establish a new context to manage the theme-related state. Create a new file, let&#39;s call it <code>ThemeContext.js</code>, and define your context using the <code>createContext</code> function:</p>
<pre><code class="lang-jsx"><span class="hljs-comment">// ThemeContext.js</span>
<span class="hljs-keyword">import</span> { createContext } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;

<span class="hljs-keyword">const</span> ThemeContext = createContext();

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> ThemeContext;
</code></pre>
<h3 id="implementing-the-theme-provider">Implementing the Theme Provider</h3>
<p>Now, create a <code>ThemeProvider</code> component that will serve as the <code>Provider</code> for your theme context. This component will manage the theme state and provide it to the rest of the application:</p>
<pre><code class="lang-jsx"><span class="hljs-comment">// ThemeProvider.js</span>
<span class="hljs-keyword">import</span> React, { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> ThemeContext <span class="hljs-keyword">from</span> <span class="hljs-string">'./ThemeContext'</span>;

<span class="hljs-keyword">const</span> ThemeProvider = <span class="hljs-function">(<span class="hljs-params">{ children }</span>) =&gt;</span> {
  <span class="hljs-keyword">const</span> [theme, setTheme] = useState(<span class="hljs-string">'light'</span>);

  <span class="hljs-keyword">const</span> toggleTheme = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    setTheme(<span class="hljs-function">(<span class="hljs-params">prevTheme</span>) =&gt;</span> (prevTheme === <span class="hljs-string">'light'</span> ? <span class="hljs-string">'dark'</span> : <span class="hljs-string">'light'</span>));
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">ThemeContext.Provider</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">theme</span>, <span class="hljs-attr">toggleTheme</span> }}&gt;</span>
      {children}
    <span class="hljs-tag">&lt;/<span class="hljs-name">ThemeContext.Provider</span>&gt;</span>
  );
};

export default ThemeProvider;</span>
</code></pre>
<h3 id="consuming-the-theme-context">Consuming the Theme Context</h3>
<p>Now that you have set up the provider, you can consume the theme context in any component by using the <code>useContext</code> hook. Let&#39;s create a simple component that displays the current theme and allows the user to toggle it:</p>
<pre><code class="lang-jsx"><span class="hljs-comment">// ThemedComponent.js</span>
<span class="hljs-keyword">import</span> React, { useContext } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> ThemeContext <span class="hljs-keyword">from</span> <span class="hljs-string">'./ThemeContext'</span>;

<span class="hljs-keyword">const</span> ThemedComponent = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  <span class="hljs-keyword">const</span> { theme, toggleTheme } = useContext(ThemeContext);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">background:</span> <span class="hljs-attr">theme</span> === <span class="hljs-string">'light'</span> ? '#<span class="hljs-attr">fff</span>' <span class="hljs-attr">:</span> '#<span class="hljs-attr">333</span>', <span class="hljs-attr">color:</span> <span class="hljs-attr">theme</span> === <span class="hljs-string">'light'</span> ? '#<span class="hljs-attr">333</span>' <span class="hljs-attr">:</span> '#<span class="hljs-attr">fff</span>', <span class="hljs-attr">padding:</span> '<span class="hljs-attr">20px</span>' }}&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Current Theme: {theme}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{toggleTheme}</span>&gt;</span>Toggle Theme<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> ThemedComponent;
</code></pre>
<h3 id="integrating-the-themeprovider">Integrating the ThemeProvider</h3>
<p>Wrap your entire application or the relevant part of it with the <code>ThemeProvider</code> to make the theme context available to all components:</p>
<pre><code class="lang-jsx"><span class="hljs-comment">// App.js</span>
<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> ThemeProvider <span class="hljs-keyword">from</span> <span class="hljs-string">'./ThemeProvider'</span>;
<span class="hljs-keyword">import</span> ThemedComponent <span class="hljs-keyword">from</span> <span class="hljs-string">'./ThemedComponent'</span>;

<span class="hljs-keyword">const</span> App = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">ThemeProvider</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>React Theme Switcher<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ThemedComponent</span> /&gt;</span>
        {/* Add more components as needed */}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ThemeProvider</span>&gt;</span></span>
  );
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> App;
</code></pre>
<h3 id="conclusion">Conclusion</h3>
<p>Congratulations! You&#39;ve successfully implemented a theme switcher in your React application using the Context API. This approach allows for a clean and centralized way to manage global state, enhancing the maintainability and scalability of your projects. Experiment with different themes and styles to create a personalized and visually appealing user interface. Happy coding!</p>
`;
const Profile = () => {
  return (
    <div style={{ padding: "100px" }}>
      <Render blog={{ content: html }} />
    </div>
  );
};

export default Profile;
