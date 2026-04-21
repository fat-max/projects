import type { PluginSimple } from "markdown-it"
import type { RenderRule } from "markdown-it/lib/renderer.mjs"

export const TableCalculator: PluginSimple = (mdIt) => {
  console.log(mdIt.renderer.rules)
	// const proxy: RenderRule = (tokens, i, options, _env, self) =>
	// 	self.renderToken(tokens, i, options);
  //   // console.log(mdIt)
}