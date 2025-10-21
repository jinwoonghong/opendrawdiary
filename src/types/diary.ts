export interface Diary {
  id: string;
  date: string;
  text: string;
  drawing: string; // base64 encoded image
  createdAt: Date;
}