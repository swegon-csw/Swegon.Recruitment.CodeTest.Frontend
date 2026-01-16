export interface CalculationInput {
  area: number;
  height: number;
  occupancy: number;
  activityLevel: "low" | "medium" | "high";
  temperature: number;
  humidity: number;
}

export interface CalculationResult {
  airflow: number;
  coolingCapacity: number;
  heatingCapacity: number;
  energyConsumption: number;
  cost: {
    installation: number;
    annual: number;
    lifetime: number;
  };
  recommendations: string[];
}

export interface CalculationHistory {
  id: string;
  timestamp: string;
  input: CalculationInput;
  result: CalculationResult;
  name?: string;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
}
