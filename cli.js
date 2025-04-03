#!/usr/bin/env node

import { execSync } from "child_process";
import { program } from "commander";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";

const COMPONENTS_REPO = "https://github.com/mahmoud661/packtest.git";

program
  .version("1.0.0")
  .command("add <component>")
  .description("Add a component to your project")
  .action(async (component) => {
    try {
      const targetPath = path.join(process.cwd(), "components", component);

      if (fs.existsSync(targetPath)) {
        console.log(chalk.yellow(`Component ${component} already exists!`));
        process.exit(1);
      }

      console.log(chalk.blue(`📦 Downloading ${component}...`));

      // Create components directory if it doesn't exist
      fs.ensureDirSync(path.join(process.cwd(), "components"));

      // Fetch the component from GitHub
      execSync(`npx degit ${COMPONENTS_REPO}/components/${component} ${targetPath}`, {
        stdio: "inherit",
      });

      console.log(chalk.green(`✨ Component ${component} installed successfully!`));
    } catch (error) {
      console.error(chalk.red(`❌ Failed to install ${component}: ${error.message}`));
      process.exit(1);
    }
  });

program.parse(process.argv);