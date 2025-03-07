import  {
    useQuery, useMutation, useQueryClient, useInfiniteQuery
} from '@tanstack/react-query'
import { createUserAccount } from '../appwrite/api'
import { INewUser } from 'src/types'
import { signInAccount } from  '../appwrite/api'

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: {email: string; password: string}) => signInAccount(user)
    })
}