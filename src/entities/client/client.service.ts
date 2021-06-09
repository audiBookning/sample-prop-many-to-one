import { Injectable } from '@nestjs/common';
import { RepoService } from '../../repos/repo.service';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(private repoSVC: RepoService) {}

  getAllClients(): Promise<Client[]> {
    return this.repoSVC.client.find();
  }
}
