import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    contactForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
    ) { }

    ngOnInit() {
        this.contactForm = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(100)]],
            email: ['', Validators.required],
            message: ['', Validators.required],
        })
    }

    sendEmail() {
        
    }
}
