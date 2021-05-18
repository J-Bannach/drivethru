import type { Credential } from "../types";
import AES from "crypto-js/aes";
import { getCredentialsCollection } from "./database";

export const readCredentials = async (): Promise<Credential[]> => {
  return await getCredentialsCollection().find().sort({ service: 1 }).toArray();
};

export const writeCredentials = async (
  newCredential: Credential
): Promise<void> => {
  const encrypted = AES.encrypt(
    newCredential.password,
    "DonaldDuck"
  ).toString();
  newCredential.password = encrypted;
  await getCredentialsCollection().insertOne(newCredential);
};
