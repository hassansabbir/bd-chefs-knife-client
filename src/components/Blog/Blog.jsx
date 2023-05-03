import React from "react";
import Pdf from "react-to-pdf";
import "./Blog.css";

const ref = React.createRef();

const options = {
  orientation: "portrait",
  unit: "in",
  format: [16, 12],
};

const Blog = () => {
  return (
    <div className="App">
      <Pdf
        targetRef={ref}
        options={options}
        x={0.5}
        y={0.5}
        scale={0.8}
        filename="code-example.pdf"
      >
        {({ toPdf }) => (
          <button className="btn my-5  btn-success" onClick={toPdf}>
            Generate Pdf
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        <h1 className="text-5xl my-10">
          Some frequently asked questions and answers
        </h1>
        <div className="text-left mt-10 border rounded-2xl border-black p-10">
          <h2 className="text-4xl my-3">
            Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <hr />
          <h4 className="text-2xl my-5">
            Components are very familiar subject in react. There are various
            types of components, among them there are controlled components and
            uncontrolled components. Controlled components refers to the
            components whom are controlled by a parent component. Their behavior
            changes based on a parent component's state change so on. And
            uncontrolled components means the components which cannot be
            controlled by other components and they manage their own state
            internally.
          </h4>
        </div>
        <div className="text-left my-5 border rounded-2xl border-black p-10">
          <h2 className="text-4xl my-3">
            How to validate React props using PropTypes
          </h2>
          <hr />
          <h4 className="text-2xl my-5">
            Props and PropsTypes are important mechanisms for for passing read
            only attributes between react components. Props is the short form of
            properties. To send data from one component to another we use props.
            If a component receives the wrong type of props it can cause bugs
            and unexpected errors in your app. Since JavaScript doesn't have a
            built in type checking solution, many developers use extensions like
            TypeScript and Flow. However, react has an internal mechanism for
            props validation called PropsTypes. First we have to install
            propTypes with "npm install prop-types". then we have to "import
            PropTypes from 'prop-types' ". With that we can validate react props
            using PropTypes.
          </h4>
        </div>
        <div className="text-left my-5 border rounded-2xl border-black p-10">
          <h2 className="text-4xl my-3">
            Tell us the difference between nodejs and express js.
          </h2>
          <hr />
          <h4 className="text-2xl my-5">
            Express JS and node JS are both open source tools. Express JS
            belongs to "Microframeworks (Backend)" category of the tech stack,
            while Node JS can be primarily classified under frameworks (Full
            Stack). Express JS is a small framework that sits on top of Node JS
            web server functionality to simplify its API and add helpful new
            features. But Node Js is not a framework nor a programming language.
            Express JS have more features than Node JS. Node JS is built on
            googles V8 engine, while Express JS built on Node JS.
          </h4>
        </div>
        <div className="text-left mb-10 border rounded-2xl border-black p-10">
          <h2 className="text-4xl my-3">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <hr />
          <h4 className="text-2xl my-5">
            Folks are reusable functions. When you have component logic that
            needs to be used by multiple components, we can extract that logic
            to a custom Hook. The main reason to write a custom hook is for code
            reusability. For example, instead of writing the same code across
            multiple components that use the same common stateful logic, you can
            put that code inside a custom hook and reuse it. By using custom
            hook we can keep our components as simple as possible.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Blog;
