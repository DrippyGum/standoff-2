export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlistEntries: Map<number, WaitlistEntry>;

  constructor() {
    this.users = new Map<number, User>();
    this.waitlistEntries = new Map<number, WaitlistEntry>();
  }

  // Methods to store and retrieve login data
}