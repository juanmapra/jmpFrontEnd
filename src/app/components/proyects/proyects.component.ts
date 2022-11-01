import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyects } from 'src/app/model/proyects';
import { ImageService } from 'src/app/service/image.service';
import { ProyectsService } from 'src/app/service/proyects.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  proyects: Proyects[] = [];
  constructor(private proyectsS: ProyectsService, private tokenService: TokenService, route: Router, private ImageService: ImageService, private activatedRouter: ActivatedRoute) { }
  isLogged = false;

  ngOnInit(): void {
    this.uploadProyect();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  uploadProyect():void{
    this.proyectsS.list().subscribe(data =>{
      this.proyects = data;
    })
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectsS.delete(id).subscribe(data =>{
        this.uploadProyect();
      }, err =>{
        alert("No se pudo eliminar");
      })
    }
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.ImageService.uploadImage($event, name)
  }

}
