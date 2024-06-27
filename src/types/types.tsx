export interface Ischool {
  _id: string;
  name: string;
  classes: string;
  raitingtop: string;
  raitingmedium: string;
  reitingbad: string;
  likes: string;
  description: string;
  imageUrl: string;
  likesBy: string[];
}
export interface IlikeResponse {
  message: string;
}
