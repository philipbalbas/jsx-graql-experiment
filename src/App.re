open SSML;
open Custom;

[@bs.module "../dom.js"] external dom: unit = "default";

[@react.component]
let make = () =>
  <Speak>
    <P>
      <Span className="nice-bg">
        "How are you doing this morning?"->React.string
      </Span>
    </P>
  </Speak>;