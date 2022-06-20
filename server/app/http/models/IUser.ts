import { Document } from 'mongoose'

export interface IUser extends Document {
  _id: number,
  name: string,
  role: string,
  email: string,
  password: string
}