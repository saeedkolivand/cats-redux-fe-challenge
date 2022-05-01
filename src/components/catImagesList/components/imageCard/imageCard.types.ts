export interface ImageCardPropsTypes {
  breeds: any[];
  id: string;
  url: string;
  width: number;
  height: number;
  categories?: { id: number | string; name: string };
}
