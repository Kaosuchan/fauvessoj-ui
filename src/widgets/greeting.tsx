import { Component } from "preact";

export class Greeting extends Component<{
  content: string;
}> {
  constructor() {
    super();
  }
  render({ content }: {
    content: string;
  }) {
    return <div>{ content }</div>;
  }
}

