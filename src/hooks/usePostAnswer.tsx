import { getChat, postAnswer } from "@/api/chatBot"

import {  useMutation, useQuery, useQueryClient } from "react-query"




export  const usePostAnswer=()=>{
    const queryClient = useQueryClient();
    const {
        data,isError,isLoading
      } = useQuery({
        queryKey: ["chat"],
        queryFn: getChat,
        staleTime: Infinity, // Prevents automatic refetching
      });

      const {mutateAsync: chatMutation} = useMutation<chatResponse, Error, chatSubmission>({
        mutationFn:(question:chatSubmission)=>postAnswer(question),
        onSuccess:(data)=>{
            queryClient.setQueryData("chat", data)
            console.log("answer sucess")
            
        }
        ,onError:(error)=>{
            console.error("error posting answer" , error);
        },
    });
    

    return{
        data,
        isError,
        isLoading,
        chatMutation
    }
}