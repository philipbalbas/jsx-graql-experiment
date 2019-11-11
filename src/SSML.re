module Speak = {
  [@react.component]
  let make = (~children) => {
    <> children </>;
  };
};

module P = {
  [@react.component]
  let make = (~children) => {
    <> children </>;
  };
};

module Media = {
  [@react.component]
  let make = (~children) => {
    <> children </>;
  };
};

module Par = {
  [@react.component]
  let make = (~children) => {
    <> children </>;
  };
};

module Audio = {
  [@react.component]
  let make = (~src, ~children=?) => {
    <> "Audio"->React.string </>;
  };
};