export abstract class WriteInterface<Input, Output> {
  abstract create(input: Input): Promise<Output>;
  abstract update(input: Partial<Output>): Promise<Output>;
  abstract delete(id: string): Promise<void>;
}
