import { 
  type ContactInquiry, 
  type InsertContactInquiry,
  type NewsletterSignup,
  type InsertNewsletterSignup
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  
  createNewsletterSignup(signup: InsertNewsletterSignup): Promise<NewsletterSignup>;
  getNewsletterSignupByEmail(email: string): Promise<NewsletterSignup | undefined>;
  getNewsletterSignups(): Promise<NewsletterSignup[]>;
}

export class MemStorage implements IStorage {
  private contactInquiries: Map<string, ContactInquiry>;
  private newsletterSignups: Map<string, NewsletterSignup>;

  constructor() {
    this.contactInquiries = new Map();
    this.newsletterSignups = new Map();
  }

  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const contactInquiry: ContactInquiry = { 
      ...inquiry, 
      id,
      createdAt: new Date()
    };
    this.contactInquiries.set(id, contactInquiry);
    return contactInquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }

  async createNewsletterSignup(signup: InsertNewsletterSignup): Promise<NewsletterSignup> {
    const existingSignup = await this.getNewsletterSignupByEmail(signup.email);
    if (existingSignup) {
      throw new Error("Email already subscribed");
    }
    
    const id = randomUUID();
    const newsletterSignup: NewsletterSignup = { 
      ...signup, 
      id,
      createdAt: new Date()
    };
    this.newsletterSignups.set(id, newsletterSignup);
    return newsletterSignup;
  }

  async getNewsletterSignupByEmail(email: string): Promise<NewsletterSignup | undefined> {
    return Array.from(this.newsletterSignups.values()).find(
      (signup) => signup.email.toLowerCase() === email.toLowerCase()
    );
  }

  async getNewsletterSignups(): Promise<NewsletterSignup[]> {
    return Array.from(this.newsletterSignups.values());
  }
}

export const storage = new MemStorage();
