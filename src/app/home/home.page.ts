import { Component } from '@angular/core';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public cameraService: CameraService) {}

}
