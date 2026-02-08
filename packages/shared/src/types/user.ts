// User type definitions
export interface User {
  id: string
  email: string
  name: string
  googleUid: string
  timezone: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateUserData {
  email: string
  name: string
  googleUid: string
  timezone?: string
}

export interface UpdateUserData {
  name?: string
  timezone?: string
}