export interface DatabaseAbstractionLayer {
  create(data: string): Promise<string>;
  read(id: string): Promise<string>;
  update(id: string, data: string): Promise<string>;
  delete(id: string): Promise<void>;
  getAllIds(): Promise<string[]>;
}
