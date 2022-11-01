import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyects } from 'src/app/model/proyects';
import { ImageService } from 'src/app/service/image.service';
import { ProyectsService } from 'src/app/service/proyects.service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent implements OnInit {
  nombrePryct: string;
  descPryct: string;
  imgPryct: string;


  constructor(private pryctS: ProyectsService, private router: Router, private activatedRouter: ActivatedRoute, public ImageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyect = new Proyects(this.nombrePryct, this.descPryct, this.imgPryct);
    this.pryctS.save(proyect).subscribe(data => {
      alert("Proyecto agregado correctamente");
      this.router.navigate(['']);
    },err =>{
      alert("Fallo");
      this.router.navigate(['']);
    })
  }
}
