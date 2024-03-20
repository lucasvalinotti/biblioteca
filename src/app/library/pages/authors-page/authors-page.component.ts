import { Component } from '@angular/core';
import { Author } from '../../interfaces/author.interface';

@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html'
})
export class AuthorsPageComponent {
  public authors:Author[] = [
    {id:1, name:'George RR Martin', birthday: '20/09/1948', url: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/97/12/98/20510121.jpg'},
    {id:2, name:'JK Rowling', birthday: '31/07/1965', url: 'https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss.jpg'}
  ];
}
