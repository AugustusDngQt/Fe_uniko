import { useModelQuery } from '@/hooks/useQueryModel'
import { apiService } from '@/libraries/api'
import { IUserGetMeResponse } from '@/types/user.i'

const userApi = apiService.user

export const useGetMeUser = (accessToken: string | undefined) => {
  const { isPending: isGetMeUserPending, data: userGetMeData } = useModelQuery<IUserGetMeResponse>(
    'User',
    userApi.getMe,
    {
      condition: 'me',
      enable: !!accessToken,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  )
  return { isGetMeUserPending, userGetMeData }
}
