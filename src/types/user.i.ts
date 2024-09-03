import { IBaseResponseData } from '@/types/common.i'

export interface IUserFromToken {
  accessToken: string
  refreshToken: string
  user: {
    userId: string
    email: string
    fullName: string
    roleId: string
    status: EUserStatus
  }
}

export enum EUserStatus {
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED',
  UNVERIFIED = 'UNVERIFIED'
}

export interface IUser {
  id: string
  profession: string
  fullName: string
  dateOfBirth: string
  gender: string
  username: string
  email: string
  licenseNumber: string
  experience: string
  workplace: string
  status: string
  phone_number: string
  address: string
  roleId: string
  forgetPasswordToken: string
  refresh_token: string
  emailVerifyToken: string
  avatarId: string
}

export type IUserGetMeResponse = IBaseResponseData<IUser>
