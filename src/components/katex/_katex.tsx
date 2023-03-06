export const prerender = true;

import katex from "@katex/katex.mjs";
import type { KatexOptions } from "katex";
import type { ComponentChildren } from "preact";

export interface Props extends KatexOptions {
  children: string;
}

function _KatexDefaultOptions(): KatexOptions {
  return {
    displayMode: false,
    output: "html",
    throwOnError: true,
    errorColor: "#F00",
    macros: undefined,
    minRuleThickness: undefined,
    colorIsTextColor: false,
    maxSize: Infinity,
    maxExpand: 1000,
    strict: "warn",
    trust: false,
    globalGroup: false,
  };
}

export const KatexDefaultOptions: KatexOptions = _KatexDefaultOptions();

function _genConfig(
  props: Props,
  defaultConfig = _KatexDefaultOptions(),
): KatexOptions {
  let config = defaultConfig;
  for (const c in KatexDefaultOptions) {
    if (typeof props[c as keyof KatexOptions] != "undefined") {
      config[c as keyof KatexOptions] = props[c as keyof KatexOptions];
    }
  }
  return config;
}

function _fetchInnerHtml(props: Props): string {
  return (props.children as unknown as {
    props: {
      value: {
        toString: () => string
      }
    }
  }).props.value.toString();
}

export function PKatex(props: Props) {
  const config = _genConfig(props);
  const content = _fetchInnerHtml(props);
  const rendered = katex.renderToString(content, config);
  return (
    <span
      dangerouslySetInnerHTML={{__html: rendered}}
    >
    </span>
  );
}

export function PKatexDisplay(props: Props) {
  let def = _KatexDefaultOptions();
  def.displayMode = true;
  let config = _genConfig(props, def);
  const content = _fetchInnerHtml(props);
  const rendered = katex.renderToString(content, config);
  return (
    <span
      dangerouslySetInnerHTML={{__html: rendered}}
    >
    </span>
  );
}
