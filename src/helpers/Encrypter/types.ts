export interface Encrypter {
  encrypt(value: string): string;
  compare(valueToCompare: string, originalEncripted: string): boolean;
}
