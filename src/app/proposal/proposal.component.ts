import { Component, OnInit } from '@angular/core';
import { ProposalService, Company, Person } from './proposal.service';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  providers: [ProposalService],
  styleUrls: ['./proposal.component.scss'],
})
export class ProposalComponent implements OnInit {
  listElements: DataSource;
  selectedItems: any;
  companies: Company[];
  persons: Person[];
  labelLocation: string;
  readOnly: boolean;
  showColon: boolean;
  minColWidth: number;
  colCount: number;
  width: any;

  selectAllModeValue: string = 'page';
  selectionModeValue: string = 'single';

  constructor(private service: ProposalService) {
    this.labelLocation = 'top';
    this.readOnly = false;
    this.showColon = true;
    this.minColWidth = 300;
    this.colCount = 2;
    this.companies = service.getCompanies();
    this.persons = service.getPersons();
  }

  ngOnInit(): void {
    this.listElements = new DataSource({
      store: new ArrayStore({
        key: 'id',
        data: [
          { id: 0, text: 'First element' },
          { id: 1, text: 'Second element' },
          { id: 2, text: 'Third element' },
        ],
      }),
    });
  }
}
