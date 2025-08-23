import { UnipileClient } from "unipile-node-sdk";

const BASE_URL = process.env.UNIPILE_BASE_URL;
const ACCESS_TOKEN = process.env.UNIPILE_ACCESS_TOKEN;

if (!BASE_URL) {
  throw new Error("UNIPILE_BASE_URL environment variable is required");
}

if (!ACCESS_TOKEN) {
  throw new Error("UNIPILE_ACCESS_TOKEN environment variable is required");
}

export const client = new UnipileClient(BASE_URL, ACCESS_TOKEN);


 
