import { Component, inject } from '@angular/core';
import { ClubEventComponent } from '../club-event/club-event.component';
import { Clubevent } from '../clubevent';
import { EventsService } from '../events.service';
// import { CommonModule } from '@angular/common';
// import { ClubEventComponent } from '../club-event/club-event.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})



export class EventsComponent {
  clubEventList : Clubevent [] = []
  filteredEventList: Clubevent [] = [];
  EventsService: EventsService = inject(EventsService);

  constructor() {
    this.clubEventList = this.EventsService.getAllEvents();
    this.filteredEventList = this.clubEventList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredEventList = this.clubEventList;
    }
  
    else {
      
      this.filteredEventList = this.clubEventList.filter(
      clubEvent => clubEvent?.name.toLowerCase().includes(text.toLowerCase())
    );

    }

    // if (text) {
    //     this.filteredEventList.pop();
    // }
  
    // this.clubEventList = this.clubEventList.filter(
    //   clubEvent => clubEvent?.name.toLowerCase().includes(text.toLowerCase())
    // );

  }

}
