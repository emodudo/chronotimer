import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.css']
})
export class RelogioComponent implements OnInit {
  secondHand: HTMLElement | null = null;
  minsHand: HTMLElement | null = null;
  hourHand: HTMLElement | null = null;

  ngOnInit(): void {
    // Inicializa as referências dos ponteiros
    this.secondHand = document.querySelector('.second-hand');
    this.minsHand = document.querySelector('.min-hand');
    this.hourHand = document.querySelector('.hour-hand');

    // Inicia o relógio
    this.setDate();
    setInterval(() => this.setDate(), 1000);
  }

  setDate(): void {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if (this.secondHand) {
      this.secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    if (this.minsHand) {
      this.minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    }

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    if (this.hourHand) {
      this.hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }
  }
}
