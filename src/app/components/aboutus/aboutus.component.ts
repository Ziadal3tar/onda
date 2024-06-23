import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class AboutusComponent {
  team: any[] = [
    {
      name: 'ziad almorsy',
      image: './assets/team/z2.jpg',
      gender: 'male',
    },
    {
      name: 'Sondos Mohammed',
      image: './assets/team/Sondos Mohammed.jpg',
      gender: 'female',
    },
    {
      name: 'Mohammed Yasser',
      image: './assets/team/Mohammed Yasser.jpg',
      gender: 'male',
    },
    {
      name: 'Nada Hani',
      image: './assets/team/Nada Hani.jpg',
      gender: 'female',
    },

    {
      name: 'Martina Raafat',
      image: './assets/team/Martina Raafat.jpg',
      gender: 'female',
    },

    {
      name: 'Muaz Haitham',
      image: './assets/team/Muaz Haitham.jpg',
      gender: 'male',
    },
    {
      name: 'Naglaa Sameh',
      image: './assets/team/Naglaa Sameh.jpg',
      gender: 'female',
    },
    {
      name: 'Abdelrahman Nasr',
      image: './assets/team/Abdelrahman Nasr.jpg',
      gender: 'male',
    },
    {
      name: 'Salma Mohsen',
      image: './assets/team/Salma Mohsen.jpg',
      gender: 'female',
    },
    {
      name: 'Ali hamed',
      image: './assets/team/Ali Hamad.jpg',
      gender: 'male',
    },
    {
      name: 'Malak Mohammed',
      image: './assets/team/anonymous_avatars_grey_circles.jpg',
      gender: 'female',
    },
  ];
}
