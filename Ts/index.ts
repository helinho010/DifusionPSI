class Punto {
    x: number;
    y: number;
    suma: number;

    constructor(num1:number, num2:number)
    {
        this.x=num1;
        this.y=num2;
        this.suma=0;
    }

    mostrarValores(n1:number, n2:number):number 
    {
        this.suma = n1 + n2 + this.x + this.y ;
        return this.suma;
    }
}

const p=new Punto(0,0);
//console.log(p.x-p.y);
//console.log("La suma de las cosas que enviaste es : \n");
alert("La suma de las cosas que enviaste es : \n" + p.mostrarValores(2,3));