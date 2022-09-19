import { z } from 'zod';
import { vehicleSchema } from './IVehicle';

export const motoSchema = vehicleSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().nonnegative().lte(2500)
    .gt(0),
});

export type IMotorcycle = z.infer<typeof motoSchema>;