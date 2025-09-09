import {
  calculateSpaceScale,
  calculateTypeScale,
  UtopiaSpaceConfig,
  UtopiaTypeConfig,
} from "./static/utopia";

export const generateSpace = (
  config: UtopiaSpaceConfig,
): Record<string, string> => {
  const scale = calculateSpaceScale(config);

  const result: Record<string, string> = {};

  // Base sizes
  scale.sizes.forEach((size) => {
    result[size.label] = size.clamp;
  });

  // One-up pairs
  scale.oneUpPairs.forEach((pair) => {
    result[pair.label] = pair.clamp;
  });

  // Custom pairs
  scale.customPairs.forEach((pair) => {
    result[pair.label] = pair.clamp;
  });

  return result;
};

export const generateType = (
  config: UtopiaTypeConfig,
): Record<string, string> => {
  const steps = calculateTypeScale(config);

  const result: Record<string, string> = {};

  steps.forEach((step) => {
    result[step.label] = step.clamp;
  });

  return result;
};
