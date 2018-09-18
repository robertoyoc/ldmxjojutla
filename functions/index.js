const functions = require('firebase-functions');

exports.sendContact = functions.database.ref('/mails/{contact_id}').onCreate(function(event) {
	let datos = event.val()

	const nodemailer = require('nodemailer');

	var smtpConfig = {
		host: 'smtp.gmail.com',
		port: 465,
		auth: {
			user: 'ldmxjojutla@gmail.com',
			pass: 'lideres23'
		}
	};

	var transporter = nodemailer.createTransport(smtpConfig);


	let remitente = '"Your Mailbot" <mailbot@ldmxjojutla.com>';

	let assunto = `Mensaje de ${datos.nombre}`
	let destinatarios = 'tomas.carbellido@gmail.com, roberto.yoc@talentics.mx' // lista de e-mails destinatarios separados por ,
	let cuerpoHtml = "hola";

	let header = `<h3>Nuevo mensaje de ${datos.nombre}</h3>`;
	let message = `<h6>Mensaje: </h6> <p> ${datos.mensaje}</p>`
	let footer = `<p>Ponte en contacto con ${datos.nombre} en su email: ${datos.correo}</p>`;
	let dnr = "<br><br><br><br><small>Por favor no respondas a este correo, se envía únicamente con fines informativos.</small>"
	cuerpoHtml = header + message + footer + dnr;

	let email = {
		from: remitente,
		to: destinatarios,
		subject: assunto,
		html: cuerpoHtml
	};
	return new Promise(function(resolve, reject) {
		transporter.sendMail(email, (error, info) => {
			if (error) {
				return reject(error);
			} else return resolve(info.messageId)
			// console.log('Mensaje enviado %s enviada a: %s', info.messageId, info.response);

		});


	})

});