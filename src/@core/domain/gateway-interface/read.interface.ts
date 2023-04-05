export abstract class ReadInterface<Output> {
  abstract get(id: string): Promise<Output>;
  abstract getAll(): Promise<Output[]>;
}
