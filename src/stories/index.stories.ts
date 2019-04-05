import { storiesOf } from "@storybook/angular";

import { HelloworldComponent } from "../app/components/helloworld/helloworld.component";

storiesOf("HelloWorld", module).add("to Storybook", () => ({
  component: HelloworldComponent,
  props: {}
}));
