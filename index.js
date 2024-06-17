function render() {
  console.log("ci example");
  const rendered = document.createElement("div");
  rendered.innerText = "Hello World! and then...";
  document.body.append(rendered);
}

window.addEventListener("DOMContentLoaded", render);
