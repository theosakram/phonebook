import nextGetConfig from "next/config";

interface Config {
  publicRuntimeConfig: {
    baseURL: string;
  };
}

export const getEnv = () => nextGetConfig() as Config;
