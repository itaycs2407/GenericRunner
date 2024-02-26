import { execSync } from "child_process";
import fs from "fs";

export const readFile = (filePath) => {
  const data = fs.readFileSync(filePath);
  const jsonData = JSON.parse(data);
  return jsonData;
};

export const runner = (command) => {
  execSync(`${command}`, {
    cwd: process.cwd(),
    stdio: "inherit",
  });
};
