import inquirer from "inquirer";
import type { Command, Credential } from "../types";

export const askForMainPassword = async (): Promise<string> => {
  const answers = await inquirer.prompt<{ mainPassword: string }>([
    {
      type: "password",
      name: "mainPassword",
      message: "Enter main password :)",
    },
  ]);

  return answers.mainPassword;
};

export const chooseCommand = async (): Promise<Command> => {
  const answers = await inquirer.prompt<{ command: Command }>({
    type: "list",
    name: "command",
    message: "What do you want to do?",
    choices: [
      { name: "List all credentials", value: "list" },
      { name: "Add new credential", value: "add" },
    ],
  });
  return answers.command;
};

export const chooseService = async (services: string[]): Promise<string> => {
  const answers = await inquirer.prompt<{ service: string }>({
    type: "list",
    name: "service",
    message: "Please choose a service",
    choices: services,
  });
  return answers.service;
};
// export const askForMainPassword = (): Promise<string> => {
//   return inquirer
//     .prompt<{ mainPassword: string }>([
//       {
//         type: "password",
//         name: "mainPassword",
//         message: "Enter main password （⊙ｏ⊙)",
//       },
//     ])
//     .then((answers) => answers.mainPassword);
// };

// export const listCredentialServices = async (): Promise<Selection> => {
//   const choices = await inquirer.prompt<{ selection: Selection }>({
//     type: "list",
//     name: "selection",
//     message: " Please select platform",
//     choices: [
//       { name: "Gmail Login", value: "gmail" },
//       { name: "GitHub Login", value: "github" },
//     ],
//   });
//   return choices.selection;

export const addNewCredential = async (): Promise<Credential> => {
  const answers = await inquirer.prompt<Credential>([
    {
      type: "input",
      name: "service",
      message: "Please enter new credential",
    },
    {
      type: "input",
      name: "username",
      message: "Please enter user name",
    },
    {
      type: "password",
      name: "password",
      message: "Please enter password",
    },
  ]);
  return answers;
};
