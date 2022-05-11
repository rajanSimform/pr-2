export class Note {
  constructor(
    public title: string,
    public desc: string,
    public createdAt: Date,
    public created?: boolean,
    public deleted?: boolean,
    public updated?: boolean
  ) {}
}
