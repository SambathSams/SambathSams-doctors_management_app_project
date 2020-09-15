import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/master/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DoctorComponent } from './components/master/doctor/doctor.component';
import { ReceptionistComponent } from './components/master/receptionist/receptionist.component';
import { RoomComponent } from './components/master/room/room.component';


import { AuthGuard } from './services/auth/auth.guard';
import { LocationSettingsComponent } from './components/master/settings/location-settings/location-settings.component';
import { SpecializationSettingsComponent } from './components/master/settings/specialization-settings/specialization-settings.component';
import { ConditionSettingsComponent } from './components/master/settings/condition-settings/condition-settings.component';
import { SidebarSettingsComponent } from './components/master/settings/sidebar-settings/sidebar-settings.component';
import { AddSpecializationComponent } from './components/master/settings/specialization-settings/add-specialization/add-specialization.component';
import { EditSpecializationComponent } from './components/master/settings/specialization-settings/edit-specialization/edit-specialization.component';
import { ViewSpecializationComponent } from './components/master/settings/specialization-settings/view-specialization/view-specialization.component';
import { AddConditionComponent } from './components/master/settings/condition-settings/add-condition/add-condition.component';
import { EditConditionComponent } from './components/master/settings/condition-settings/edit-condition/edit-condition.component';
import { ViewConditionComponent } from './components/master/settings/condition-settings/view-condition/view-condition.component';
import { AddTimingComponent } from './components/master/settings/timing-settings/add-timing/add-timing.component';
import { EditTimingComponent } from './components/master/settings/timing-settings/edit-timing/edit-timing.component';
import { ViewTimingComponent } from './components/master/settings/timing-settings/view-timing/view-timing.component';
import { TimingSettingsComponent } from './components/master/settings/timing-settings/timing-settings.component';
import { AddLocationComponent } from './components/master/settings/location-settings/add-location/add-location.component';
import { EditLocationComponent } from './components/master/settings/location-settings/edit-location/edit-location.component';
import { ViewLocationComponent } from './components/master/settings/location-settings/view-location/view-location.component';
import { ClinicComponent } from './components/master/clinic/clinic.component';
import { AddClinicComponent } from './components/master/clinic/add-clinic/add-clinic.component';
import { ViewClinicComponent } from './components/master/clinic/view-clinic/view-clinic.component';
import { EditClinicComponent } from './components/master/clinic/edit-clinic/edit-clinic.component';
import { EditRoomComponent } from './components/master/room/edit-room/edit-room.component';
import { ViewRoomComponent } from './components/master/room/view-room/view-room.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DoctorComponent,
    ReceptionistComponent,
    RoomComponent,
    LocationSettingsComponent,
    SpecializationSettingsComponent,
    ConditionSettingsComponent,
    SidebarSettingsComponent,
    AddSpecializationComponent,
    EditSpecializationComponent,
    ViewSpecializationComponent,
    AddConditionComponent,
    EditConditionComponent,
    ViewConditionComponent,
    AddTimingComponent,
    EditTimingComponent,
    ViewTimingComponent,
    TimingSettingsComponent,
    AddLocationComponent,
    EditLocationComponent,
    ViewLocationComponent,
    ClinicComponent,
    AddClinicComponent,
    ViewClinicComponent,
    EditClinicComponent,
    EditRoomComponent,
    ViewRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
