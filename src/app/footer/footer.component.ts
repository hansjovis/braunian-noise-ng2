import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthenticateService } from '../services/authenticate-service/authenticate.service';
import { ModalComponent } from '../helper/modal/modal.component';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild( ModalComponent ) loginModal: ModalComponent;
  error: string;

  constructor(private authenticate: AuthenticateService) { }

  ngOnInit() {
  }

  /**
   * Hides the login dialog again and removes any error
   * messages.
   */
  public hideLoginDialog() {
    this.error = null;
    this.loginModal.hide();
  }
  
  /**
   * Try to login using the given username and password.
   * @param {string} username the username to use.
   * @param {string} password the password to use.
   */
  public login(username: string, password: string) {  

    this.authenticate.login(username, password)
      .subscribe((user) => {
        console.log(`${user.username} logged in!`);
        this.error = null;
        this.loginModal.hide();
      },
      (error) => {
        switch(error.status) {
          case 401: this.error = 'Wrong username or password.'; break ;
          default: this.error = `${error.status} - ${error.statusText}`;
        }
      });
  }

}
