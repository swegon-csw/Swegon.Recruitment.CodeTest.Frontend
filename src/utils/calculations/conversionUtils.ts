/**
 * Convert Celsius to Fahrenheit
 */
export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

/**
 * Convert Fahrenheit to Celsius
 */
export function fahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

/**
 * Convert meters to feet
 */
export function metersToFeet(meters: number): number {
  return meters * 3.28084;
}

/**
 * Convert feet to meters
 */
export function feetToMeters(feet: number): number {
  return feet / 3.28084;
}

/**
 * Convert square meters to square feet
 */
export function sqMetersToSqFeet(sqMeters: number): number {
  return sqMeters * 10.7639;
}

/**
 * Convert square feet to square meters
 */
export function sqFeetToSqMeters(sqFeet: number): number {
  return sqFeet / 10.7639;
}

/**
 * Convert liters per second to cubic feet per minute (CFM)
 */
export function litersPerSecToCFM(litersPerSec: number): number {
  return litersPerSec * 2.11888;
}

/**
 * Convert CFM to liters per second
 */
export function cfmToLitersPerSec(cfm: number): number {
  return cfm / 2.11888;
}
