// This file is a TypeScript translation of the provided Rust code for
// generating Material Design 3 color schemes from a core palette.
// It uses the same logical structure and tone values as the original code.

import {
  argbFromHex,
  CorePalette,
  hexFromArgb,
} from "@material/material-color-utilities";

// NOTE: This is a simplified implementation for demonstration.
// For a production application, it is highly recommended to use the official
// `@material/material-color-utilities` library which handles the complex
// color space conversions (HCT, ARGB) and dynamic color logic accurately.
// See: https://www.npmjs.com/package/@material/material-color-utilities

/**
 * Represents a complete color scheme with all its named color roles.
 */
interface Scheme {
  primary: number;
  primaryFixed: number;
  primaryFixedDim: number;
  onPrimary: number;
  onPrimaryFixed: number;
  onPrimaryFixedVariant: number;
  primaryContainer: number;
  onPrimaryContainer: number;
  secondary: number;
  secondaryFixed: number;
  secondaryFixedDim: number;
  onSecondary: number;
  onSecondaryFixed: number;
  onSecondaryFixedVariant: number;
  secondaryContainer: number;
  onSecondaryContainer: number;
  tertiary: number;
  tertiaryFixed: number;
  tertiaryFixedDim: number;
  onTertiary: number;
  onTertiaryFixed: number;
  onTertiaryFixedVariant: number;
  tertiaryContainer: number;
  onTertiaryContainer: number;
  error: number;
  onError: number;
  errorContainer: number;
  onErrorContainer: number;
  surface: number;
  onSurface: number;
  onSurfaceVariant: number;
  outline: number;
  outlineVariant: number;
  shadow: number;
  scrim: number;
  inverseSurface: number;
  inverseOnSurface: number;
  inversePrimary: number;
  surfaceDim: number;
  surfaceBright: number;
  surfaceContainerLowest: number;
  surfaceContainerLow: number;
  surfaceContainer: number;
  surfaceContainerHigh: number;
  surfaceContainerHighest: number;
}

export const schemeKeys = [
  "primary",
  "primaryFixed",
  "primaryFixedDim",
  "onPrimary",
  "onPrimaryFixed",
  "onPrimaryFixedVariant",
  "primaryContainer",
  "onPrimaryContainer",
  "secondary",
  "secondaryFixed",
  "secondaryFixedDim",
  "onSecondary",
  "onSecondaryFixed",
  "onSecondaryFixedVariant",
  "secondaryContainer",
  "onSecondaryContainer",
  "tertiary",
  "tertiaryFixed",
  "tertiaryFixedDim",
  "onTertiary",
  "onTertiaryFixed",
  "onTertiaryFixedVariant",
  "tertiaryContainer",
  "onTertiaryContainer",
  "error",
  "onError",
  "errorContainer",
  "onErrorContainer",
  "surface",
  "onSurface",
  "onSurfaceVariant",
  "outline",
  "outlineVariant",
  "shadow",
  "scrim",
  "inverseSurface",
  "inverseOnSurface",
  "inversePrimary",
  "surfaceDim",
  "surfaceBright",
  "surfaceContainerLowest",
  "surfaceContainerLow",
  "surfaceContainer",
  "surfaceContainerHigh",
  "surfaceContainerHighest",
];

/**
 * Generates a light color scheme from a core palette.
 * @param core The CorePalette to derive the scheme from.
 * @returns A Scheme object for a light theme.
 */
