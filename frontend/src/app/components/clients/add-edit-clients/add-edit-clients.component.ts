import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClientInterface } from '../../../core/interfaces/client-interface';
import { ClientService } from '../../../core/services/client.service';



@Component({
  selector: 'app-add-edit-client',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './add-edit-clients.component.html',
  styleUrl: './add-edit-clients.component.scss'
})
export class AddEditClientsComponent implements OnInit{
  form: FormGroup;
  operation: string = 'Add Client';
  id: number;

  constructor(
    private fb: FormBuilder,
    private _clientService:  ClientService,
    private router: Router,
    private aRouter: ActivatedRoute ) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      dni:['', Validators.required],
      birthdate:['', Validators.required],
      address: ['', Validators.required],
      postalcode: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(9)]],
    })

    this.id = Number(aRouter.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operation = 'Edit ';
      this.getClient(this.id);
    }
  }

  addClient() {
    if (this.form.valid) {
      const client: ClientInterface = {
        name: this.form.value.name,
        surname: this.form.value.surname,
        dni: this.form.value.dni,
        birthdate: this.form.value.birthdate,
        address: this.form.value.address,
        postalcode: this.form.value.postalcode,
        email: this.form.value.email,
        phone: this.form.value.phone
      };

      if (this.id !== 0) {
        client.id = this.id;
        this._clientService.updateClient(this.id, client).subscribe(
          () => {
            this.router.navigate(['/clients']);
          },
          error => {
            console.error('Error updating client:', error);
          }
        );
      } else {
        this._clientService.saveClient(client).subscribe(
          () => {
            this.router.navigate(['/clients']);
          },
          error => {
            console.error('Error saving client:', error);
          }
        );
      }
    }
  }

  getClient(id:number) {
    this._clientService.getClient(id).subscribe((data: ClientInterface) => {
      this.form.patchValue(data);

    });
  }

}




