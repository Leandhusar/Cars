import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarService} from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  cars = null;

  car = {
    id: null,
    description: null,
    price: null
  }

  constructor(private carsService: CarService){}

  ngOnInit(){
    this.recoverAll();
  }

  recoverAll(){
    this.carsService.recoverAll().subscribe(
      result => this.cars = result
    );
  }

  register(){
    this.carsService.register(this.car).subscribe(
      data => {
        if(data['result'] == 'OK'){
          alert(data['message']);
          this.recoverAll();
        }
      }
    );
  }

  shutDown(id){
    this.carsService.shutDown(id).subscribe(
      data => {
        if(data['result'] == 'OK'){
          alert(data['message']);
          this.recoverAll();
        }
      }
    );
  }

  modify(){
    this.carsService.modify(this.car).subscribe(
      data => {
        if(data['result'] == 'OK'){
          alert(data['message']);
          this.recoverAll();
        }
      }
    );
  }

  availableRegistres(){
    return true;
  }
}