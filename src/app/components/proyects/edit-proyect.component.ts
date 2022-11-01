import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { Proyects } from 'src/app/model/proyects';
import { ProyectsService } from 'src/app/service/proyects.service';
import { NewProyectComponent } from './new-proyect.component';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit {
  proyect: Proyects = null;

  constructor(private pryctS: ProyectsService, private activatedRouter: ActivatedRoute, private router: Router, public ImageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.pryctS.details(id).subscribe(data =>{
      this.proyect = data;
    }, err =>{
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyect.imgPryct = this.ImageService.url;
    this.pryctS.update(id, this.proyect).subscribe(data =>{
      this.router.navigate(['']);
    },err =>{
      alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    })
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.ImageService.uploadImage($event, name)
  }


}
