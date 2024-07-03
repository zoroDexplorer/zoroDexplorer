import { Component,OnInit,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    const chatboxIcon = this.renderer.selectRootElement('#chatbox-icon', true);
    const chatboxOptions = this.renderer.selectRootElement('#chatbox-options', true);

    this.renderer.listen(chatboxIcon, 'click', () => {
      if (chatboxOptions.classList.contains('show')) {
        this.renderer.removeClass(chatboxOptions, 'show');
      } else {
        this.renderer.addClass(chatboxOptions, 'show');
      }
    });
  }
}