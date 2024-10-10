import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { provideTranslocoScope } from '@jsverse/transloco';
import { NgbScrollSpyService } from '@ng-bootstrap/ng-bootstrap';

import { MessageBuilder } from 'webhook-discord';

import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [provideTranslocoScope({ scope: 'contact', alias: 'c' })],
})
export class ContactComponent {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private readonly _scrollSpy = inject(NgbScrollSpyService, { skipSelf: true });

  private _form: FormGroup;
  private _isError: boolean = false;
  private _isSent: boolean = false;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(
    private readonly _coreService: CoreService,
    private readonly _formBuilder: FormBuilder
  ) {
    this._form = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      message: ['', Validators.required],
    });
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public async onSubmit(): Promise<void> {
    // Reset the error and sent flags
    this._isError = false;
    this._isSent = false;

    // Mark all fields as touched
    this._form.markAllAsTouched();

    // If the form is invalid, stop the function
    if (this._form.invalid) {
      this._isError = true;
      return this._scrollSpy.scrollTo('contact');
    }

    // Get the different values from the form
    const { firstName, lastName, email, phone, message } = this._form.value;

    // Create the message to send
    const msg = new MessageBuilder()
      .setName(`${firstName} ${lastName}`)
      .setTitle('Nouveau message !')
      .setColor('#1de5ff')
      .addField('Email', email, true)
      .setDescription(message)
      .setTime();

    // Add the phone number if it is provided
    if (phone) {
      msg.addField('Phone', phone, true);
    }

    // Send the message to the discord webhook
    try {
      await this._coreService.logToDiscordWebhook(msg);
      this._isSent = true;
      this._form.reset();
    } catch (error) {
      this._isError = true;
    }

    // Scroll to the contact section
    this._scrollSpy.scrollTo('contact');
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get emailRequired(): boolean {
    return (
      this._form.get('email')?.errors?.['required'] &&
      this._form.get('email')?.touched
    );
  }

  public get emailInvalid(): boolean {
    return (
      this._form.get('email')?.errors?.['email'] &&
      this._form.get('email')?.touched
    );
  }

  public get firstNameRequired(): boolean {
    return (
      this._form.get('firstName')?.errors?.['required'] &&
      this._form.get('firstName')?.touched
    );
  }

  public get form(): FormGroup {
    return this._form;
  }

  public get isError(): boolean {
    return this._isError;
  }

  public get isSent(): boolean {
    return this._isSent;
  }

  public get lastNameRequired(): boolean {
    return (
      this._form.get('lastName')?.errors?.['required'] &&
      this._form.get('lastName')?.touched
    );
  }

  public get messageRequired(): boolean {
    return (
      this._form.get('message')?.errors?.['required'] &&
      this._form.get('message')?.touched
    );
  }
}
