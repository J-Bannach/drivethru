import fs from "fs/promises";
import type { Credential } from "../types";
import { getCollection } from "./database";
import AES from "crypto-js/aes";

type DB = {
  credentials: Credential[];
};

export const readCredentials = async (): Promise<Credential[]> => {
  const response = await fs.readFile("./db.json", "utf-8");
  const data: DB = JSON.parse(response);
  return data.credentials;
};

export const writeCredentials = async (
  newCredential: Credential
): Promise<void> => {
  const encrypted = AES.encrypt(
    newCredential.password,
    "DonaldDuck"
  ).toString();
  newCredential.password = encrypted;
  await getCollection("credentials").insertOne(newCredential);
};
