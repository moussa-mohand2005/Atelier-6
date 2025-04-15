class Point {
    private abs: number;
    private ord: number;

    constructor(abs:number,ord:number) {
        this.abs=abs;
        this.ord=ord;
    }
    getabs():number {
        return this.abs;
    }
    setabs(abs:number):void {
        this.abs=abs;
    }
    getord():number {
        return this.ord;
    }
    setord(ord:number):void {
        this.ord=ord;
    }
    calculerDistance(p: Point):number {
        return (Math.sqrt(Math.pow(this.abs-p.getabs(),2)+Math.pow(this.ord-p.getord(),2)));
    }
}
var p1=new Point(1,2); 
var p2=new Point(3,4); 
console.log(p1.calculerDistance(p2));
