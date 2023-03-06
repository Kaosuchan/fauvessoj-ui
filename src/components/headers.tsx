import type { ComponentChildren } from "preact";

export const prerender = true;

export interface Props {
  children?: ComponentChildren
}

export function Header(props: Props) {
  return (
    <h1 class="text-2xl md:text-3xl lg:text-4xl mt-10 mb-6">
      { props.children }
    </h1>
  )
}

export function SubHeader(props: Props) {
  return (
    <h3 class="text-xl md:text-2xl lg:text-3xl mt-8 mb-4">
      { props.children }
    </h3>
  )
}

export function SubSubHeader(props: Props) {
  return (
    <h5 class="text-lg md:text-xl lg:text-2xl mt-4 mb-2">
      { props.children }
    </h5>
  )
}

