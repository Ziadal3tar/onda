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
      bg: './assets/felms/fib.jpg',
      poster: './assets/felms/f1p.jpg',
      logo:'./assets/felms/f1l.png',
      date:'2023',
      Classification:'R',
      duration:'2h 18m',
      Genres:'Drama',
      DirectedBy:'Sam Esmail',
      Writers:'Rumaan Alam',
      Stars:'Julia Roberts',
      disc:"Amanda and Clay's aspirational vacation with their teenage children is interrupted by the arrival of a middle aged man and his daughter who own the holiday home and who have fled an unprecedented blackout in the city.",
      triller:'./assets/video/Leave the World Behind.mp4',
    },
    {
      name:'Killers of the Flower Moon',
      imageAlt: 'Image 1',
      bg: './assets/felms/f2b2.jpeg',
      poster: './assets/felms/f2p.jpg',
      logo:'./assets/felms/f2l.png',
      date:'2023',
      Classification:'R',
      duration:'3h 26m',
      Genres:'Crime',
      DirectedBy:'Martin Scorsese',
      Writers:'Eric Roth',
      Stars:'Leonardo DiCaprio',
      disc:"When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.",
      triller:'./assets/video/Killers of the Flower Moon.mp4',
    },
    {
      name:'Oppenheimer',
      imageAlt: 'Image 1',
      bg: './assets/felms/f3b2.jpeg',
      poster: './assets/felms/f3p.jpg',
      logo:'./assets/felms/f3l.png',
      date:'2023',
      Classification:'16+',
      duration:'3h',
      Genres:'Piography',
      DirectedBy:'Martin Scorsese',
      Writers:'Christopher Nolan',
      Stars:'Cillian Murphy',
      disc:"The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
      triller:'./assets/video/Oppenheimer.mp4',
    },
    {
      name:'The Batman',
      imageAlt: 'Image 1',
      bg: './assets/felms/f4b2.png',
      poster: './assets/felms/f4p.jpg',
      logo:'./assets/felms/f4l.png',
      date:'2022',
      Classification:'PG-13',
      duration:'2h 56m',
      Genres:'Action',
      DirectedBy:'Matt Reeves',
      Writers:'Matt Reeves',
      Stars:'Robert Pattinson',
      disc:"When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
      triller:'./assets/video/The Batman.mp4',
    },
    {
      name:'Barbie',
      imageAlt: 'Image 1',
      bg: './assets/felms/f5b2.jpeg',
      poster: './assets/felms/f5p.jpg',
      logo:'./assets/felms/f5l.png',
      date:'2023',
      Classification:'+12',
      duration:'1h 54m',
      Genres:'Adventure',
      DirectedBy:'Greta Gerwig',
      Writers:'Greta Gerwig',
      Stars:'Margot Robbie',
      disc:"Barbie suffers a crisis that leads her to question her world and her existence.",
      triller:'./assets/video/barbi.mp4',
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
