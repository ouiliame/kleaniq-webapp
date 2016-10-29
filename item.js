import {observable, autorun} from 'mobx';

var a = observable([1, 2]);

autorun(() => console.log(a.length));

a.push(1);
