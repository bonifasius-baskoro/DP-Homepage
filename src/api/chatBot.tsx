import { ENDPOINT_TANYA, STORAGE_KEY, URL } from "@/constant/url";

const getChatHistory = (): chatHistory[] => {
  if (typeof window !== "undefined") {
    const history = sessionStorage.getItem(STORAGE_KEY);
    return history ? JSON.parse(history) as chatHistory[] : [] as chatHistory[];
  }
  sessionStorage.setItem(STORAGE_KEY,"")
  return [] as chatHistory[];
};

function createChatRequest(
  submission: chatSubmission,
  history: chatHistory[]
): chatRequest {
  return {
    history: history,
    question: submission.question,
  };
}

export const postAnswer = async (question: chatSubmission) => {
    let postURL = URL + ENDPOINT_TANYA;
    const chatRequest = createChatRequest(question, getChatHistory());
    console.log(JSON.stringify(question));
    try {
        const response = await fetch(postURL, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(chatRequest),
        });
    
        console.log("chat sent");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        // Parse the response
        const responseData = await response.json();
    
        // Get the existing history from sessionStorage or initialize an empty array
        const existingHistory = getChatHistory();
    
        // Add the new question and answer to the history
        const newHistoryItem = {
          q: question.question,
          a: responseData.answer
        };
        existingHistory.push(newHistoryItem);
    
        // Save the updated history back to sessionStorage
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(existingHistory));
    
        return responseData;
      } catch (error) {
        console.error("Error posting answer:", error);
        // You can choose to handle the error here, e.g., by showing an error message to the user
        // or by returning a custom error response
        throw error; // Re-throw the error if you want calling code to handle it
      }
  };




