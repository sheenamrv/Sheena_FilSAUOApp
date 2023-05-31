import { Component, Input } from '@angular/core';
import { Clubevent } from '../clubevent';

@Component({
  selector: 'app-club-event',
  templateUrl: './club-event.component.html',
  styleUrls: ['./club-event.component.css']
})
export class ClubEventComponent {
  @Input() clubEvent!: Clubevent;

}
