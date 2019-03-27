import { addDecorator, configure } from "@storybook/react";
// import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

// automatically import all files ending in *.story.tsx
const req = require.context("../src", true, /.story.tsx$/);

function loadStories() {
  addDecorator(withKnobs());
  // addDecorator(
  //   withInfo({
  // styles: {
  //   header: {
  //     h1: {
  //       marginRight: "20px",
  //       fontSize: "25px",
  //       display: "inline"
  //     },
  //     body: {
  //       paddingTop: 0,
  //       paddingBottom: 0
  //     },
  //     h2: {
  //       display: "inline",
  //       color: "#999"
  //     }
  //   },
  //   infoBody: {
  //     backgroundColor: "#eee",
  //     padding: "0px 5px",
  //     lineHeight: "2"
  //   }
  // },
  //     inline: true,
  //     source: false
  //   })
  // );
  req.keys().forEach(req);
}

configure(loadStories, module);
