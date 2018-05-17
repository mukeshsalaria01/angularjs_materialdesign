import { TestBed, inject } from '@angular/core/testing';

import { NewMemberService } from './new-member.service';

describe('NewMemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewMemberService]
    });
  });

  it('should be created', inject([NewMemberService], (service: NewMemberService) => {
    expect(service).toBeTruthy();
  }));
});
