import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      //buttons: ['Cancel', 'Open Modal', 'Delete'] por defecto
      buttons: [
        {
        text: 'Ok!',
        //cssClass: 'clase personalizada' al manejarse como un objeto se tienen las mimas propiedades
        handler: () => { //accion que se dispara al dar clic
          console.log('clic en ok')
        }
        }, 
        {
          text: 'Cancelar',
          role: 'cancel', //este rol se puede buscar en la documentación permite volver sin un metodo
          cssClass: 'rojo' //tambien se le puede  
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1', //nombre de la variable con la cual se identifica la info
          type: 'text', //tipo de dato que va a recibir el input
          placeholder: 'Placeholder 1' //placeholder como en html
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph1',
          id: 'paragraph2',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01', //minima fecha permitida y abajo la maxima 
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date' //al no colocar el min y max recibe cualquier valor lo cual no es correcto 
        },
        {
          name: 'name6',
          type: 'number',
          min: -5, //al igual que la fecha se puede limitar con el valor minimo y maximo 
          max: 10
        },
        {
          name: 'name7',
          type: 'number' //sin limitante
        },
        {
          name: 'name8',
          type: 'password', //tipo password como en html
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass', //clase personalizada de css
          attributes: {
            maxlength: 4, //maxima cantidad de caracteres para la contraseña
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data:any ) => {
            //console.log('Confirm Ok'); por defecto
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }
}
