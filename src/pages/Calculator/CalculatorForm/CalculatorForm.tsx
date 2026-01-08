import { useState } from 'react';
import styled from 'styled-components';
import { CalculationInput, CalculationFormData } from '@/types/calculation.types';
import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { FiCalculator } from 'react-icons/fi';

const FormCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  height: fit-content;
  position: sticky;
  top: 100px;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.heading};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
`;

const HelpText = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

interface CalculatorFormProps {
  onCalculate: (input: CalculationInput) => void;
  loading: boolean;
}

export default function CalculatorForm({ onCalculate, loading }: CalculatorFormProps) {
  const [formData, setFormData] = useState<CalculationFormData>({
    roomArea: '',
    roomHeight: '',
    occupants: '',
    activityLevel: 'medium',
    outdoorTemperature: '',
    targetTemperature: '',
    humidity: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const input: CalculationInput = {
      roomArea: parseFloat(formData.roomArea),
      roomHeight: parseFloat(formData.roomHeight),
      occupants: parseInt(formData.occupants),
      activityLevel: formData.activityLevel,
      outdoorTemperature: parseFloat(formData.outdoorTemperature),
      targetTemperature: parseFloat(formData.targetTemperature),
      humidity: formData.humidity ? parseFloat(formData.humidity) : undefined,
    };

    onCalculate(input);
  };

  const handleChange = (field: keyof CalculationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
            onChange={e => handleChange('roomArea', e.target.value)}
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
            onChange={e => handleChange('roomHeight', e.target.value)}
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
            onChange={e => handleChange('occupants', e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="activityLevel">Activity Level *</Label>
          <Dropdown
            id="activityLevel"
            value={formData.activityLevel}
            onChange={e =>
              handleChange('activityLevel', e.target.value as CalculationFormData['activityLevel'])
            }
            options={[
              { value: 'low', label: 'Low (Office, Library)' },
              { value: 'medium', label: 'Medium (Retail, Classroom)' },
              { value: 'high', label: 'High (Gym, Workshop)' },
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
            onChange={e => handleChange('outdoorTemperature', e.target.value)}
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
            onChange={e => handleChange('targetTemperature', e.target.value)}
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
            onChange={e => handleChange('humidity', e.target.value)}
          />
          <HelpText>Optional: Ideal range is 40-60%</HelpText>
        </FormGroup>

        <Button type="submit" size="large" fullWidth loading={loading}>
          <FiCalculator /> Calculate
        </Button>
      </Form>
    </FormCard>
  );
}
