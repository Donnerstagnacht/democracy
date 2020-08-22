export interface MessageWebpage {
    firstName: string;
    lastName: string;
    email: string;
    topic: string;
    subject: string;
    message: string;
    responded: boolean;
}

export interface MessageWebpageID extends MessageWebpage {
  id: string;
}
