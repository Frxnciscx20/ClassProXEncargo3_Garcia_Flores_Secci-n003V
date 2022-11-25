import { Component } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: 'qr.page.html',
  styleUrls: ['qr.page.scss'],
})
export class QrPage {

  qrCodeString= 'Hola Mundo'; 
  scannedResult:any;
 

  constructor() {}

  usuario={
    nom:'',
  }

  generaScan(){
    this.qrCodeString= this.usuario.nom;
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }

}

