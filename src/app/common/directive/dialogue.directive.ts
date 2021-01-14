import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';



@Directive({
  selector: '[appDialogue]'
})
export class DialogueDirective {

  constructor(public dialog: MatDialog,private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('click') onClick() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogueComponent, {
      width: '300px',
      data: { name: "some name", animal: "some data" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
