import { constructorParametersDownlevelTransform } from '@angular/compiler-cli';
import { Component,OnInit } from '@angular/core';
import{MenuItem} from 'primeng/api';
import {SelectItem } from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';

interface Name{
  name:string,
}


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

        names:Name[];
        selectedName1:Name;

        constructor(){
          this.names=[

            {name:'Prouct'},
            {name:'region'},
            {name:'channel'}
            


          ],
          this.selectedName1=this.names[0];
        }

}