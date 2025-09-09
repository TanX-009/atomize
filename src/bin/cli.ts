#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { TConfig } from "../config";
import { generateCSSFromConfig } from "../generator";

function showUsage() {
  console.log(`
Usage: atomize <config.json> <output.css>

Examples:
  atomize testconfig.json styles/atomized.css
`);
}

async function run() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    showUsage();
    process.exit(1);
  }

  const [configPath, outputPath] = args;

  // read config
  let userConfig: Partial<TConfig> = {};
  try {
    const configRaw = fs.readFileSync(path.resolve(configPath), "utf-8");
    userConfig = JSON.parse(configRaw);
  } catch (err) {
    console.error("❌ Failed to read config:", err);
    process.exit(1);
  }

  // generate CSS
  try {
    const css = generateCSSFromConfig(userConfig);

    // ensure folder exists
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    fs.writeFileSync(outputPath, css, "utf-8");
    console.log(`✅ CSS generated at ${outputPath}`);
  } catch (err) {
    console.error("❌ Failed to generate CSS:", err);
    process.exit(1);
  }
}

run();
