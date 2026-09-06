import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface Book {

id: number;

fullName: string;

phone: string;

email: string;

guests: number;

date: string;

time: string;

specialRequest: string;

}

@Component({

selector: 'app-booking',

standalone: true,

imports: [
ReactiveFormsModule
],

templateUrl: './booking.html',

styleUrl: './booking.css'

})

export class Booking {

bookingForm: FormGroup;

bookings: Book[] = [];

submitted = false;

minDate: string;

constructor(
private fb: FormBuilder
) {

 
this.minDate = new Date()
  .toISOString()
  .split('T')[0];


this.bookingForm = this.fb.group({

  fullName: [
    '',
    [
      Validators.required,
      Validators.minLength(3)
    ]
  ],


  phone: [
    '',
    [
      Validators.required,
      Validators.pattern(/^[0-9+\-\s()]{8,20}$/)
    ]
  ],


  email: [
    '',
    [
      Validators.required,
      Validators.email
    ]
  ],


  guests: [
    '',
    [
      Validators.required
    ]
  ],


  date: [
    '',
    [
      Validators.required
    ]
  ],


  time: [
    '',
    [
      Validators.required
    ]
  ],


  specialRequest: [
    '',
    [
      Validators.maxLength(300)
    ]
  ]

});
 

}


get f() {

 
return this.bookingForm.controls;
 

}


submitBooking(): void {

 
this.submitted = true;




if (this.bookingForm.invalid) {

  this.bookingForm.markAllAsTouched();

  return;

}




const formValue = this.bookingForm.getRawValue();




const booking: Book = {

  id: Date.now(),

  fullName: formValue.fullName,

  phone: formValue.phone,

  email: formValue.email,

  guests: Number(formValue.guests),

  date: formValue.date,

  time: formValue.time,

  specialRequest: formValue.specialRequest || ''

};




this.bookings.unshift(booking);




this.bookingForm.reset({

  fullName: '',

  phone: '',

  email: '',

  guests: '',

  date: '',

  time: '',

  specialRequest: ''

});



this.submitted = false;
 

}


deleteBooking(id: number): void {

  const confirmed = confirm(
    'Are you sure you want to cancel this reservation?'
  );

  if (!confirmed) {
    return;
  }

  this.bookings = this.bookings.filter(
    booking => booking.id !== id
  );

}


}


