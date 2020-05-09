import { Component, OnInit } from '@angular/core';
import { CvPersonneService } from '../cv-personne.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { element } from 'protractor';

@Component({
  selector: 'app-rh-manager',
  templateUrl: './rh-manager.component.html',
  styleUrls: ['./rh-manager.component.css']
})
export class RhManagerComponent implements OnInit {
  Candidates = [];
  Enrolled = [];
  Fired = [];
  showValue = false;
  displayValue = 'none';
  constructor(private cvService : CvPersonneService) { }

  ngOnInit() {
    let listCand = this.cvService.listePersonnes;
    this.Candidates = this.cvService.filterPersonne(listCand, "candidat");
    console.log(this.Candidates);
    
    this.Enrolled = this.cvService.filterPersonne(listCand, "recrute");
    console.log(this.Enrolled);

    this.Fired = this.cvService.filterPersonne(listCand, "refuse");
    console.log(this.Fired);

  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      const p = event.item.data;
      p.status = event.container.element.nativeElement.classList[0];
      this.cvService.updatePersonne(p);
      }
  }

  showModal() {
    this.showValue = true;
    this.displayValue = 'block';
  }

  hideModal() {
    this.showValue = false;
    this.displayValue = 'none';
  }

}
