import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})
export class EditAboutmeComponent implements OnInit {
  persona: persona = null;
  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, public ImageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.details(id).subscribe(data =>{
      this.persona = data;
    },err =>{
      alert("Error al modificar el perfil");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.ImageService.url;
    this.personaService.update(id, this.persona).subscribe(data =>{
      this.router.navigate(['']);
    },err =>{
      alert("Error al modificar el perfil");
      this.router.navigate(['']);
    })
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.ImageService.uploadImage($event, name)
  }
}
