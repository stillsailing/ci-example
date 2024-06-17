function render() {
  console.log("ci example");
  const rendered = document.createElement("div");
  rendered.innerText = "Hello World!";
  document.body.append(rendered);
}

window.addEventListener("DOMContentLoaded", render);
