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
  todayMoment : moment.Moment = moment(this.dateLocale);
  personDateMoment : moment.Moment = moment(this.persona.data_nascita);
  constructor(){}
  calcolapersona(objPersona:object) {
    // ESEMPIO SEMPLICE
    // let todayMoment : moment.Moment = moment("06-09-1993"); //data successiva alla nascita (oggi)
    // let personDateMoment : moment.Moment = moment("06-08-1993"); //data nascita
    // ESEMPIO SEMPLICE

    let livedYears = this.thisYear - this.personYear;
    let livedDays = this.todayMoment.diff(this.personDateMoment, 'days');
    let livedHours = livedDays*24;
    let minutesLived = livedHours*60;

    let printObj = {
      livedYears: livedYears,
      minutesLived : minutesLived,
      livedHours: livedHours
    }
    let printArr = [livedYears, minutesLived, livedHours];
    let printString = `questa persona ha vissuto ${livedYears} anni che corrispondo a ${minutesLived} minuti che corrispondo a ${livedHours} ore`;

    console.log(printObj, printArr, printString);
    

        
  }
  ngOnInit(): void {
    this.calcolapersona(this.persona)
  }
}
