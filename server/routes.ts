import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertNewsletterSignupSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.json(inquiry);
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        res.status(400).json({ 
          error: "Validation failed", 
          message: validationError.toString() 
        });
      } else {
        res.status(500).json({ 
          error: "Failed to submit contact inquiry",
          message: error.message 
        });
      }
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSignupSchema.parse(req.body);
      const signup = await storage.createNewsletterSignup(validatedData);
      res.json(signup);
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        res.status(400).json({ 
          error: "Validation failed", 
          message: validationError.toString() 
        });
      } else if (error.message === "Email already subscribed") {
        res.status(409).json({ 
          error: "Email already subscribed",
          message: "This email is already subscribed to our newsletter" 
        });
      } else {
        res.status(500).json({ 
          error: "Failed to subscribe to newsletter",
          message: error.message 
        });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error: any) {
      res.status(500).json({ 
        error: "Failed to fetch contact inquiries",
        message: error.message 
      });
    }
  });

  app.get("/api/newsletter", async (req, res) => {
    try {
      const signups = await storage.getNewsletterSignups();
      res.json(signups);
    } catch (error: any) {
      res.status(500).json({ 
        error: "Failed to fetch newsletter signups",
        message: error.message 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
