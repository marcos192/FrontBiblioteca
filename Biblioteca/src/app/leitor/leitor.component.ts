import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Leitor } from '../Models/leitor';
import { LeitorService } from '../service/leitor.service';

@Component({
  selector: 'app-leitor',
  templateUrl: './leitor.component.html',
  styleUrls: ['./leitor.component.css']
})
export class LeitorComponent implements OnInit 
{

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private leitorService: LeitorService
   // private leitor
  ) { }

  //Criar objeto do tipo leitor
  model: Leitor= new Leitor();

  //Criar um id para controlar o post ou o put
  id!: number;

  voltarParalista()
  {
    this.router.navigate(['/leitores']);
  }

  obterPorId(id:number)
  {
    //this.leitorService.ObterPorId(id).subscribe({
      //error: (e) => { console.log(e) },
      //next: (dados) => { this.model = dados },
    //});
  }

  ngOnInit(): void 
  {

   this.id = this.route.snapshot.params['id'];

   if(this.id)
   {
     this.obterPorId(this.id);
   }
  }

}
