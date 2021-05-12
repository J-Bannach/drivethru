import {
  addNewCredential,
  askForMainPassword,
  chooseCommand,
  chooseService,
} from "./utils/questions";
import { isMainPasswordValid } from "./utils/validation";
import { printPassword } from "./utils/messages";
import { readCredentials } from "./utils/credentials";

// function start() {
const start = async () => {
  /* Solution with while */
  let mainPassword = await askForMainPassword();
  while (!(await isMainPasswordValid(mainPassword))) {
    console.log("Is invalid");
    mainPassword = await askForMainPassword();
  }
  console.log("Is valid");

  const command = await chooseCommand();

  switch (command) {
    case "list":
      {
        const credentials = await readCredentials();
        const credentialServices = credentials.map(
          (credential) => credential.service
        );
        const service = await chooseService(credentialServices);
        const selectedService = credentials.find(
          (credential) => credential.service === service
        );
        console.log(selectedService);
        printPassword(service);
      }
      break;
    case "add":
      {
        const newCredential = await addNewCredential();
        console.log(newCredential);
      }
      break;
  }
};
start();

// const selection = await listCredentialServices();

// switch (selection) {
//   case "gmail":
//     console.log("Log into Gmail");
//     break;
//   case "github":
//     console.log("Log into GitHub");
//     break;
// }

// const input = await addNewCredentials();

// switch (input) {
//   case "new":
//     console.log("Add new credentials");
//     break;
// }
