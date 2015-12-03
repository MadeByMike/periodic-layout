# Periodic Table Layout

Generate a periodic table layout from an array.


```
var layout = require('periodic-layout');
var data = require('data/data.json');
var aspect = '3x4';

// Return rows in a nested array for a layout
var rows = layout(data, aspect);
```

---

data.json:
```
[
  ['AA'],
  ['BA','BB','BC','BD','BE','BF'],
  ['CA','CB','CC','CD','CE','CF','CG','CH','CI'],
  ['DA','DB','DC','DD','DE','DF','DG','DH','DI','DJ','DK','DL'],
  ['EA','EB','EC','ED','EE','EF','EG','EH','EI','EJ','EK','EL'],
  ['FA','FB','FC','FD','FE','FF','FG','FH','FI','FJ','FK','FL'],
  ['GA','GB','GC','GD','GE','GF','GG','GH','GI','GJ','GK','GL'],
  ['HA','HB','HC','HD','HE','HF','HG','HH','HI','HJ','HK','HL'],
  ['IA','IB','IC','ID','IE','IF','IG','IH','II','IJ','IK','IL'],
  ['JA','JB','JC','JD','JE'],
  ['KA','KB','KC','KD','KE','KF','KG','KH','KI','KJ'],
  ['LA','LB','LC','LD','LE','LF'],
  ['MA','MB','MC','MD','ME','MF','MG','MM','MI','MJ'],
];
```

`rows` after `layout()`:
```
[
 ["AA","","","","","","","","","","","","","","MB"],
 ["BA","CD","","","","","","","GJ","HG","IC","IK","KB","KJ","MC"],
 ["BB","CE","","","","","","","GK","HH","ID","IL","KC","LA","MD"],
 ["BC","CF","DD","DK","EF","FA","FH","GC","GL","HI","IE","JA","KD","LB","ME"],
 ["BD","CG","DE","DL","EG","FB","FI","GD","HA","HJ","IF","JB","KE","LC","MF"],
 ["BE","CH","DF","EA","EH","FC","FJ","GE","HB","HK","IG","JC","KF","LD","MG"],
 ["BF","CI","DG","EB","EI","FD","FK","GF","HC","HL","IH","JD","KG","LE","MM"],
 ["CA","DA","DH","EC","EJ","FE","FL","GG","HD","IA","II","JE","KH","LF","MI"],
 ["CB","DB","DI","ED","EK","FF","GA","GH","HE","IB","IJ","KA","KI","MA","MJ"],
 ["CC","DC","DJ","EE","EL","FG","GB","GI","HF","","","","","",""]
]
```

A quick and dirty layout function for demonstration purposes:

```
html = "<pre>";
rows.forEach(function(row){
	row.forEach(function(item){
		if(item !== ""){
			html+=' '+item+' ';
		} else {
      html+='    ';
    }
	});
	html+="\n";
});
html+= "</pre>";
```

Result:
```
  AA                                                      MB
  BA  CD                          GJ  HG  IC  IK  KB  KJ  MC
  BB  CE                          GK  HH  ID  IL  KC  LA  MD
  BC  CF  DD  DK  EF  FA  FH  GC  GL  HI  IE  JA  KD  LB  ME
  BD  CG  DE  DL  EG  FB  FI  GD  HA  HJ  IF  JB  KE  LC  MF
  BE  CH  DF  EA  EH  FC  FJ  GE  HB  HK  IG  JC  KF  LD  MG
  BF  CI  DG  EB  EI  FD  FK  GF  HC  HL  IH  JD  KG  LE  MM
  CA  DA  DH  EC  EJ  FE  FL  GG  HD  IA  II  JE  KH  LF  MI
  CB  DB  DI  ED  EK  FF  GA  GH  HE  IB  IJ  KA  KI  MA  MJ
  CC  DC  DJ  EE  EL  FG  GB  GI  HF
 ```
