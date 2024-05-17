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
    this.booked = localStorage.getItem('tickets')
    if (this.booked) {
      this.booked = JSON.parse(this.booked);

    }
    this._Images.updateFriendsChats()
this._Images.updateIndex(2)
  }
  images: any[] = [];
  booked: any;
  index: any;
  openCart: Boolean =false;
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
  watchTrailer1(){
    let video: HTMLElement | any = document.getElementById('video1');
    let btn1: HTMLElement | any = document.getElementById('play1')
if (video.paused) {
  video.play();
  video.style.display = 'unset';
  btn1.classList.remove('bi-play');
  btn1.classList.add('bi-pause');
} else if (!video.paused) {
  video.pause();
  video.style.display = 'none';
  btn1.classList.add('bi-play');
  btn1.classList.remove('bi-pause');
}
  }
  ended() {
    let video: HTMLElement | any = document.getElementById('video');
    video.play();
  }
  closeTriller(){
    let video: HTMLElement | any = document.getElementById('video');
    let video1: HTMLElement | any = document.getElementById('video1');
    let btn: HTMLElement | any = document.getElementById('play')
    let btn1: HTMLElement | any = document.getElementById('play1')
    video.pause();
    video.style.display = 'none';
    video1.style.display = 'none';
    btn.classList.add('bi-play');
    btn.classList.remove('bi-pause');
    btn1.classList.add('bi-play');
    btn1.classList.remove('bi-pause');
  }
  deleteTicket(i:any){
    let ticketsString = localStorage.getItem('tickets');
    if (ticketsString) {
      let tickets = JSON.parse(ticketsString);

      if (Array.isArray(tickets) && tickets.length > i) {
        tickets.splice(i, 1); // Remove 1 item starting from index 5

        // Save the updated array back to localStorage
        localStorage.setItem('tickets', JSON.stringify(tickets));
        this.booked = localStorage.getItem('tickets')
        if (this.booked) {
          this.booked = JSON.parse(this.booked);

        }
      }
    }
  }
}
