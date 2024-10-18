import { ENDPOINT_TANYA, STORAGE_KEY, URL } from "@/constant/url";

const getChatHistory = (): chatHistory[] => {
  if (typeof window !== "undefined") {
    const history = sessionStorage.getItem(STORAGE_KEY);
    return history
      ? (JSON.parse(history) as chatHistory[])
      : ([] as chatHistory[]);
  }
  sessionStorage.setItem(STORAGE_KEY, "");
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

export function getChat(): Promise<chatResponse> {
    return Promise.resolve({ answer: "Please ask about us" });
  }

export const postAnswer = async (question: chatSubmission) => {
  const postURL = URL + ENDPOINT_TANYA;
  const chatRequest = createChatRequest(question, getChatHistory());
  
  try {
    const response = await fetch(postURL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(chatRequest),
    });

    

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    
    const existingHistory = getChatHistory();

    const newHistoryItem = {
      q: question.question,
      a: responseData.answer,
    };
    existingHistory.push(newHistoryItem);

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(existingHistory));
    
    return responseData;
  } catch (error) {
    console.error("Error posting answer:", error);

    throw error;
  }
};
