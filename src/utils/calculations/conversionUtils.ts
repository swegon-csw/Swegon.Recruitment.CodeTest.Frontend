export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

export function fahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

export function metersToFeet(meters: number): number {
  return meters * 3.28084;
}

export function feetToMeters(feet: number): number {
  return feet / 3.28084;
}

export function sqMetersToSqFeet(sqMeters: number): number {
  return sqMeters * 10.7639;
}

export function sqFeetToSqMeters(sqFeet: number): number {
  return sqFeet / 10.7639;
}

export function litersPerSecToCFM(litersPerSec: number): number {
  return litersPerSec * 2.11888;
}

export function cfmToLitersPerSec(cfm: number): number {
  return cfm / 2.11888;
}
