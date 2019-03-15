export function generateUUID() {
  return `${s4()}-${s4()}-${s4()}-${s4()}`;
}

function s4(): string {
  return `${s1()}${s1()}${s1()}${s1()}`;
}

function s1(): number {
  return Math.floor(10*Math.random());
}
