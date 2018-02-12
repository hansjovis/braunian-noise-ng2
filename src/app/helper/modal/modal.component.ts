import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
/**
 * A dialog overlay.
 */
export class ModalComponent implements OnInit {

  visible: boolean;
  visibleAnimate: boolean;

  constructor() {
    this.visible = false;
    this.visibleAnimate = false;
  }

  ngOnInit() {
    
  }
  
  /**
   * Shows the dialog.
   */
  public show() {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  /**
   * Hides the dialog
   */
  public hide() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  /**
   * Hides the dialog when the user clicks outside of the dialog.
   * @param {MouseEvent} event the click event. 
   */
  public onContainerClicked(event: MouseEvent) {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

}
