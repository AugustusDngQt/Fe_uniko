export interface IAccountSource {
  id: string
  name: String
  type: string
  initAmount: number
  accountBank: any
  currency: string
  currentAmount: number
}

export interface IAccountSourceDataFormat {
  id: string
  name: String
  type: any
  initAmount: string
  accountBank: string
  currency: string
  currentAmount: string
}

export interface IAccountSourceBody {
  name?: string
  type?: string
  initAmount?: number
  currency?: string
}
