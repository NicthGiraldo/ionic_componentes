import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon:'menu-outline',
      name:'action',
      redirectTo:'/action'
    },
    {
      icon:'boat-outline',
      name:'alert',
      redirectTo:'/alert'
    },
    {
      icon:'bonfire-outline',
      name:'buttons',
      redirectTo:'/buttons'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
