import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  customers: any = [
    {
      id: 1001,
      idEmp: '10003',
      intime: '9:00 AM',
      outime: '10:12 PM',
      breaktime: '1h',
      worktime: '10h',
      overtime: '2h',
      absent: false,
      leave: false,
      accepted: false,
      msg: null,
      representative: {
        name: 'Abire Ghallabi',
        image: 'assets/images/profil/abire.jpg',
      },
    },
    {
      id: 1002,
      idEmp: '10004',
      country: {
        name: 'Algeria',
        code: 'dz',
      },
      intime: null,
      outime: null,
      breaktime: null,
      worktime: null,
      overtime: null,
      leave: true,
      accepted: false,
      absent: false,
      msg: 'Request Raised',
      representative: {
        name: 'test test',
        image: 'assets/images/profil/abire.jpg',
      },
    },
    {
      id: 1005,
      idEmp: '10006',
      intime: '9:00 AM',
      outime: '10:12 PM',
      breaktime: '1h',
      worktime: '10h',
      overtime: '2h',
      absent: false,
      leave: false,
      accepted: false,
      msg: null,
      representative: {
        name: 'Abire Ghallabi',
        image: 'assets/images/profil/abire.jpg',
      },
    },
    {
      id: 1003,
      idEmp: '10005',
      country: {
        name: 'Algeria',
        code: 'dz',
      },
      intime: null,
      outime: null,
      breaktime: null,
      worktime: null,
      overtime: null,
      leave: false,
      accepted: false,
      absent: true,
      msg: 'No Intimation',
      representative: {
        name: 'test test',
        image: 'assets/images/profil/abire.jpg',
      },
    },
    {
      id: 1002,
      idEmp: '10004',
      country: {
        name: 'Algeria',
        code: 'dz',
      },
      intime: null,
      outime: null,
      breaktime: null,
      worktime: null,
      overtime: null,
      leave: true,
      accepted: true,
      absent: false,
      msg: 'Request Raised',
      representative: {
        name: 'test test',
        image: 'assets/images/profil/abire.jpg',
      },
    },
  ];

  selectedCustomers!: any;

  representatives!: any;

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  iscolappse = false;

  constructor() {}

  ngOnInit() {
    this.loading = false;
    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return '';
      default:
        return '';
    }
  }
}
