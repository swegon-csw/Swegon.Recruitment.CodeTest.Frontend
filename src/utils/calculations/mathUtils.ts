export function calculatePercentage(value: number, total: number): number {
  if (total === 0) {
    return 0;
  }
  return (value / total) * 100;
}

export function calculateAverage(values: number[]): number {
  if (values.length === 0) {
    return 0;
  }
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}

export function calculateSum(values: number[]): number {
  return values.reduce((acc, val) => acc + val, 0);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

export function isWithinTolerance(value: number, target: number, tolerance: number): boolean {
  return Math.abs(value - target) <= tolerance;
}
