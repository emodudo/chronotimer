import { Component } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {
  time: number = 0; // Tempo total em milissegundos
  interval: any;
  isRunning: boolean = false;
  hasStarted: boolean = false;

  // Inicia o cronômetro
  startTimer() {
    if (this.hasStarted) {
      this.resetTimer();
    } else {
      this.hasStarted = true;
      this.isRunning = true;
      this.interval = setInterval(() => {
        this.time += 10; // Incrementa o tempo em 10ms
      }, 10); // Intervalo de 10 milissegundos para maior precisão
    }
  }

  // Pausa ou retoma o cronômetro
  togglePauseResume() {
    if (this.isRunning) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => {
        this.time += 10;
      }, 10);
    }
    this.isRunning = !this.isRunning;
  }

  // Reseta o cronômetro
  resetTimer() {
    clearInterval(this.interval);
    this.time = 0;
    this.isRunning = false;
    this.hasStarted = false;
  }

  // Função para formatar o tempo em horas, minutos, segundos e milissegundos
  formatTime(): string {
    const milliseconds = this.time % 1000;
    const totalSeconds = Math.floor(this.time / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    // Formata os valores para garantir que tenham dois dígitos
    const formattedHours = this.pad(hours, 2);
    const formattedMinutes = this.pad(minutes, 2);
    const formattedSeconds = this.pad(seconds, 2);
    const formattedMilliseconds = this.pad(milliseconds, 3);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
  }

  // Função auxiliar para adicionar zeros à esquerda
  pad(num: number, size: number): string {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }
}
