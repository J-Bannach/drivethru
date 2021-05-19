import type { Credential } from "../types";
import AES from "crypto-js/aes";
import { getCredentialsCollection } from "./database";
import { chooseService } from "./questions";

export const readCredentials = async (): Promise<Credential[]> => {
  return await getCredentialsCollection().find().sort({ service: 1 }).toArray();
};

export const writeCredential = async (
  newCredential: Credential,
  mainPassword: string
): Promise<void> => {
  const encrypted = AES.encrypt(
    newCredential.password,
    mainPassword
  ).toString();
  newCredential.password = encrypted;
  await getCredentialsCollection().insertOne(newCredential);
};

export const selectCredential = async (): Promise<Credential> => {
  const credentials = await readCredentials();
  const credentialServices = credentials.map(
    (credential) => credential.service
  );
  const service = await chooseService(credentialServices);
  const selectedCredential = credentials.find(
    (credential) => credential.service === service
  );
  if (!selectedCredential) {
    throw new Error("Can not find credential");
  }
  return selectedCredential;
};

export const deleteCredential = async (service: string): Promise<boolean> => {
  const result = await getCredentialsCollection().deleteOne({
    service: service,
  });
  if (result.deletedCount === undefined) {
    return false;
  }
  return result.deletedCount > 0;
};
