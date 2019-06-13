import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
 @Component({
    selector: 'star',
    templateUrl: './star.component.html'
})
export class StarComponent{
    @Input('Favourite') isFavourite: boolean;
    @Output() change = new EventEmitter();

    ngOnInit(){

    }

    onClick(){
        this.isFavourite = !this.isFavourite;
        this.change.emit(this.isFavourite);
    }

}  