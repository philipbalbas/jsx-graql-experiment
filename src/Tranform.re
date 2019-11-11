open SSML;

type style =
  | BackgroundSound;

let transformBackgroundSound = (~children, ~value) => {
  <Media> 
    <Par> 
      <Audio src=value /> 
      <Speak> children </Speak> 
    </Par> 
  </Media>;
};

let getTransform = (~key) => {
  switch (key) {
  | BackgroundSound => transformBackgroundSound
  };
};