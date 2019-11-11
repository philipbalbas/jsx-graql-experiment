let tree = Enzyme.mount(<App />);

let rendered = Enzyme.Renderer.debug(tree);
Js.log(rendered);