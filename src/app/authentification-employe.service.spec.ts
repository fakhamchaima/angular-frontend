import { TestBed } from '@angular/core/testing';

import { AuthentificationEmployeService } from './authentification-employe.service';

describe('AuthentificationEmployeService', () => {
  let service: AuthentificationEmployeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationEmployeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
