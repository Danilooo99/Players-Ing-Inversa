import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersService } from '../../services/players.service';


@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {

  flag;
  myForm: FormGroup;
  selectedValue: string = "";

  constructor(private playerService: PlayersService, private formBuilder: FormBuilder, private router: Router) {
   }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      surname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      age: [null, [Validators.required]], 
      position: [null, [Validators.required]],
      assists: [null, [Validators.required]],
      goals: [null, [Validators.required]],
      matchs: [null, [Validators.required]],
    });
    
  }

  onSubmit(e: Event) {
    var error = document.getElementById('error') as HTMLDivElement;
    var matchs = document.getElementById("matchs") as HTMLInputElement;
    var goals = document.getElementById("goals") as HTMLInputElement;
    var assists = document.getElementById("assists") as HTMLInputElement;
    e.preventDefault();
    if(!this.myForm.valid) {
      if(matchs.disabled){
        this.flag=true;
        this.myForm.addControl('matchs', new FormControl(null));
      }
      if(goals.disabled){
        this.flag=true;
        this.myForm.addControl('goals', new FormControl(null));
      }
      if(assists.disabled){
        this.flag=true;
        this.myForm.addControl('assists', new FormControl(null));
      }
      if(this.myForm.controls['name'].valid && this.myForm.controls['surname'].valid &&
        this.myForm.controls['age'].valid && this.flag){
          this.flag=false;
          this.playerService.createPlayer(this.myForm.value);
          this.router.navigate( ['/admin/list'] );
          return true; 
      } else {
        this.flag=false;
        error.innerHTML = "<p>Algunos campos son incorrectos</p>";
        return false;
      }
    } else {
      this.flag=false;
      this.playerService.createPlayer(this.myForm.value);
      this.router.navigate( ['/admin/list'] );
      return true;
    }
  }

  selected(e: Event){
    var matchs = document.getElementById("matchs") as HTMLInputElement;
    var goals = document.getElementById("goals") as HTMLInputElement;
    var assists = document.getElementById("assists") as HTMLInputElement;
    this.selectedValue = e.target['value'].trim();
    alert(this.selectedValue);
    if(this.selectedValue.includes('Entrenador') || this.selectedValue.includes('Fisioterapeuta') || this.selectedValue.includes('Medico')
       || this.selectedValue.includes('Cuerpo tecnico') || this.selectedValue.includes('Directivo')){
      matchs.disabled = true;
      assists.disabled = true;
      goals.disabled = true;
    } else {
      matchs.disabled = false;
      assists.disabled = false; 
      goals.disabled = false;
    }
  }
  

}
