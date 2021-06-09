import { Injectable } from '@nestjs/common';
import { RepoService } from '../../repos/repo.service';
import { Email } from './email.entity';
import { Phone } from './phone.entity';
import { Property } from './property.entity';
import { Website } from './website.entity';

@Injectable()
export class LocalsService {
  constructor(private repoSVC: RepoService) {}

  // Email
  getAllEmails(): Promise<Email[]> {
    return this.repoSVC.emails.find();
  }

  getEmailById(id: string): Promise<Email> {
    return this.repoSVC.emails.findOne({ id });
  }

  // Phone
  getAllPhones(): Promise<Phone[]> {
    return this.repoSVC.phone.find();
  }

  getPhoneById(id: string): Promise<Phone> {
    return this.repoSVC.phone.findOne({ id });
  }

  // Property
  getAllProperties(): Promise<Property[]> {
    return this.repoSVC.property.find();
  }

  getPropertyById(id: string): Promise<Property> {
    return this.repoSVC.property.findOne({ id });
  }

  // Website
  getAllWebsites(): Promise<Website[]> {
    return this.repoSVC.websites.find();
  }

  getWebsiteById(id: string): Promise<Website> {
    return this.repoSVC.websites.findOne({ id });
  }
}
