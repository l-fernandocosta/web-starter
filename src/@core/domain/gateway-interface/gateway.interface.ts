import { ReadInterface } from "./read.interface";
import { WriteInterface } from "./write.interface";

export abstract class GatewayInterface<Input, Output>
  implements ReadInterface<Output>, WriteInterface<Input, Output>
{
  abstract create(input: Input): Promise<Output>;
  abstract update(input: Partial<Output>): Promise<Output>;
  abstract delete(id: string): Promise<void>;
  abstract get(id: string): Promise<Output>;
  abstract getAll(): Promise<Output[]>;
}
