declare global {
  namespace App {}

  interface ImportMetaEnv {
    readonly PUBLIC_EMAIL?: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {};
