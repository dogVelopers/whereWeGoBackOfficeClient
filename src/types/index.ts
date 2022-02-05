export interface INation {
  id: number;
  imageUrl: string;
  introduce: string;
  nationName: string;
  continentName: string;
  quarantinePolicy: string;
  createdDate?: Date;
  modifiedDate?: Date;
}
