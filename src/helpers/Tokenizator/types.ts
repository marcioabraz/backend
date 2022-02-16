export interface Tokenizator {
  encode(value: string): string;
  decode(token: string): string;
}
