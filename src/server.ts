import dotenv from "dotenv";
import {
  addNewCredential,
  askForMainPassword,
  chooseCommand,
} from "./utils/questions";
import { isMainPasswordValid } from "./utils/validation";
import { printPassword } from './utils/messages';
// import { readCredentials, writeCredentials } from "./utils/credentials";
import CryptoJS from "crypto-js";
import { connectDatabase, disconnectDatabase } from "./utils/database";

dotenv.config();
import { deleteCredential, writeCredential, selectCredential  } from "./utils/credentials";


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
      case "delete":
      {
        const selectedCredential = await selectCredential();
        if (command === "list"){
          printPassword(selectedCredential.service);
        } else {
          const deleted = await deleteCredential(selectedCredential);
          if (deleted) {
            console.log("Deleted credential");
          } else {
            console.log("Not deleted");
          }
        }
      }
        break;
      

        // const service = await chooseService(credentialServices);
        // const selectedCredential = credentials.find(
        //   (credential) => credential.service === service
        // );

        if (selectedCredential) {
          selectedCredential.password = CryptoJS.AES.decrypt(
            selectedCredential.password,
            "DonaldDuck"
          ).toString(CryptoJS.enc.Utf8);
          console.log(selectedCredential);
       
        }
        

      }
        }
        
      
      
      break;
    
    case "add":
      {
        const newCredential = await addNewCredential();
        await writeCredential(newCredential);
        console.log(newCredential);
      }
      break;
    }
  
  await disconnectDatabase();
  };

start();
