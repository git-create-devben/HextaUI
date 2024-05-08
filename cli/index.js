#!/usr/bin/env node

import path from "path";
import fs from "fs";
import axios from "axios";
import inquirer from "inquirer";

const components = ["Select"];

if (process.argv[2] === "add") {
  inquirer
    .prompt([
      {
        type: "list",
        name: "component",
        message: "Which component do you want to download?",
        choices: components,
      },
    ])
    .then((answers) => {
      const url = `https://raw.githubusercontent.com/HextaStudio/HextaUI/main/cli/components/${answers.component}.js`;

      axios({
        method: "get",
        url: url,
        responseType: "stream",
      })
        .then(function (response) {
          const dir = path.join(process.cwd(), "hexta-ui", "components");
          fs.mkdirSync(dir, { recursive: true });
          const filePath = path.join(dir, `${answers.component}.js`);
          response.data.pipe(fs.createWriteStream(filePath));
          console.log(`${answers.component} component was added successfully`);
        })
        .catch(function (error) {
          console.error("Error adding component", error);
        });
    });
} else {
  console.log("Invalid command");
}
