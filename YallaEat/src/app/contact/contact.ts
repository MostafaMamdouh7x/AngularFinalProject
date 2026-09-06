import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  contact = { name: '', email: '', message: '' };

  sendMessage() {
    alert('Message Sent! We will contact you soon.');
    this.contact = { name: '', email: '', message: '' };
  }
}
