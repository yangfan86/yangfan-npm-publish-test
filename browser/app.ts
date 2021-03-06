import helment from 'react-helmet';
import { TimeReporter } from '../shared/timeReporter'

let element = document.getElementById("content");
element.innerText += "The time is: ";
let span = document.createElement("span");
element.appendChild(span);

window.tests = 1

function printer(s: string): void {
    span.innerText = s;
}

let timeReporter = new TimeReporter(printer);
timeReporter.start();
