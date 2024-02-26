import { readFile, runner } from "./helper.js";

const { commands } = readFile("config.json");

for (const command of commands) {
  runner(command);
}
