// import { Component } from '@angular/core';
import { Component, inject } from '@angular/core';
import { ClubEventComponent } from '../club-event/club-event.component';
import { Clubevent } from '../clubevent';
import { EventsService } from '../events.service';
import { ActivatedRoute } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { ClubEventComponent } from '../club-event/club-event.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
    eventId = -1;
    constructor() {
        this.eventId = Number(this.route.snapshot.params['id']);
    }
}
