import { useState } from "react";

import Button from "@/components/common/Button/Button";
import Dropdown from "@/components/common/Dropdown/Dropdown";
import Input from "@/components/common/Input/Input";
import { CalculationInput } from "@/types/calculation.types";

import { Form, FormCard, FormGroup, FormTitle, HelpText, Label } from "./CalculatorForm.styled";

interface FormData {
  roomArea: string;
  roomHeight: string;
  occupants: string;
  activityLevel: string;
  outdoorTemperature: string;
  targetTemperature: string;
  humidity: string;
}

interface CalculatorFormProps {
  onCalculate: (input: CalculationInput) => void;
  onCalculateV2: (input: CalculationInput) => void;
  loading: boolean;
}

export default function CalculatorForm({ onCalculate, onCalculateV2, loading }: CalculatorFormProps) {
  const [formData, setFormData] = useState<FormData>({
    roomArea: "50",
    roomHeight: "2.6",
    occupants: "10",
    activityLevel: "medium",
    outdoorTemperature: "25",
    targetTemperature: "21",
    humidity: "50",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const input: CalculationInput = {
      area: parseFloat(formData.roomArea),
      height: parseFloat(formData.roomHeight),
      occupancy: parseInt(formData.occupants),
      activityLevel: formData.activityLevel as "low" | "medium" | "high",
      temperature: parseFloat(formData.outdoorTemperature),
      humidity: parseFloat(formData.humidity || "50"),
    };

    onCalculate(input);
  };

  // @ts-expect-error - Keeping for future use
  const handleSubmitV2 = (e: React.FormEvent) => {
    e.preventDefault();

    const input: CalculationInput = {
      area: parseFloat(formData.roomArea),
      height: parseFloat(formData.roomHeight),
      occupancy: parseInt(formData.occupants),
      activityLevel: formData.activityLevel as "low" | "medium" | "high",
      temperature: parseFloat(formData.outdoorTemperature),
      humidity: parseFloat(formData.humidity || "50"),
    };

    onCalculateV2(input);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <FormCard>
      <FormTitle>Enter Room Details</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="roomArea">Room Area (m²) *</Label>
          <Input
            id="roomArea"
            type="number"
            step="0.1"
            value={formData.roomArea}
            onChange={(e) => handleChange("roomArea", e.target.value)}
            required
          />
          <HelpText>Enter the total floor area of the room</HelpText>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="roomHeight">Room Height (m) *</Label>
          <Input
            id="roomHeight"
            type="number"
            step="0.1"
            value={formData.roomHeight}
            onChange={(e) => handleChange("roomHeight", e.target.value)}
            required
          />
          <HelpText>Standard ceiling height is 2.4-2.7m</HelpText>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="occupants">Number of Occupants *</Label>
          <Input
            id="occupants"
            type="number"
            value={formData.occupants}
            onChange={(e) => handleChange("occupants", e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="activityLevel">Activity Level *</Label>
          <Dropdown
            id="activityLevel"
            value={formData.activityLevel}
            onChange={(e) => handleChange("activityLevel", e.target.value)}
            options={[
              { value: "low", label: "Low (Office, Library)" },
              { value: "medium", label: "Medium (Retail, Classroom)" },
              { value: "high", label: "High (Gym, Workshop)" },
            ]}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="outdoorTemperature">Outdoor Temperature (°C) *</Label>
          <Input
            id="outdoorTemperature"
            type="number"
            step="0.1"
            value={formData.outdoorTemperature}
            onChange={(e) => handleChange("outdoorTemperature", e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="targetTemperature">Target Temperature (°C) *</Label>
          <Input
            id="targetTemperature"
            type="number"
            step="0.1"
            value={formData.targetTemperature}
            onChange={(e) => handleChange("targetTemperature", e.target.value)}
            required
          />
          <HelpText>Comfortable range is typically 20-22°C</HelpText>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="humidity">Relative Humidity (%)</Label>
          <Input
            id="humidity"
            type="number"
            step="1"
            min="0"
            max="100"
            value={formData.humidity}
            onChange={(e) => handleChange("humidity", e.target.value)}
          />
          <HelpText>Optional: Ideal range is 40-60%</HelpText>
        </FormGroup>

        <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
          <Button type="submit" size="large" fullWidth loading={loading}>
            Calculate
          </Button>
          {/* <Button
            type="button"
            size="large"
            fullWidth
            loading={loading}
            variant="secondary"
            onClick={(event) => {
              handleSubmitV2(event);
            }}
          >
            Calculate V2
          </Button> */}
        </div>
      </Form>
    </FormCard>
  );
}
