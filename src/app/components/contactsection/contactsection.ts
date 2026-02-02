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
    ).then(
      () => {
         emailjs.send(
          environment.emailServiceId,
          environment.autoReplyTemplateId,
          {
            name: (form.querySelector('[name="name"]') as HTMLInputElement)?.value,
            email: (form.querySelector('[name="email"]') as HTMLInputElement)?.value,
          },
          environment.emailPublicKey
        );
        alert('Form Submitted Successfully');
       form.reset();
      },
      () => {
        alert('Failed to Send Message');
      }
    );


  }
}
