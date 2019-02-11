
import { Component } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'Karina Widya Islamey';
  alamat = 'Jl. Taman Bunga Merak 2 No.48';

  tanggal = Date.now();

  hby: any[];
  constructor(private tableServ:TableService){}

  ngOnInit(){
    this.hby = this.tableServ.getKarina();
  }
}
