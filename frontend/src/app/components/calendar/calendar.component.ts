import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar, CalendarOptions, DateSelectArg, EventClickArg, EventInput } from '@fullcalendar/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import listPlugin from '@fullcalendar/list';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarService } from '../../core/services/calendar.service';
import { CalendarInterface } from '../../core/interfaces/calendar-interface';
import { INITIAL_EVENTS, createEventId } from '../../core/events/events';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule, ReactiveFormsModule, CommonModule, RouterOutlet ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})

export class CalendarComponent implements OnInit {


  public calendar?: Calendar;

  public modalService = inject(NgbModal);


  calendarOptions: CalendarOptions = {
    plugins: [ listPlugin, interactionPlugin, dayGridPlugin, timeGridPlugin,  ],
    initialView: 'dayGridMonth',
    events: [],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialEvents: INITIAL_EVENTS,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),

  };

  public event: CalendarInterface[] = [];

  constructor(
    public calendarService: CalendarService,
    public config: NgbModalConfig,
    public changeDetector: ChangeDetectorRef ){}

  ngOnInit(){
    this.calendarService.getListEvents().subscribe((data: CalendarInterface[]) => {
      const events: EventInput[] = data.map(event => ({
        id: String(event.id),
        title: event.title,
        start: new Date(event.start),

      }));
      this.calendarOptions.events = events;
    })
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Name of the event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`You want to delete the event '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
      this.calendarService.deleteEvent(Number(clickInfo.event.id)).subscribe(response => {
        alert('The event has been successfully deleted.');
      }, error => {
        alert('The event has been successfully deleted.');
        const eventInput: EventInput = {
          id: clickInfo.event.id,
          title: clickInfo.event.title,
          allDay: clickInfo.event.allDay
        };
        clickInfo.view.calendar.addEvent(eventInput);
      });
    }
  }

  handleEvents(events: CalendarInterface[]) {
    this.event = events;
    this.changeDetector.detectChanges();
  }

}


