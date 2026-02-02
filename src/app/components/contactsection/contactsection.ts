import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contactsection',
  standalone: true,
  templateUrl: './contactsection.html',
  styleUrl: './contactsection.css',
})
export class Contactsection {

  sendEmail(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs.sendForm(
      environment.emailServiceId,
      environment.emailTemplateId,
      form,
      environment.emailPublicKey
    )
    .then(() => {
      return emailjs.send(
        environment.emailServiceId,
        environment.autoReplyTemplateId,
        {
          name: (form.querySelector('[name="firstname"]') as HTMLInputElement)?.value,
          email: (form.querySelector('[name="email"]') as HTMLInputElement)?.value,
        },
        environment.emailPublicKey
      );
    })
    .then(() => {
      
      alert("Submitted Succesfully");
      form.reset();
    })
    .catch(() => {
      alert('Failed to Send Message');
    })
  }
}
