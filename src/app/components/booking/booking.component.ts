import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as JsBarcode from 'jsbarcode';
import { ChangebgService } from 'src/app/services/changebg.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  @ViewChild('barcodeContainer') barcodeContainer: ElementRef | any;

  chairs: any = [
    {
      name: 'A',
      chairs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      booked: [],
    },
    {
      name: 'B',
      chairs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      booked: [],
    },
    {
      name: 'C',
      chairs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      booked: [],
    },
    {
      name: 'D',
      chairs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      booked: [],
    },
  ];
  times: any[] = [
    {
      type: '2D',
      time: '10:00',
    },
    {
      type: '2D',
      time: '12:30',
    },
    {
      type: '2D',
      time: '15:00',
    },
    {
      type: '3D',
      time: '17:30',
    },
    {
      type: '3D',
      time: '20:00',
    },
    {
      type: '3D',
      time: '00:30',
    },
    {
      type: '4DX',
      time: '03:00',
    },
    {
      type: '4DX',
      time: '05:30',
    },
  ];
  selected: any = [];
  dateArray: any = [];
  movieData: any;
  index: any;
  selectedDay: any;
  timeActive: any;
  movieBG: any;
  dateActive: any = 0;
  booking: any = {
    chairsBooked: '',
    date: '',
    type: '',
  };
  constructor(private _Images: ChangebgService, private Router: Router) {
    this.index = this.Router.url.split('/')[2].replace(/:/g, '');
    this._Images.currentImages.subscribe((data: any) => {
      // this.images = data;
      this.movieData = data[this.index];
      // this.movieBG=`${data[this.index].bg}`
      document.documentElement.style.setProperty(
        '--movieBG',
        `url(${data[this.index].bg})`
      );
    });
  }

  generateBarcodes() {
    for (let i = 0; i < this.booking.chairsBooked.length; i++) {
      let code =
        this.movieData.name +
        this.booking.date.date +
        this.booking.type.time +
        this.booking.chairsBooked[i].row +
        this.booking.chairsBooked[i].seat;
      const canvas = document.createElement('canvas');
      canvas.style.width = 100 + '%';
      JsBarcode(canvas, code, { format: 'CODE128' });
      let div: any = document.getElementById(`barcode_${i}`);
      div.appendChild(canvas);
    }
  }

  ngOnInit(): void {
    this.dateArray = this.getNext7Days();

    this.handelDays(0);
    let date: any = new Date();
    let mainDate: Number = date.getDate();

    Array.from(document.getElementsByClassName('date-point')).forEach(
      (item: any) => {
        if (item.innerText == mainDate) {
          item.classList.add('h6-active');
        }
      }
    );
  }
  handelDays(i: any) {
    this.dateActive = i;
    var currentDate = new Date();

    // Calculate the date after x days
    var futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + i);

    // Get day information
    var dayNumber = futureDate.getDate();
    var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
      futureDate.getDay()
    ];

    // Get month information
    var monthNumber = futureDate.getMonth() + 1; // Months are zero-based
    var monthName = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ][futureDate.getMonth()];

    this.selectedDay = `${dayName} ${dayNumber} ${monthName}`;

    if (this.timeActive != undefined && this.dateActive != undefined) {
      this.booked();
    }
  }
  booked() {
    for (let x = 0; x < this.chairs.length; x++) {
      const element: any = this.chairs[x];

      var randomNumbers = [];
      for (var i = 0; i < 15; i++) {
        let num = this.getRandomNumber(1, 15);

        let ifin = randomNumbers.filter((item: any) => item === num);
        if (ifin.length == 0) {
          randomNumbers.push(num);
        }
      }
      element.booked = randomNumbers;
    }
  }
  getRandomNumber(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  playVid() {
    let video: HTMLElement | any = document.getElementById('video');
    let btn: HTMLElement | any = document.getElementById('play');

    if (video.paused) {
      video.play();
      video.style.display = 'unset';
      btn.classList.remove('bi-play-fill');
      btn.classList.add('bi-pause');
    } else if (!video.paused) {
      video.pause();
      video.style.display = 'none';
      btn.classList.add('bi-play-fill');
      btn.classList.remove('bi-pause');
    }
  }
  ended() {
    let video: HTMLElement | any = document.getElementById('video');
    video.play();
  }
  select(i: any, x: any, li: any) {
    if (this.booking.type != '') {
      let numberChair = `${this.chairs[i].name}${this.chairs[i].chairs[x]}`;

      if (li.target.classList.contains('blocked')) {
      } else if (li.target.classList.contains('selected')) {
        li.target.classList.remove('selected');
        let remove = this.selected.filter((item: any) => item != numberChair);
        this.selected = remove;
      } else if (!li.target.classList.contains('booked')) {
        li.target.classList.add('selected');
        let remove = this.selected.filter((item: any) => item == numberChair);
        if (remove.length == 0) {
          this.selected.push({
            row: this.chairs[i].name,
            seat: this.chairs[i].chairs[x],
          });
        }
      }
      this.booking.chairsBooked = this.selected;
    }
  }
  getTime(data: any, i: any) {
    this.timeActive = i;
    this.booking.type = data;
    if (this.timeActive != undefined && this.dateActive != undefined) {
      this.booked();
    }
  }
  getNext7Days() {
    var dayAbbreviations = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var currentDate = new Date();
    var next7Days = [];
    for (var i = 0; i < 8; i++) {
      var nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      var dayAbbreviation = dayAbbreviations[nextDate.getDay()];
      var formattedDate = nextDate.toISOString().split('T')[0];
      var dateParts = formattedDate.split('-');
      var day = parseInt(dateParts[2], 10);
      next7Days.push({ date: day, day: dayAbbreviation });
    }

    return next7Days;
  }
  next() {
    this.generateBarcodes();

    this.booking.date = this.dateArray[this.dateActive];

    if (
      this.booking.chairsBooked != '' &&
      this.booking.date != '' &&
      this.booking.type != ''
    ) {
      let chair: HTMLElement | any = document.getElementById('chair');
      let ticket: HTMLElement | any = document.getElementById('ticket');
      let backBtn: HTMLElement | any = document.getElementById('back-ticket');
      let bookBtn: HTMLElement | any = document.getElementById('book-ticket');
      let doneBtn: HTMLElement | any = document.getElementById('doneBtn');
      chair.style.display = 'none';
      bookBtn.style.display = 'none';
      ticket.style.display = 'unset';
      doneBtn.style.display = 'unset';
      backBtn.style.display = 'unset';
    }
  }

  back() {
    let chair: HTMLElement | any = document.getElementById('chair');
    let ticket: HTMLElement | any = document.getElementById('ticket');
    let backBtn: HTMLElement | any = document.getElementById('back-ticket');
    let bookBtn: HTMLElement | any = document.getElementById('book-ticket');
    let doneBtn: HTMLElement | any = document.getElementById('doneBtn');
    chair.style.display = 'unset';
    bookBtn.style.display = 'unset';
    ticket.style.display = 'none';
    doneBtn.style.display = 'none';
    backBtn.style.display = 'none';
  }
  done() {
    let done: HTMLElement | any = document.getElementById('done');
    done.style.opacity = '1';
    done.style.display = 'none';

    setTimeout(() => {
      done.style.opacity = '0';
    }, 1250);
    setTimeout(() => {
      this.Router.navigate(['home']);
    }, 1300);
  }
}
