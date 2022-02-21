import { Component, OnInit } from '@angular/core';
//import { Server } from 'http';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPortFolioService:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortFolioService.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miPorfolio=data;
    });
  }

}
