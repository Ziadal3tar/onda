import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChangebgService {
  constructor() {}
  films: any[] = [
    {
      name:'Leave the World Behind',
      imageAlt: 'Image 1',
      bg: '../../assets/felms/fib.jpg',
      poster: '../../assets/felms/f1p.jpg',
      logo:'../../assets/felms/f1l.png',
      date:'2023',
      Classification:'R',
      duration:'2h 18m',
      Genres:'Drama',
      DirectedBy:'Sam Esmail',
      Writers:'Rumaan Alam',
      Stars:'Julia Roberts',
      disc:"Amanda and Clay's aspirational vacation with their teenage children is interrupted by the arrival of a middle aged man and his daughter who own the holiday home and who have fled an unprecedented blackout in the city. When the internet, television and radio stop working, as does the landline, they have no way of finding out what is happening. As strange sonic booms shatter the peace of the countryside, and animals start to migrate in strange ways, the physical and mental health of the families begins to disintegrate. The renters are upscale and White; the owners are upscale and Black. The issues of race clash and become distractions to the more alarming things are happening all around them.",
      triller:'https://imdb-video.media-imdb.com/vi3508389657/1434659379400-8cjq25-1701704040157.mp4?Expires=1703189063&Signature=k3FWQuEAAjiu2dxcG-K1MTv-rn8RNS6dw-XhXlRI2EzKV0LNR83R1UitGtekERb2qfMOb4PvlCq7eXwNXa5GD0iexofxrP-~nMfktHpi-Cdeo3IFOiuRI8SxKIeRr-dejD4k1rM2Yj1wB9J3NgyJRzlgvc18pJBpBKiLM6aeu8jrMWOfdErpLjd0XsbRN1XEVJwTctiEGhpKOEz04-0WO9Ium5b1K8h5R27npQIzBZC5wcMNB8~r3lHo4bkiAeWn8zDyk4roKkaB6JmPfMWPBYCdZ3bW4bagnkhLV8Rs27f0Sh2RP1Xdq-C6KtuonZlvCCkJZRb8DrW9HyMY72ffGQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    },
    {
      name:'Killers of the Flower Moon',
      imageAlt: 'Image 1',
      bg: '../../assets/felms/f2b.jpg',
      poster: '../../assets/felms/f2p.jpg',
      logo:'../../assets/felms/f2l.png',
      date:'2023',
      Classification:'R',
      duration:'3h 26m',
      Genres:'Crime',
      DirectedBy:'Martin Scorsese',
      Writers:'Eric Roth',
      Stars:'Leonardo DiCaprio',
      disc:"When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.",
      triller:'https://imdb-video.media-imdb.com/vi784910105/1434659379400-8cjq25-1697547877645.mp4?Expires=1703190202&Signature=VxOSfw3G7PVBFuNMO8mz8SlNyqvR3aX20PqvwZf8slNTzxojYTjb5H62XBiBv4DWpnoC6j0PFvqyKPj5qxxj6lAe6mIhJX3OrWNn0SWQRsv9-0cG07Z~wUBzWjqOaiN033Jx3IvJ9wbJmrxJm3-1K1deFj8WVEjY5C2oxWyXm~jj4uLDSbKeRIHrjbU7Ri6yuc92kTx791~i6mXbqMV7bPwl4M2xfA6AQIit70pTuaryUvKQ8ErRxcWi9qJVDsydYdS1BX6ZAhMP~4yEtkruqBZeCUdXoQe43NKPAizbv3k1qhy7tAMsxqcBD5OccVmXEW-WvLPg49aKrUqwiHid9Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    },
    {
      name:'Oppenheimer',
      imageAlt: 'Image 1',
      bg: '../../assets/felms/f3b.jpg',
      poster: '../../assets/felms/f3p.jpg',
      logo:'../../assets/felms/f3l.png',
      date:'2023',
      Classification:'16+',
      duration:'3h',
      Genres:'Piography',
      DirectedBy:'Martin Scorsese',
      Writers:'Christopher Nolan',
      Stars:'Cillian Murphy',
      disc:"The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
      triller:'https://imdb-video.media-imdb.com/vi2053751833/1434659379400-8cjq25-1683541736696.mp4?Expires=1703191425&Signature=I9xgeAYviPJ3mkTrQxTuGYtWv8MlDbCQ2JhxoGaYHzrnh7tb347DSlm3eQBcF0FHRa~kf-ZImfVdYYeKNkTT~3~CGjswRdcpNyAu0XhTtMky4EyEpdIeX-JSI~tUMVqZ-m1oP1wDxOjp2ONCeZhQ00tL~3T~4sYdgS9KlLw1wF~-cZhypolG2AtW~vlUFfvGrWj0~Y1Pwzj0WID0ztlw3VK9jl9P7AckxrLYLLC1GshbjF49QqGwbwWpitrz5PrmStCaffgeWHX2kRC4smc-mPjOG~EtA6nx7cWWfQJqHNPg9BZpo03TuqB6zzWUs7PcnIcqQNtQuPtgHcOnU6kD4Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    },
    {
      name:'The Batman',
      imageAlt: 'Image 1',
      bg: '../../assets/felms/f4b.jpg',
      poster: '../../assets/felms/f4p.jpg',
      logo:'../../assets/felms/f4l.png',
      date:'2022',
      Classification:'PG-13',
      duration:'2h 56m',
      Genres:'Action . Crime',
      DirectedBy:'Matt Reeves',
      Writers:'Matt Reeves',
      Stars:'Robert Pattinson',
      disc:"When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
      triller:'https://imdb-video.media-imdb.com/vi3215114777/1434659379400-8cjq25-1649797798432.mp4?Expires=1703190998&Signature=KFYMnNfBZUQQHh5ymNiKwbhRJW7FwsOekRGm9F2JxneT03ztKwftVy1GdagBVvw-053f7MsszMdJxe7pT00HCQkrEMpJGSU~l6NXn9r7e6OZx1x4TbTOhXLYIkVVpuV7KMI1l6RWBbqwAn9zFG3DoTzozODpI9VoephGtX2MT5VyDjeX-LhCPn~owQxGs4LKnlLlMfljE28tbtL9Gb2rcl7JoIJtzYw~bKkgywib2sg8pW7PIZsXwg~-ufYLuFwMBf~Xf9vwzOnVenJJEpC5iUI51b4y-ycTSp0dzwca~O-fyk90~guk788pzX9uUJ4hR5vGkzEM5yY0d4gJftN~DA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    },
    {
      name:'Barbie',
      imageAlt: 'Image 1',
      bg: '../../assets/felms/f5b.jpg',
      poster: '../../assets/felms/f5p.jpg',
      logo:'../../assets/felms/f5l.png',
      date:'2023',
      Classification:'+12',
      duration:'1h 54m',
      Genres:'Adventure . Comedy',
      DirectedBy:'Greta Gerwig',
      Writers:'Greta Gerwig',
      Stars:'Margot Robbie',
      disc:"Barbie suffers a crisis that leads her to question her world and her existence.",
      triller:'https://imdb-video.media-imdb.com/vi945734681/1434659379400-8cjq25-1685031364799.mp4?Expires=1703192051&Signature=uavFvCmL2BfGXUTDlgKbIHb4jIBtelWoLDAqzYJSqkSLSY~UNlCz0ttAwS3buSxaFSD4Aimkez3hW3WGi4q4oC0PmlAOklncxtdGLgCNgfpUOPTUTjcR7OBsDNx3LGaS-s2hcHnLRTzb0fQvTC8HWyWr2Nq1ZP5x1cr9TX~-jZLTXjOIj6zh-fRlRTu1eyscXiGICj8-SdKSr9EGdp-iIqtOxmcFbgnRfLDjqooG1AR5zggftYZxGQUwwUvpRk6AqjWn8AvCsCw~IrfPf1CHjx09NfUdZ2Rh6jRC3UkqPjLCcKsmOOJ9vSQE91q7NBAs69stLZ-ZMTLIDtbsIip~Ow__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    },


  ];
  private images: any = new BehaviorSubject<any>([]);
  currentImages = this.images.asObservable();

  private Index: any = new BehaviorSubject<any>([]);
  currentIndex = this.Index.asObservable();

  updateFriendsChats() {
    let films = this.films;
    this.images.next(films);
  }
  updateIndex(i:Number) {
    this.Index.next(i);
  }
}
