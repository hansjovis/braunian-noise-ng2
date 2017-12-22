import { Component, OnInit } from '@angular/core';

import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private authenticate: AuthenticateService) { }

  ngOnInit() {
  }
  
  public login(username: string, password: string) {  

    this.authenticate.login(username, password)
      .subscribe((user) => {
        console.log(user, ' logged in!');
      });
  }

}
