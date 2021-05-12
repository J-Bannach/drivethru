import {
  askForMainPassword,
  chooseCommand,
  listCredentialServices,
} from "./utils/questions";
import { isMainPasswordValid } from "./utils/validation";

// function start() {
const start = async () => {
  /* Solution with while */
  let mainPassword = await askForMainPassword();
  while (!isMainPasswordValid(mainPassword)) {
    console.log("Is invalid");
    mainPassword = await askForMainPassword();
  }
  console.log("Is valid");

  const command = await chooseCommand();

  switch (command) {
    case "list":
      console.log("List Case");
      break;
    case "add":
      console.log("Add Case");
      break;
  }

  const selection = await listCredentialServices();

  switch (selection) {
    case "gmail":
      console.log("Log into Gmail");
      break;
    case "github":
      console.log("Log into GitHub");
      break;
  }

  // const input = await addNewCredentials();

  // switch (input) {
  //   case "new":
  //     console.log("Add new credentials");
  //     break;
  // }
};
start();

/* Solution with recursion */
//   const mainPassword = await askForMainPassword();
//   if (!isMainPasswordValid(mainPassword)) {
//     console.log('Is invalid');
//     start(); // Recursion
//   } else {
//     console.log('Is valid');
//   }
/* ToDo */
// askForCommand();
