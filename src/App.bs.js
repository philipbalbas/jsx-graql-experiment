// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var DomJs = require("../dom.js");
var SSML$ReactHooksTemplate = require("./SSML.bs.js");
var Custom$ReactHooksTemplate = require("./Custom.bs.js");

function App(Props) {
  return React.createElement(SSML$ReactHooksTemplate.Speak[/* make */0], {
              children: React.createElement(SSML$ReactHooksTemplate.P[/* make */0], {
                    children: React.createElement(Custom$ReactHooksTemplate.Span[/* make */0], {
                          className: "nice-bg",
                          children: "How are you doing this morning?"
                        })
                  })
            });
}

var dom = /* () */0;

var make = App;

exports.dom = dom;
exports.make = make;
/*  Not a pure module */
