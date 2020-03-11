
const {resource} = require("hsd");
const GLUE4 = resource.GLUE4;
const NS = resource.NS;
const TXT = resource.TXT;
const Resource = resource.Resource;

const TLD = 'yourtld'; // Replace with your TLD
const IP = '24.234.233.24'; // Replace with your Nameserver IP

const r = new Resource();

const txt = new TXT();
txt.txt.push('hello world'); // Put what you want here
r.records.push(txt);

const ns = new NS();
ns.ns = 'ns1.' + TLD + '.';
r.records.push(ns);

const g4sub = new GLUE4();
g4sub.ns = 'ns1.' + TLD + '.'
g4sub.address = IP
r.records.push(g4sub);

const g4 = new GLUE4();
g4.ns = TLD + '.'
g4.address = IP
r.records.push(g4);

console.log(r.encode().toString('hex'));
console.log("^^^ Take this hex string and paste it into the advanced settings in the domain manager for your domain in Namebase")
