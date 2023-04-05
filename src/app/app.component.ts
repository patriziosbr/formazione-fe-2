import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'formazione-fe-2';
  persona = {
    nome : "Puccio",
    cognome: "Rossi",
    data_nascita: "06-08-1993",
    orario_nascita: "12:00"
  }
  date = new Date()
  dateLocale = this.date.toLocaleDateString("en-US")
  thisYear = new Date().getFullYear()
  personDate = new Date(this.persona.data_nascita);
  personYear = this.personDate.getFullYear()

  constructor(){}
  calcolapersona(objPersona:object) {
    let livedYears = this.thisYear - this.personYear; 
    console.log(livedYears, "anni"); //ok 30 anni!
    console.log(this.dateLocale);

    let todayMoment : moment.Moment = moment(this.dateLocale); //data successiva alla nascita (oggi)
    let personDateMoment : moment.Moment = moment(this.persona.data_nascita); //data nascita
    
    // ESEMPIO SEMPLICE
    // let todayMoment : moment.Moment = moment("06-09-1993"); //data successiva alla nascita (oggi)
    // let personDateMoment : moment.Moment = moment("06-08-1993"); //data nascita
    // ESEMPIO SEMPLICE

    let livedDays = todayMoment.diff(personDateMoment, 'days');
    let livedHours = livedDays*24;
    let minutesLived = livedHours*60;
    console.log(minutesLived, "minutes");
    console.log(livedHours, "hours");
        
  }
  ngOnInit(): void {
    this.calcolapersona(this.persona)
  }
}
