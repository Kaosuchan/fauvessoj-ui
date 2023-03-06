import { Component } from "preact";

export interface Props {
  src: string;
}

export class Background extends Component<Props> {
  render(props: Props) {
    let { src } = props;
    return (
      <div
        class={["absolute", "w-full", "h-full", "-z-50", "overflow-hidden"]
          .join(" ")}
      >
        <div
          class={[
            "absolute",
            "left-0",
            "-top-[5px]",
            "w-full",
            "h-[calc(100%+10px)]",
            "bg-cover",
            "brightness-[40%]",
            "grayscale-[10%]",
            "blur-[2.5px]",
          ].join(" ")}
         style={`background-image: url(${encodeURI(src) })`}>
        </div>
      </div>
    );
  }
}
