
export class FacebookLike {
    constructor(private _count: number, private _isSelected: boolean){

    }
    calculateCount(){
        this._count += (this._isSelected)? -1 : 1;
        this._isSelected = !this._isSelected;
        // if(this.isSelected){
        //     this.count = this.count + 1;
        // }
        // else
        //     this.count = this.count - 1;
        // return this.count;
    }
    get count(){
        return this._count
    }
    get state(){
        return this._isSelected;
    }
    // printCount(){
    //     console.log('likes count: '+this.calculateCount());
    // }
}
