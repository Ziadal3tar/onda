import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';
import * as JsBarcode from 'jsbarcode';
import { ChangebgService } from 'src/app/services/changebg.service';
interface CustomDataset {
  ref?: string;
  // Add other dataset properties here if needed
}
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  @ViewChild('barcodeContainer') barcodeContainer: ElementRef | any;

  chairs: any = [
    {
      name: 'VIP',
      chairs: [1, 2, 3, 4, 5],
      price: '2500',
      booked: [],
    },
    {
      name: 'A',
      chairs: [1, 2, 3, 4, 5, 6],
      price: '2300',
      booked: [],
    },
    {
      name: 'B',
      chairs: [1, 2, 3, 4, 5, 6],
      price: '2200',
      booked: [],
    },
    {
      name: 'C',
      chairs: [1, 2, 3, 4, 5, 6, 7],
      price: '2100',
      booked: [],
    },
    {
      name: 'D',
      chairs: [1, 2, 3, 4, 5, 6, 7],
      price: '2000',
      booked: [],
    },
  ];

  times: any[] = [
    {
      type: '2D',
      time: '12:00',
    },
    {
      type: '2D',
      time: '16:00',
    },
    {
      type: '2D',
      time: '20:00',
    },
    {
      type: '3D',
      time: '00:00',
    },
    {
      type: '3D',
      time: '4:00',
    },
    {
      type: '3D',
      time: '8:00',
    },
  ];
  dateArray: any = [];
  selected: any = [];
  selectedChairId: any = [];
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

  months: { name: string; value: number }[] = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 },
  ];
  selectedMonth: any;

  currentCardBackground: number;
  Name: any = '';
  Number: any = '';
  Month: any = '';
  Year: any = '';
  Cvv: any = '';
  minCardYear: any = new Date().getFullYear();
  amexCardMask: any = '#### ###### #####';
  otherCardMask: any = '#### #### #### ####';
  cardNumberTemp: any;
  isCardFlipped: boolean = false;
  focusElementStyle: any;
  isInputFocused: boolean = false;
  Payment: boolean = false;
  messageDone: boolean = false;

  // months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  // minCardMonth: number = 3; // Change this to your desired minimum month
  // selectedMonth: number; // Variable to hold the selected month

  constructor(
    private _Images: ChangebgService,
    private Router: Router,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
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

    this.currentCardBackground = Math.floor(Math.random() * 25 + 1);
  }

  generateBarcodes() {
    for (let i = 0; i < this.booking.chairsBooked.length; i++) {
      let code =
        this.movieData.name +
        '_' +
        this.booking.date.date +
        '_' +
        this.booking.type.time +
        '_' +
        this.booking.chairsBooked[i].row +
        '_' +
        this.booking.chairsBooked[i].seat +
        '_' +
        this.booking.chairsBooked[i].price +
        'EGP';
      const canvas = document.createElement('canvas');
      canvas.style.width = 100 + '%';
      JsBarcode(canvas, code, { format: 'CODE128' });
      console.log(code);

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

    this.cardNumberTemp = this.otherCardMask;
    const element = document.getElementById('cardNumber');
    if (element) {
      element.focus();
    }
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
      let numberChair = this.chairs[i].name + '-' + this.chairs[i].chairs[x];
      let afterSplit = numberChair.split('-');

      if (li.target.classList.contains('blocked')) {
      } else if (this.selectedChairId.includes(numberChair)) {
        let remove = this.selectedChairId.filter(
          (item: any) => item != numberChair
        );

        this.selectedChairId = remove;
      } else if (!li.target.classList.contains('booked')) {
        let remove = this.selectedChairId.filter((item: any) => {
          item == numberChair;
        });
        if (remove.length == 0) {
          this.selectedChairId.push(
            this.chairs[i].name + '-' + this.chairs[i].chairs[x]
          );
        }
      }
      let array = [];
      for (let i = 0; i < this.selectedChairId.length; i++) {
        const element = this.selectedChairId[i].split('-');

        console.log(this.chairs[i].price - 500);

        let price;
        if (this.isNotBetweenMidnightAndFourPM(this.booking.type.time)) {
          price = this.chairs[i].price - 500;
        } else {
          price = this.chairs[i].price;
        }
        if (element[0] == 'VIP') {
        } else if (element[0] == 'A') {
        } else if (element[0] == 'B') {
        } else if (element[0] == 'C') {
        } else if (element[0] == 'D') {
        }
        array.push({
          row: element[0],
          seat: element[1],
          price,
        });
      }

      this.booking.chairsBooked = array;
    }
  }

  isNotBetweenMidnightAndFourPM(timeString: any) {
    const [hours, minutes] = timeString.split(':').map(Number);
    const totalSeconds = hours * 3600 + minutes * 60;

    const limitSeconds = 16 * 3600;

    return totalSeconds > 0 && totalSeconds < limitSeconds;
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
      ticket.style.display = 'block';
      doneBtn.style.display = 'block';
      backBtn.style.display = 'block';
    }
  }

  back() {
    let chair: HTMLElement | any = document.getElementById('chair');
    let ticket: HTMLElement | any = document.getElementById('ticket');
    let backBtn: HTMLElement | any = document.getElementById('back-ticket');
    let bookBtn: HTMLElement | any = document.getElementById('book-ticket');
    let doneBtn: HTMLElement | any = document.getElementById('doneBtn');
    // let tic: HTMLElement | any = document.getElementById('tic');
    chair.style.display = 'block';
    bookBtn.style.display = 'block';
    ticket.style.display = 'none';
    doneBtn.style.display = 'none';
    backBtn.style.display = 'none';
    // tic.style.display = 'none';
  }
  done() {
    // let done: HTMLElement | any = document.getElementById('done');
    // done.style.opacity = '1';
    // done.style.display = 'none';

    // setTimeout(() => {
    //   done.style.opacity = '0';
    // }, 1250);
    // setTimeout(() => {

    // }, 1300);
    this.Payment = true;
  }

  get getCardType(): string {
    let number = this.Number;
    let re = new RegExp('^4');
    if (number.match(re) !== null) return 'visa';

    re = new RegExp('^(34|37)');
    if (number.match(re) !== null) return 'amex';

    re = new RegExp('^5[1-5]');
    if (number.match(re) !== null) return 'mastercard';

    re = new RegExp('^6011');
    if (number.match(re) !== null) return 'discover';

    re = new RegExp('^9792');
    if (number.match(re) !== null) return 'troy';

    return 'visa'; // default type
  }

  generateCardNumberMask(): string {
    return this.getCardType === 'amex' ? this.amexCardMask : this.otherCardMask;
  }

  minCardMonth(): number {
    return this.Year === this.minCardYear.toString()
      ? new Date().getMonth() + 1
      : 1;
  }

  flipCard(status: boolean): void {
    this.isCardFlipped = status;
  }

  focus(hash: any) {
    document.getElementById(`cardNumber`)?.classList.remove('borderFocus');
    document.getElementById(`cardName`)?.classList.remove('borderFocus');
    document.getElementById(`cardDate`)?.classList.remove('borderFocus');
    document.getElementById(`${hash}`)?.classList.add('borderFocus');
  }

  blurInput(): void {
    setTimeout(() => {
      if (!this.isInputFocused) {
        this.focusElementStyle = null;
      }
    }, 300);
    this.isInputFocused = false;
  }
  handelNumber() {
    let num = 16 - this.Number.length;
    let hash = '';
    for (let i = 0; i < num; i++) {
      hash = hash + '#';
    }
    let number = this.Number + hash;

    // Insert spaces every 4 characters
    let formattedNumber = '';
    for (let i = 0; i < number.length; i += 4) {
      formattedNumber += number.slice(i, i + 4) + ' ';
    }
    formattedNumber = formattedNumber.trim(); // Remove extra space at the end

    this.cardNumberTemp = formattedNumber;
  }
  submit() {
    this.messageDone = !this.messageDone;
    setTimeout(() => {
      const messageElement: any = document.getElementById('messageDone');

      if (messageElement) {
        messageElement.classList.remove('opacity-0');
        messageElement.classList.add('opacity-100');
      }
      setTimeout(() => {
        messageElement.classList.add('opacity-0');
        messageElement.classList.remove('opacity-100');
        setTimeout(() => {
          this.Router.navigate(['/home']);
        }, 500);
      }, 1900);
    }, 10);

    // setTimeout(() => {
    //   document.getElementById('messageDone')?.classList.replace('opacity-100','opacity-0')
    // setTimeout(() => {
    //   this.Router.navigate(['/home'])

    // }, 600);
    // }, 2000);
  }
}
