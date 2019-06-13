import { Component,OnInit, Input } from '@angular/core';
 @Component({
    selector: 'star',
    templateUrl: './star.component.html'
})
export class StarComponent{
    @Input('Favourite') isFavourite: boolean;

    ngOnInit(){

    }

    onClick(){
        this.isFavourite = !this.isFavourite;
    }
}  