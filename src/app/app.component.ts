import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './convert.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name!: string;
  date!: string;
  amount!: number;
  height!: number;
  miles!: number;

  car={
    make:'Toyota',
    model:'camery',
    year:'2000'
  }
  
  onMilesChange(value:string)
  {
    this.miles=parseFloat(value);
  }

  onHeightChange(value:string)
  {
      this.height=parseFloat(value);
  }
  onNameChange(value:string)
  {
    this.name=value;
  }
  onDateChange(value:string)
  {
    this.date=value;
  }
  onAmountChange(value:string)
  {
    this.amount=parseFloat(value);
  }
}
