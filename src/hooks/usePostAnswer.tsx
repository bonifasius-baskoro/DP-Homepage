import { getChat, postAnswer } from "@/api/chatBot"

import { isError, QueryClient, useMutation, useQuery, useQueryClient } from "react-query"




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
            console.log(data.answer);
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