import {
  addNewCredential,
  askForMainPassword,
  chooseCommand,
  chooseService,
} from "./utils/questions";
import { isMainPasswordValid } from "./utils/validation";
import { readCredentials, writeCredentials } from "./utils/credentials";

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
      }
      break;
    case "add":
      {
        const newCredential = await addNewCredential();
        console.log(newCredential);
        await writeCredentials(newCredential);
      }
      break;
  }
};
start();
