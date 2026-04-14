declare module "bullmq" {
  export type Job<T = unknown> = {
    id?: string;
    data: T;
  };

  export class Queue<T = unknown> {
    constructor(name: string, options?: unknown);
    add(name: string, data: T, options?: unknown): Promise<unknown>;
    close(): Promise<void>;
  }

  export class QueueEvents {
    constructor(name: string, options?: unknown);
    close(): Promise<void>;
  }

  export class Worker<T = unknown> {
    constructor(
      name: string,
      processor: (job: Job<T>) => Promise<void>,
      options?: unknown,
    );
    on(event: "completed", listener: (job: Job<T>) => void): this;
    on(
      event: "failed",
      listener: (job: Job<T> | undefined, error: Error) => void,
    ): this;
    close(): Promise<void>;
  }
}

declare module "ioredis" {
  export default class IORedis {
    constructor(url: string, options?: unknown);
    quit(): Promise<"OK">;
  }
}
