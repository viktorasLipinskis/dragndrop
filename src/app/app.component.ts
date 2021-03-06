import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  preserveWhitespaces: true,
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'dragndrop';
  menuItems = [
    {
      id: '0',
      name: 'Open',
      items: [
        {
          id: '0_1',
          name: 'Simple List',
          path: '/demo',
          icon:
            'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/1.png',
        },
        {
          id: '0_2',
          name: 'Proposal',
          path: '/proposal',
          icon:
            'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/1.png',
        },
      ],
    },
    {
      id: '1',
      name: 'Settings',
      items: [
        {
          id: '1_1',
          name: 'Item 1',
          path: '/settings',
        },
      ],
    },
    {
      id: '2',
      name: 'Help',
      items: [
        {
          id: '2_1',
          name: 'About',
          path: '/about',
        },
      ],
    },
  ];

  itemClick(data) {
    let item = data.itemData;

    if (item.path) {
      this.router.navigate([item.path]);
    }
  }
}
