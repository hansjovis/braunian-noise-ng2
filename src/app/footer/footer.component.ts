import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthenticateService } from '../services/authenticate-service/authenticate.service';
import { ModalComponent } from '../helper/modal/modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild( ModalComponent ) loginModal: ModalComponent;

  constructor(private authenticate: AuthenticateService) { }

  ngOnInit() {
  }
  
  public login(username: string, password: string) {  

    this.authenticate.login(username, password)
      .subscribe((user) => {
        console.log(user, ' logged in!');
        this.loginModal.hide();
      });
  }

}
