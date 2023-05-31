import { Injectable } from '@angular/core';
import { Clubevent } from './clubevent';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  clubEventList : Clubevent [] = [
    {
      id: 1123456,
      name: "Sounds of Spring",
      description: "Join us for our last event of the semester! Play games and make friends!",
      eventDate: "April 6, 2023",
      photo: "assets/images/IMG-7313.JPG"
      
    },

    {
    id: 1223456,
    name: "Tinikling",
    description: "Learn how to dance the traditional folk dance, tinikling.",
    eventDate: "March 25, 2023",
    photo: "assets/images/IMG-7314.JPG"
    
    },

    {
      id: 1233456,
      name: "Tagalog Class",
      description: "Eager to learn tagalog? Join us and learn basic words and phrases.",
      eventDate: "February 9, 2023",
      photo: "assets/images/IMG-7315.JPG"
      
    },

    {
      id: 1234456,
      name: "Winter Wonderland",
      description: "Our first event of the sem will have ice breakers, games and prizes!",
      eventDate: "January 13, 2023",
      photo: "assets/images/IMG-7316.JPG"
      
    },
  
    {
      id: 1234556,
      name: "Bake Sale",
      description: "ome out and purchase some baked goods! All proceeds will be donated.",
      eventDate: "November 28, 2022",
      photo: "assets/images/IMG-7317.JPG"
      
    },

    {
      id: 1234566,
      name: "Lola's Birthday Bash",
      description: "Let's play some good old hide and seek!",
      eventDate: "October 28, 2022",
      photo: "assets/images/IMG-7318.JPG"
      
    }
    
  ]

  getAllEvents(): Clubevent[] {
    return this.clubEventList;
  }
  
  getEventById(id: number): Clubevent | undefined {
    return this.clubEventList.find(Clubevent => Clubevent.id === id);
  }


}
