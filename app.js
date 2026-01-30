const heading = React.createElement("h1", {id:"heading"}, "Hello world React")
console.log(heading);


const headings = React.createElement("div", {className:"heading"}, [
  React.createElement("h1", {}, "I am H!"),
  React.createElement("h2", {}, "I am H2")
])

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(headings)