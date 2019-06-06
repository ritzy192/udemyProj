
export class FacebookLike {
    constructor(private count: number, private state: boolean){

    }
    calculateCount(){
        if(this.state){
            this.count = this.count + 1;
        }
        else
            this.count = this.count - 1;
        return this.count;
    }
    printCount(){
        console.log(this.calculateCount());
    }
}
