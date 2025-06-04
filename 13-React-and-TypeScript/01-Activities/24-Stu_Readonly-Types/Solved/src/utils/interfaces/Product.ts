export default interface Product {
  readonly id: number;
  readonly productName: string;
  readonly productDescription: string;
  readonly price: number;
  quantity: number;
  readonly tags: readonly string[];
  purchase?: (id: number) => void;
}
