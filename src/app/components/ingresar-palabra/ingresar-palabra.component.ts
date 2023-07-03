import { Component, OnInit } from '@angular/core';
import { PalabraService } from 'src/app/providers/palabra.service';
import firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-ingresar-palabra',
  templateUrl: './ingresar-palabra.component.html',
  styleUrls: ['./ingresar-palabra.component.scss']
})
export class IngresarPalabraComponent implements OnInit {
  arrCoincidencias: string[] = [];
  arrAdivinar: string[] = [];
  intentos: string[] = [];
  imagen = [
    '../../../assets/images/img1.png',
    '../../../assets/images/img2.png',
    '../../../assets/images/img3.png',
    '../../../assets/images/img4.png',
    '../../../assets/images/img5.png',
    '../../../assets/images/img6.png',
    '../../../assets/images/img7.png',
  ];
  title = 'ahorcadoAngular';
  palabraAdivinar = '';
  letra = '';
  idx = 0;
  input = true;
  juegoTerminado = false;
  juegoGanado = false;

  constructor(private db: PalabraService) {}

  ngOnInit() {
    this.db.getConexion().then(() => {
      console.log('¡Conexión exitosa!');
    }).catch((err) => {
      console.log(err);
    });
  }

  guardarPalabra() {
    const palabra = this.palabraAdivinar.toLowerCase();
    const database = firebase.database();
    const palabrasRef = database.ref('palabras');

    palabrasRef.push(palabra);
    this.setPalabra(palabra);
  }

  setPalabra(palabra: string) {
    this.palabraAdivinar = palabra;
    this.arrAdivinar = palabra.split('');
    console.log(this.arrAdivinar);
    this.setArrAdivinar();
  }

  setArrAdivinar() {
    this.arrAdivinar.forEach((letra) => {
      this.arrCoincidencias.push('?');
    });
  }

  verificarLetra() {
    const letra = this.letra.toLowerCase();
    this.intentos.push(letra);
    let aciertos = 0;
    for (let i = 0; i < this.arrAdivinar.length; i++) {
      if (letra === this.arrAdivinar[i].toLowerCase()) {
        this.arrCoincidencias[i] = this.arrAdivinar[i];
        aciertos++;
      }
    }
    if (aciertos === 0) {
      this.vidas();
    }
    this.reset();
    this.gameOver();
  }

  vidas() {
    this.idx++;
    console.log(this.idx);
  }

  reset() {
    setTimeout(() => {
      this.letra = '';
    }, 50);
  }

  gameOver() {
    if (this.idx > 5) {
      this.juegoTerminado = true;
      this.input = false;
      this.ganarJuego();
    }
  }

  ganarJuego() {
    const ganar = !this.arrCoincidencias.includes('?');
    if (ganar) {
      this.input = false;
      this.juegoGanado = true;
    }
  }
}
