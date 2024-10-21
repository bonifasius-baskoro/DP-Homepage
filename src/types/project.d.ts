type chatSubmission=  { 
    question:string
  }

type chatHistory = {
    q:string;
    a:string;
}
type chatRequest = {
    history : chatHistory[];
    question: string;
}
type valuePoint ={
    header:string;
    paragraph:string;
    pictureLink?:string;   
}

type chatResponse={
    answer:string;
}

type testimony={
    name:string;
    testimony:string;
     companyName:string;
}

type CardType = {
    url: string;
    title: string;
    paragraph:string;
    id: number;
  }

type cardTeams ={
    name:string;
    role:string;
    photoURL:string;
    paragraph:string;
    linkedinUrl: string;
}