import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grammar-role',
  templateUrl: './grammar-role.component.html',
  styleUrls: ['./grammar-role.component.css']
})
export class GrammarRoleComponent {
  @Input() grammarRoleTitle:string = '';
  @Input() grammarRoleSubTitile:string = '';
  @Input() grammarMainText:string = '';
}
