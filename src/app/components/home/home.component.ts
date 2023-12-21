import { Component } from '@angular/core';
import { ChangebgService } from 'src/app/services/changebg.service';
declare var M: any; // Declare MaterializeCSS variable

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  ngOnInit(): void {
    this._Images.updateFriendsChats()
this._Images.updateIndex(2)
  }
  images: any[] = [];
  index: any;
  constructor(private _Images: ChangebgService) {
    this._Images.currentIndex.subscribe((data: any) => {
      this.index = data;
      this.changeBg(data);
    });
    this._Images.currentImages.subscribe((data: any) => {
      this.images = data;
    });
  }
  changeBg(i: any) {
    const banner: any = document.querySelector('.banner');
    const contents = document.querySelector('.content');
    banner.style.background = `url(${this.images[i]?.bg})`;
  }
  watchTrailer(){
    let video: HTMLElement | any = document.getElementById('video');
    let btn: HTMLElement | any = document.getElementById('play')
if (video.paused) {
  video.play();
  video.style.display = 'unset';
  btn.classList.remove('bi-play');
  btn.classList.add('bi-pause');
} else if (!video.paused) {
  video.pause();
  video.style.display = 'none';
  btn.classList.add('bi-play');
  btn.classList.remove('bi-pause');
}
  }
  ended() {
    let video: HTMLElement | any = document.getElementById('video');
    video.play();
  }
  closeTriller(){
    let video: HTMLElement | any = document.getElementById('video');
    let btn: HTMLElement | any = document.getElementById('play')
    video.pause();
    video.style.display = 'none';
    btn.classList.add('bi-play');
    btn.classList.remove('bi-pause');
  }
}
