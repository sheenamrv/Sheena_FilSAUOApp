import { Component, Input } from '@angular/core';
import { Clubevent } from '../clubevent';
// import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-club-event',
  templateUrl: './club-event.component.html',
  styleUrls: ['./club-event.component.css']
})
export class ClubEventComponent {
  @Input() clubEvent!: Clubevent;

}
