import { Request, Response } from "express";
import { injectable } from "inversify";

@injectable()
export default class BaseController {
  protected redirect(response: Response, url: string): void {
    return response.redirect(url);
  }

  escapeHtml(html: string): string | null {
    // escape html characters
    const escapedHtml = html
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
    
    if(html.length)
      return escapedHtml

    return null
  }

  checkForNullBody(request: Request): boolean {
    const { body } = request;

    return body !== undefined || body !== null
  }
}
