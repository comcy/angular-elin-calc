import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  arrTen: number[] = [12, 33, 27, 44, 34, 31, 13, 7, 9, 66, 71, 54, 19];
  arrOne: number[] = [10, 20, 30, 40, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  signs: any[] = ["+", "-"];

  ten;
  one;
  sign;

  result: number;
  resultIs = { text: "", value: false };

  count: number = 0;

  ngOnInit() {
    this.getOne();
    this.getTen();
    this.getSigns();

    this.count++;
  }

  getTen(): void {
    this.ten = this.arrTen[Math.floor(Math.random() * this.arrTen.length)];
  }

  getOne(): void {
    this.one = this.arrOne[Math.floor(Math.random() * this.arrOne.length)];
  }

  getSigns(): void {
    this.sign = this.signs[Math.floor(Math.random() * this.signs.length)];
  }

  validate(): void {
    let res;

    console.log(">>>", this.resultIs);

    switch (this.sign) {
      case "+":
        res = this.ten + this.one;

        console.log(">>> ", res + "  +   " + this.result);

        if (res.isEqaul == this.result) {
          this.resultIs.text = "Ergebnis ist richtig!";
          this.resultIs.value = true;
        } else {
          this.resultIs.text = "Ergebnis ist falsch!";
          this.resultIs.value = false;
        }
        break;

      case "-":
        res = this.ten - this.one;
        console.log(">>> ", res + "  -   " + this.result);

        if (res == this.result) {
          this.resultIs.text = "Ergebnis ist richtig!";
          this.resultIs.value = true;
        } else {
          this.resultIs.text = "Ergebnis ist falsch!";
          this.resultIs.value = false;
        }
        break;
    }
  }

  next() {
    this.ngOnInit();
  }
}
