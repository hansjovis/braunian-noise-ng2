import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  visible: boolean;
  visibleAnimate: boolean;

  constructor() {
    this.visible = false;
    this.visibleAnimate = false;
  }

  ngOnInit() {
    
  }
  
  public show() {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent) {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

}