function lightFromCorePalette(core: CorePalette): Scheme {
  return {
    primary: core.a1.tone(40),
    primaryFixed: core.a1.tone(90),
    primaryFixedDim: core.a1.tone(80),
    onPrimary: core.a1.tone(100),
    onPrimaryFixed: core.a1.tone(10),
    onPrimaryFixedVariant: core.a1.tone(30),
    primaryContainer: core.a1.tone(90),
    onPrimaryContainer: core.a1.tone(10),
    secondary: core.a2.tone(40),
    secondaryFixed: core.a2.tone(90),
    secondaryFixedDim: core.a2.tone(80),
    onSecondary: core.a2.tone(100),
    onSecondaryFixed: core.a2.tone(10),
    onSecondaryFixedVariant: core.a2.tone(30),
    secondaryContainer: core.a2.tone(90),
    onSecondaryContainer: core.a2.tone(10),
    tertiary: core.a3.tone(40),
    tertiaryFixed: core.a3.tone(90),
    tertiaryFixedDim: core.a3.tone(80),
    onTertiary: core.a3.tone(100),
    onTertiaryFixed: core.a3.tone(10),
    onTertiaryFixedVariant: core.a3.tone(30),
    tertiaryContainer: core.a3.tone(90),
    onTertiaryContainer: core.a3.tone(10),
    error: core.error.tone(40),
    onError: core.error.tone(100),
    errorContainer: core.error.tone(90),
    onErrorContainer: core.error.tone(10),
    surface: core.n1.tone(98),
    onSurface: core.n1.tone(10),
    onSurfaceVariant: core.n2.tone(30),
    outline: core.n2.tone(50),
    outlineVariant: core.n2.tone(80),
    shadow: core.n1.tone(0),
    scrim: core.n1.tone(0),
    inverseSurface: core.n1.tone(20),
    inverseOnSurface: core.n1.tone(95),
    inversePrimary: core.a1.tone(80),
    surfaceDim: core.n1.tone(87),
    surfaceBright: core.n1.tone(98),
    surfaceContainerLowest: core.n1.tone(100),
    surfaceContainerLow: core.n1.tone(96),
    surfaceContainer: core.n1.tone(94),
    surfaceContainerHigh: core.n1.tone(92),
    surfaceContainerHighest: core.n1.tone(90),
  };
}

/**
 * Generates a dark color scheme from a core palette.
 * @param core The CorePalette to derive the scheme from.
 * @returns A Scheme object for a dark theme.
 */
function darkFromCorePalette(core: CorePalette): Scheme {
  return {
    primary: core.a1.tone(80),
    primaryFixed: core.a1.tone(90),
    primaryFixedDim: core.a1.tone(80),
    onPrimary: core.a1.tone(20),
    onPrimaryFixed: core.a1.tone(10),
    onPrimaryFixedVariant: core.a1.tone(30),
    primaryContainer: core.a1.tone(30),
    onPrimaryContainer: core.a1.tone(90),
    secondary: core.a2.tone(80),
    secondaryFixed: core.a2.tone(90),
    secondaryFixedDim: core.a2.tone(80),
    onSecondary: core.a2.tone(20),
    onSecondaryFixed: core.a2.tone(10),
    onSecondaryFixedVariant: core.a2.tone(30),
    secondaryContainer: core.a2.tone(30),
    onSecondaryContainer: core.a2.tone(90),
    tertiary: core.a3.tone(80),
    tertiaryFixed: core.a3.tone(90),
    tertiaryFixedDim: core.a3.tone(80),
    onTertiary: core.a3.tone(20),
    onTertiaryFixed: core.a3.tone(10),
    onTertiaryFixedVariant: core.a3.tone(30),
    tertiaryContainer: core.a3.tone(30),
    onTertiaryContainer: core.a3.tone(90),
    error: core.error.tone(80),
    onError: core.error.tone(20),
    errorContainer: core.error.tone(30),
    onErrorContainer: core.error.tone(80),
    surface: core.n1.tone(6),
    onSurface: core.n1.tone(90),
    onSurfaceVariant: core.n2.tone(80),
    outline: core.n2.tone(60),
    outlineVariant: core.n2.tone(30),
    shadow: core.n1.tone(0),
    scrim: core.n1.tone(0),
    inverseSurface: core.n1.tone(90),
    inverseOnSurface: core.n1.tone(20),
    inversePrimary: core.a1.tone(40),
    surfaceDim: core.n1.tone(6),
    surfaceBright: core.n1.tone(24),
    surfaceContainerLowest: core.n1.tone(4),
    surfaceContainerLow: core.n1.tone(10),
    surfaceContainer: core.n1.tone(12),
    surfaceContainerHigh: core.n1.tone(17),
    surfaceContainerHighest: core.n1.tone(22),
  };
}

