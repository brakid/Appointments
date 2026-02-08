// Appointment type definitions
export enum AppointmentStatus {
  SCHEDULED = 'SCHEDULED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  NO_SHOW = 'NO_SHOW'
}

export interface Appointment {
  id: string
  userId: string
  startTime: Date
  endTime: Date
  status: AppointmentStatus
  googleEventId?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateAppointmentData {
  userId: string
  startTime: Date
  endTime: Date
  notes?: string
}

export interface UpdateAppointmentData {
  status?: AppointmentStatus
  notes?: string
}