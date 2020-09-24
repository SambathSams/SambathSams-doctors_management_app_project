import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../services/master/patient/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  getAll;
  getId;

  constructor(private service: PatientService) {
   }

  ngOnInit(): void {
    this.getAllData();
  }

  // tslint:disable-next-line: typedef
  getIdData(id) {
    this.getId = id;
  }

  // tslint:disable-next-line: typedef
  getAllData() {
    this.service.getAll().subscribe(res => {
        this.getAll = res.data;
      });
  }

  // tslint:disable-next-line: typedef
  deleteOne(id) {
    // alert('delete')
    this.service.deleteById(id).subscribe(res => {
      this.getId = undefined;
    });
    this.getAllData();
  }

}
