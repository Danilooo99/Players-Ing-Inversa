import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

  selectedValue: string = "";
  flag;
  myEditForm: FormGroup;
  playerRef:any;

  constructor(private playerService: PlayersService, private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private router: Router) { 
    this.myEditForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      surname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      age: [null, [Validators.required]], 
      position: [null, [Validators.required]],
      assists: [null, [Validators.required]],
      goals: [null, [Validators.required]],
      matchs: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayersById(id).subscribe( res => {
      this.playerRef = res
      this.myEditForm = this.formBuilder.group({
        name: [this.playerRef.name, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        surname: [this.playerRef.surname, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        age: [this.playerRef.age, [Validators.required]], 
        position: [this.playerRef.position, [Validators.required]],
        assists: [this.playerRef.assists, [Validators.required]],
        goals: [this.playerRef.goals, [Validators.required]],
        matchs: [this.playerRef.matchs, [Validators.required]],
      });

      var matchs = document.getElementById("matchs") as HTMLInputElement;
      var goals = document.getElementById("goals") as HTMLInputElement;
      var assists = document.getElementById("assists") as HTMLInputElement;
      this.selectedValue = this.playerRef.position;
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
    });
    
  }

  submit(e: Event) {
    var error = document.getElementById('error') as HTMLDivElement;
    var matchs = document.getElementById("matchs") as HTMLInputElement;
    var goals = document.getElementById("goals") as HTMLInputElement;
    var assists = document.getElementById("assists") as HTMLInputElement;
    e.preventDefault();
    if(!this.myEditForm.valid) {
      if(matchs.disabled){
        this.flag=true;
        this.myEditForm.addControl('matchs', new FormControl(null));
      }
      if(goals.disabled){
        this.flag=true;
        this.myEditForm.addControl('goals', new FormControl(null));
      }
      if(assists.disabled){
        this.flag=true;
        this.myEditForm.addControl('assists', new FormControl(null));
      }
      if(this.myEditForm.controls['name'].valid && this.myEditForm.controls['surname'].valid &&
        this.myEditForm.controls['age'].valid && this.flag){
          this.flag=false;
          const id = this.activeRoute.snapshot.paramMap.get('id');
          this.playerService.updatePlayer(this.myEditForm.value, id)
          this.router.navigate( ['/admin/list'] ); 
          return true; 
      } else {
        this.flag=false;
        error.innerHTML = "<p>Algunos campos son incorrectos</p>";
        return false;
      }
    } else {
      this.flag=false;
      const id = this.activeRoute.snapshot.paramMap.get('id');
      this.playerService.updatePlayer(this.myEditForm.value, id)
      this.router.navigate( ['/admin/list'] ); 
      return true;
    }
  }

  selected(e: Event){
    var matchs = document.getElementById("matchs") as HTMLInputElement;
    var goals = document.getElementById("goals") as HTMLInputElement;
    var assists = document.getElementById("assists") as HTMLInputElement;
    this.selectedValue = e.target['value'].trim();
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
