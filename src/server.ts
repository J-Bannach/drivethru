import dotenv from "dotenv";
import {
  addNewCredential,
  askForMainPassword,
  chooseCommand,
  chooseService,
} from "./utils/questions";
import { isMainPasswordValid } from "./utils/validation";
import { readCredentials, writeCredentials } from "./utils/credentials";
import CryptoJS from "crypto-js";
import { connectDatabase, disconnectDatabase } from "./utils/database";

dotenv.config();

// function start() {
const start = async () => {
  if (process.env.MONGO_URL === undefined) {
    throw new Error("Missing env MONGO_URL");
  }
  await connectDatabase(process.env.MONGO_URL);

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

        if (selectedService) {
          const decrypted = CryptoJS.AES.decrypt(
            selectedService.password,
            "DonaldDuck"
          );
          console.log(
            `*** Your password for ${
              selectedService.service
            } is ${decrypted.toString(CryptoJS.enc.Utf8)}***`
          );
        }
      }

      break;
    case "add":
      {
        const newCredential = await addNewCredential();
        await writeCredentials(newCredential);
      }
      break;
  }
  await disconnectDatabase();
};

start();
