export function noop(): void {}

export function ping(): string {
  const msg = "hc-lib loaded successfully!";
  console.log(msg);
  return msg;
}
