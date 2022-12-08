export class CustomLocation {
  constructor(
    private readonly latitude: number,
    private readonly longitude: number,
    private name: string = ""
  ) {}

  public getLatitude(): number {
    return this.latitude;
  }

  public getLongitude(): number {
    return this.longitude;
  }
}
