import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  mensajes: string;
  public numeroConcatenar: string;
  numero1: number;
  numero2: number;
  operador: string;

  constructor(public toastController: ToastController) {
    this.numeroConcatenar='0.0';

  }
  raizCuadrada(){
    if(this.numeroConcatenar !== ''){
      this.numeroConcatenar =  Math.sqrt(parseFloat(this.numeroConcatenar)).toString();
    }
  }

  divicionParados(){
    if(this.numeroConcatenar !== ''){
      this.numeroConcatenar = (parseFloat(this.numeroConcatenar)/2).toString();
    }
  }

  eliminarUltimoOperador(){
    if(this.numeroConcatenar !== ''){
      this.numeroConcatenar = this.numeroConcatenar.split(this.operador)[0] + this.operador;
    }

  }

  eliminarUltimo(){
    if(this.numeroConcatenar !== ''){

        const texto: string = this.numeroConcatenar.toString();
        this.numeroConcatenar = texto.substring(0, texto.length - 1);
    }
  }
  cuadradonumero(){
    if(this.numeroConcatenar !== ''){
      this.numeroConcatenar =  Math.pow(parseFloat(this.numeroConcatenar),2).toString();
    }
  }
  generarOperacion(simbolo: string)
  {
    let resultado: number;

    if (simbolo ==='=')
    {
      this.numero2 = Number(this.numeroConcatenar);
      if(this.operador==='/')
      {
        resultado=this.numero1/this.numero2;
      }
      if(this.operador==='+')
      {
        resultado=this.numero1+this.numero2;
      }
      if(this.operador==='%')
      {
        resultado=this.numero1%this.numero2;
      }
      if(this.operador==='*')
      {
        resultado=this.numero1*this.numero2;
      }
      if(this.operador==='-')
      {
        resultado=this.numero1-this.numero2;
      }
      this.numeroConcatenar=resultado+'';
    } else {
      this.numero1 = Number(this.numeroConcatenar);
    this.operador=simbolo;
    this.numeroConcatenar='0.0';
    }

  }
concatenarNumero(numero: string)
{
  if(this.numeroConcatenar === '0.0')
  {
    this.numeroConcatenar=numero;
  } else {
  this.numeroConcatenar=this.numeroConcatenar + numero;
}
}
metodoC()
{
  this.numeroConcatenar='0.0';
}
}
