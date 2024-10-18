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

    const responseData = await response.json();
    console.log("this responsedata",responseData);
    const existingHistory = getChatHistory();

    const newHistoryItem = {
      q: question.question,
      a: responseData.answer,
    };
    existingHistory.push(newHistoryItem);

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(existingHistory));
    console.log(response, responseData)
    return responseData;
  } catch (error) {
    console.error("Error posting answer:", error);

    throw error;
  }
};
