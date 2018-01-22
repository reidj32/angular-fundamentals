import { Injectable } from '@angular/core';

import { Session } from '../session';

@Injectable()
export class VoterService {
  constructor() {}

  deleteVoter(session: Session, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVoter(session: Session, voterName: string) {
    session.voters.push(voterName);
  }

  userHasVoted(session: Session, voterName: string): boolean {
    return session.voters.some(voter => voter === voterName);
  }
}
