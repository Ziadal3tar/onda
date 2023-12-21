import { Component } from '@angular/core';
import { ChangebgService } from './services/changebg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'oc-FE';
  constructor(private _image:ChangebgService){}
ngOnInit(): void {
this._image.updateFriendsChats()
this._image.updateIndex(2)
}
}
