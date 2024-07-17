import { PublicKey, clusterApiUrl } from "@solana/web3.js";

export const DEFAULT_SOL_ADDRESS: PublicKey = new PublicKey(
  process.env.RECIPIENT ?? "CBrBERuUPkk5kqm7GVWCLPMEmiWHfXJZHVPwRheyAXjz" // donate wallet
);

export const DEFAULT_SOL_AMOUNT: number = process.env.DEFAULTAMOUNT
  ? parseFloat(process.env.DEFAULTAMOUNT)
  : 0.1;

export const DEFAULT_RPC =
  process.env.RPC_URL_MAINNET ?? clusterApiUrl("mainnet-beta");

export const DEFAULT_TITLE = process.env.TITLE ?? "Coffee tips";

export const DEFAULT_AVATAR = "https://github.com/shadcn.png"

export const DEFAULT_DESCRIPTION =
  process.env.DESCRIPTION ?? "Thanks for your supporting";