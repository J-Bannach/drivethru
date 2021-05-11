import inquirer from "inquirer";
import { Command, Selection } from "../types";

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

export const listCredentialServices = async (): Promise<Selection> => {
  const choices = await inquirer.prompt<{ selection: Selection }>({
    type: "list",
    name: "selection",
    message: " Please select action",
    choices: [
      { name: "Reset password", value: "reset" },
      { name: "Create new account", value: "create" },
    ],
  });
  return choices.selection;
};
