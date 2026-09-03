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

// ===============================
// GET FORM CONTROLS
// ===============================

get f() {

 
return this.bookingForm.controls;
 

}

// ===============================
// SUBMIT BOOKING
// ===============================

submitBooking(): void {

 
this.submitted = true;


// Stop if form is invalid

if (this.bookingForm.invalid) {

  this.bookingForm.markAllAsTouched();

  return;

}


// Get form values

const formValue = this.bookingForm.getRawValue();


// Create booking object

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


// Add booking to list

this.bookings.unshift(booking);


// Reset form

this.bookingForm.reset({

  fullName: '',

  phone: '',

  email: '',

  guests: '',

  date: '',

  time: '',

  specialRequest: ''

});


// Reset submitted state

this.submitted = false;
 

}

// ===============================
// DELETE BOOKING
// ===============================

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


