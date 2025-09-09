import { TUtopiaConfig } from "./config";
import { mapToCSS } from "./mapper";

interface TAtomizeDefinition {
  atomic_prefix: string;
  css_property: string;
  type: "space" | "type" | "color";
}

const UID = "$$__$$";

function atomize(
  definitions: TAtomizeDefinition[],
  keys: {
    space: string[];
    type: string[];
    color: string[];
  },
  utopiaConfig: TUtopiaConfig,
  seperator: string = "-",
) {
  let atoms: Record<string, string> = {};
  for (let i = 0; i < definitions.length; i++) {
    const def = definitions[i];
    if (def.type === "space") {
      const map = mapToCSS(
        keys.space,
        { template: `${def.atomic_prefix}${seperator}${UID}`, id: UID },
        {
          template: `${def.css_property}: var(--${utopiaConfig.space.prefix}${utopiaConfig.space.seperator}${UID});`,
          id: UID,
        },
      );
      atoms = { ...atoms, ...map };
    } else if (def.type === "type") {
      const map = mapToCSS(
        keys.type,
        { template: `${def.atomic_prefix}${seperator}${UID}`, id: UID },
        {
          template: `${def.css_property}: var(--${utopiaConfig.type.prefix}${utopiaConfig.type.seperator}${UID});`,
          id: UID,
        },
      );
      atoms = { ...atoms, ...map };
    } else if (def.type === "color") {
      const map = mapToCSS(
        keys.color,
        { template: `${def.atomic_prefix}${seperator}${UID}`, id: UID },
        {
          template: `${def.css_property}: var(--${UID});`,
          id: UID,
        },
      );
      atoms = { ...atoms, ...map };
    }
  }
  return atoms;
}

export type { TAtomizeDefinition };
export { atomize };
