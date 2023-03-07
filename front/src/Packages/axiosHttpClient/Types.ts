export type HttpConfig = {
  baseUrl?: string;
  headers?: Record<string, () => unknown>[];
};
