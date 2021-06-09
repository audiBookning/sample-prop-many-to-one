import { Injectable } from '@nestjs/common';
import { RepoService } from '../../repos/repo.service';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(private repoSVC: RepoService) {}

  getAllClients(): Promise<Client[]> {
    return this.repoSVC.client.find();
  }

  getClientById(id: string) {
    return this.repoSVC.client.findOne({ id });
  }

  getClientEmails(id: string) {
    return this.repoSVC.emails.find({ clientId: id });
  }

  getClientPhones(id: string) {
    return this.repoSVC.phone.find({ clientId: id });
  }

  getClientProperties(id: string) {
    return this.repoSVC.property.find({ clientId: id });
  }

  getClientWebsites(id: string) {
    return this.repoSVC.websites.find({ clientId: id });
  }
}
