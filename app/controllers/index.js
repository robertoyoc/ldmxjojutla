import Controller from '@ember/controller';
import {isEmpty} from '@ember/utils';

export default Controller.extend({
	actions: {
	  sendMail(nombre, correo, mensaje){
	  	if(isEmpty(nombre)){
	  		window.swal('Ouch!','Por favor escribe tu nombre', 'warning');
	  		return null
	  	}
	  	if(isEmpty(correo)){
	  		window.swal('Ouch!','Por favor escribe tu correo', 'warning');
	  		return null

	  	}
	  	if(isEmpty(mensaje)){
	  		window.swal('Ouch!','Por favor escribe un mensaje', 'warning');
	  		return null
	  	}
	  	this.store.createRecord('mail', {
	  		nombre: nombre,
	  		correo: correo,
	  		mensaje: mensaje
	  	}).save().then(()=>{
	  		window.swal('Listo!','Hemos recibido tu mensaje', 'success');
	  		this.set('nombre', undefined)
	  		this.set('correo', undefined)
	  		this.set('mensaje', undefined)
	  	})

	  }
	}
});
