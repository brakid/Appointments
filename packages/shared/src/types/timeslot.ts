// Time slot type definitions
export interface TimeSlot {
  id: string
  startTime: Date
  endTime: Date
  isAvailable: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CreateTimeSlotData {
  startTime: Date
  endTime: Date
  isAvailable?: boolean
}

export interface UpdateTimeSlotData {
  isAvailable?: boolean
}