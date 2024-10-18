type chatSubmission=  { 
    question:string
  }

type valuePoint ={
    header:string;
    paragraph:string;
    pictureLink?:string;   
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