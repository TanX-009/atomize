import { TAtomizeDefinition } from "./atomizer";
import { UtopiaSpaceConfig, UtopiaTypeConfig } from "./static/utopia";

interface TUtopiaConfig {
  space: {
    config: UtopiaSpaceConfig;
    prefix: string;
    seperator: string;
  };
  type: {
    config: UtopiaTypeConfig;
    prefix: string;
    seperator: string;
  };
}

interface TConfig {
  utopia: TUtopiaConfig;
  color: string;
  atomize: {
    seperator: string;
    definitions: TAtomizeDefinition[];
  };
  extra: {
    fl: boolean;
  };
}

const defaultConfig: TConfig = {
  utopia: {
    space: {
      config: {
        minWidth: 320,
        maxWidth: 1920,
        minSize: 18,
        maxSize: 20,
        negativeSteps: [0.1, 0.2, 0.3, 0.4, 0.5],
        positiveSteps: [1, 2, 3, 4, 6],
        customSizes: [
          "xs-m",
          "xs-l",
          "s-l",
          "s-xl",
          "m-xl",
          "m-2xl",
          "l-2xl",
          "l-3xl",
        ],
        relativeTo: "viewport-width",
      },
      seperator: "-",
      prefix: "sp",
    },
    type: {
      config: {
        minWidth: 320,
        maxWidth: 1920,
        minFontSize: 12,
        maxFontSize: 36,
        minTypeScale: 1.1,
        maxTypeScale: 1.25,
        negativeSteps: 2,
        positiveSteps: 5,
        labelStyle: "tshirt",
        relativeTo: "viewport-width",
      },
      seperator: "-",
      prefix: "st",
    },
  },
  color: "#ffff00",
  atomize: {
    seperator: "-",
    definitions: [],
  },
  extra: {
    fl: true,
  },
};

// const space = generateSpace(config.utopia.space.config);
// const type = generateType(config.utopia.type.config);
// const color = generateMD3Colors(config.color);
//
// //////////////////////
// // Example Usage    //
// //////////////////////
//
// const keys = {
//   space: Object.keys(space),
//   type: Object.keys(type),
//   color: schemeKeys,
// };
//
// const atoms = atomize(
//   config.atomize.definitions,
//   keys,
//   config.utopia,
//   config.atomize.seperator,
// );
//
// console.log(space);
// console.log(type);
// console.log(color);
// console.log(atoms);
//
export type { TUtopiaConfig, TConfig };
export { defaultConfig };