/**
 * Generates a pure dark color scheme from a core palette.
 * @param core The CorePalette to derive the scheme from.
 * @returns A Scheme object for a pure dark (black) theme.
 */
function pureDarkFromCorePalette(core: CorePalette): Scheme {
  return {
    primary: core.a1.tone(80),
    primaryFixed: core.a1.tone(90),
    primaryFixedDim: core.a1.tone(80),
    onPrimary: core.a1.tone(20),
    onPrimaryFixed: core.a1.tone(10),
    onPrimaryFixedVariant: core.a1.tone(30),
    primaryContainer: core.a1.tone(30),
    onPrimaryContainer: core.a1.tone(90),
    secondary: core.a2.tone(80),
    secondaryFixed: core.a2.tone(90),
    secondaryFixedDim: core.a2.tone(80),
    onSecondary: core.a2.tone(20),
    onSecondaryFixed: core.a2.tone(10),
    onSecondaryFixedVariant: core.a2.tone(30),
    secondaryContainer: core.a2.tone(30),
    onSecondaryContainer: core.a2.tone(90),
    tertiary: core.a3.tone(80),
    tertiaryFixed: core.a3.tone(90),
    tertiaryFixedDim: core.a3.tone(80),
    onTertiary: core.a3.tone(20),
    onTertiaryFixed: core.a3.tone(10),
    onTertiaryFixedVariant: core.a3.tone(30),
    tertiaryContainer: core.a3.tone(30),
    onTertiaryContainer: core.a3.tone(90),
    error: core.error.tone(80),
    onError: core.error.tone(20),
    errorContainer: core.error.tone(30),
    onErrorContainer: core.error.tone(80),
    surface: core.n1.tone(0),
    onSurface: core.n1.tone(90),
    onSurfaceVariant: core.n2.tone(80),
    outline: core.n2.tone(60),
    outlineVariant: core.n2.tone(30),
    shadow: core.n1.tone(0),
    scrim: core.n1.tone(0),
    inverseSurface: core.n1.tone(90),
    inverseOnSurface: core.n1.tone(20),
    inversePrimary: core.a1.tone(40),
    surfaceDim: core.n1.tone(87),
    surfaceBright: core.n1.tone(98),
    surfaceContainerLowest: core.n1.tone(100),
    surfaceContainerLow: core.n1.tone(96),
    surfaceContainer: core.n1.tone(94),
    surfaceContainerHigh: core.n1.tone(92),
    surfaceContainerHighest: core.n1.tone(90),
  };
}

// Helper to convert ARGB Scheme to hex
function schemeToHex(scheme: Scheme): Record<string, string> {
  const hexScheme: Record<string, string> = {};
  for (const key in scheme) {
    if (Object.prototype.hasOwnProperty.call(scheme, key)) {
      const value = scheme[key as keyof Scheme];
      hexScheme[key] = hexFromArgb(value);
    }
  }
  return hexScheme;
}

/**
 * Generates all three schemes (light, dark, pureDark) in hex from a single source color.
 * @param colorHex Source color in hex format (e.g., "#4285f4").
 * @returns An object with keys 'light', 'dark', 'pureDark', each containing hex values.
 */
export function generateMD3Colors(
  colorHex: string,
): Record<string, Record<string, string>> {
  const core = CorePalette.of(argbFromHex(colorHex));
  const schemes: Record<string, Scheme> = {
    light: lightFromCorePalette(core),
    dark: darkFromCorePalette(core),
    // pureDark: pureDarkFromCorePalette(core),
  };
  return Object.fromEntries(
    Object.entries(schemes).map(([name, scheme]) => [
      name,
      schemeToHex(scheme),
    ]),
  );
}
