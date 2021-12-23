import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DashboardService } from '../services/dashboard-service/dashboard.service';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { configHelper } from '../configurations/configHelper';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public chartData: ChartDataSets[] = [{ data: [], label: 'Vendas', backgroundColor: '#62462B', borderColor: '#62462B', pointBorderColor: 'blue', pointBackgroundColor: 'blue' }];
  public chartType: ChartType = 'line';
  public chartLabels: Label[];
  public totalVendasMes = 0;
  public totalLucroMes;
  public totalVendidoMes;
  alteraMes: boolean = false;
  alteraAno: boolean = false;
  anoAnterior = new Date().getFullYear() - 1;;
  public totalVendasAno = 0;
  public totalLucroAno;
  public totalVendidoAno;

  public mes = 'Janeiro';
  public meses: Array<any>;
  public anos: Array<any>;
  teste = 'Janeiro'
  isDevice: boolean = this.platform.is("cordova");

  constructor(private dashBoardSrvc: DashboardService,
    private spinnerSrvc: SpinnerService,
    private platform: Platform
  ) { }

  ngOnInit() {
    // this.getTotalAno(10);
    this.meses = configHelper.meses;
    this.anos = configHelper.anos;
    this.dashBoardSrvc.getTotalMes(1).subscribe(response => {
      this.totalVendasMes = response[0].totalVendas;
      this.totalVendidoMes = response[0].totalVendido;
      this.totalLucroMes = response[0].totalLucro;
      console.log(response)
      this.spinnerSrvc.hide();
    })
    this.getTotalAno(this.anoAnterior)

  }

  getTotalMes(param) {
    this.verificaMes(param);
    this.dashBoardSrvc.getTotalMes(param).subscribe(response => {
      this.totalVendasMes = response[0].totalVendas;
      this.totalVendidoMes = response[0].totalVendido;
      this.totalLucroMes = response[0].totalLucro;
      this.alteraMes = false;
      this.spinnerSrvc.hide();
    })
  }

  getTotalAno(param) {
    this.anoAnterior = param;
    this.alteraAno = false;
    this.dashBoardSrvc.getTotalAno(param).subscribe(response => {
      this.spinnerSrvc.hide();
      this.totalVendasAno = response[0].total;
      this.totalVendidoAno = response[0].totalVendido;
      this.totalLucroAno = response[0].totalLucro;
      const { janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro } = response[0];

      this.chartLabels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
      this.chartData[0].data = [janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro]
    })
  }

  alterarMes() {
    this.alteraMes = true;
  }

  alterarAno() {
    this.alteraAno = true;
  }

  verificaMes(mes) {
    switch (mes) {
      case 1:
        this.mes = 'Janeiro';
        break;
      case 2:
        this.mes = 'Fevereiro';
        break;
      case 3:
        this.mes = 'Março';
        break;
      case 4:
        this.mes = 'Abril';
        break;
      case 5:
        this.mes = 'Maio';
        break;
      case 6:
        this.mes = 'Junho';
        break;
      case 7:
        this.mes = 'Julho';
        break;
      case 8:
        this.mes = 'Agosto';
        break;
      case 9:
        this.mes = 'Setembro';
        break;
      case 10:
        this.mes = 'Outubro';
        break;
      case 11:
        this.mes = 'Novembro';
        break;
      case 12:
        this.mes = 'Dezembro';
        break;
    }
  }

}


