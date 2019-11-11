// type style = Js.

module Div = {
  [@react.component]
  let make = () => ();
};

module Span = {
  [@react.component]
  let make = (~className: string=?, ~style: string=?, ~children) => {
    <> children </>;
  };
};