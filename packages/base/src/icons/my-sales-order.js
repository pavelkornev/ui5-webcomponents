import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://my-sales-order";
const d = "M478 269q11 14 11 33 0 23-12.5 37T434 358v21h-18v-20q-46-6-54-53l32-4q2 10 6 15.5t16 12.5v-52q-29-8-39-22.5T367 223q0-20 12.5-34t36.5-16v-13h18v13q24 2 35.5 13.5T484 216l-31 4q-3-13-19-20v48q35 11 44 21zm-62-69q-12 4-15.5 10t-3.5 11q0 7 3 11.5t16 10.5v-43zm37 123q6-7 6-16 0-8-4-13.5T434 283v49q15-3 19-9zm-47 93h32v64q0 14-9 23t-23 9H118q-14 0-23-9t-9-23V160l96-96h224q13 0 22.5 9t9.5 23v32h-32V96H215v64q0 14-9.5 23t-23.5 9h-64v288h288v-64zM310 32H54v384H23V32q0-14 9-23t22-9h288v32h-32zM150 448q0-24 6.5-37t18.5-19 30-7 41-1q24 0 42 1t30 7 18 19 6 37H150zm160-128q0 26-18.5 45T246 384q-26 0-45-19t-19-45 19-45 45-19q27 0 45.5 19t18.5 45z";

registerIcon(name, d);
