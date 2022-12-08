export abstract class User {
  constructor(private readonly id: string) {}
  public abstract cancelRace(): void;

  public getId() {
    return this.id;
  }
}
