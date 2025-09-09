import { generateMD3Colors } from "./md3";
import { generateSpace, generateType } from "./utopia";
import { atomize } from "./atomizer";
import { defaultConfig, TConfig } from "./config";
import { flUtils } from "./custom/fl";

export function generateCSSFromConfig(config: Partial<TConfig>): string {
  const conf: TConfig = { ...defaultConfig, ...config };

  const space = generateSpace(conf.utopia.space.config);
  const type = generateType(conf.utopia.type.config);
  const colors = generateMD3Colors(conf.color);

  const keys = {
    space: Object.keys(space),
    type: Object.keys(type),
    color: Object.keys(colors.light), // all scheme keys
  };

  const atoms = atomize(
    conf.atomize.definitions,
    keys,
    conf.utopia,
    conf.atomize.seperator,
  );

  // --- Generate CSS Variables ---
  const rootVars = Object.entries(space)
    .map(
      ([k, v]) =>
        `  --${conf.utopia.space.prefix}${conf.utopia.space.seperator}${k}: ${v};`,
    )
    .concat(
      Object.entries(type).map(
        ([k, v]) =>
          `  --${conf.utopia.type.prefix}${conf.utopia.type.seperator}${k}: ${v};`,
      ),
    )
    .join("\n");

  const lightVars = Object.entries(colors.light)
    .map(([k, v]) => `  --${k}: ${v};`)
    .join("\n");

  const darkVars = Object.entries(colors.dark)
    .map(([k, v]) => `  --${k}: ${v};`)
    .join("\n");

  // --- Generate Atomic Classes ---
  const atomRules = Object.entries(atoms)
    .map(([k, v]) => `.${k} { ${v} }`)
    .join("\n");

  let extra = "";
  if (conf.extra.fl) extra += flUtils;

  // --- Final CSS ---
  return `/* Auto-generated Material Theme */
:root {
${rootVars}
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
${darkVars}
  }
}
[data-theme="dark"] {
${darkVars}
}

/* Light theme */
@media (prefers-color-scheme: light) {
  :root {
${lightVars}
  }
}
[data-theme="light"] {
${lightVars}
}

/* Atomic classes */
${atomRules}

/* Extra */
${extra}
`;
}
