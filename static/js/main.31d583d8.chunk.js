(this["webpackJsonpledger-project"]=this["webpackJsonpledger-project"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),r=n(9),i=n.n(r),o=(n(14),n(7)),c=n(3),d=n(4),l=n(1),u=n(6),h=n(5),m=(n(15),n(16),n(17),n(18),n(19),n(20),n(0)),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).addThis=a.addThis.bind(Object(l.a)(a)),a}return Object(d.a)(n,[{key:"addThis",value:function(){this.props.add(this.props.personName)}},{key:"render",value:function(){return Object(m.jsx)("button",{className:"AddTag",onClick:this.addThis,children:Object(m.jsx)("div",{className:"AddTagName",children:this.props.personName})})}}]),n}(s.a.Component),j=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).removeThis=a.removeThis.bind(Object(l.a)(a)),a}return Object(d.a)(n,[{key:"removeThis",value:function(){this.props.remove(this.props.personName)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"name-tag",children:[Object(m.jsx)("div",{className:"name-tag-name",children:this.props.personName}),Object(m.jsx)("button",{className:"name-tag-remove-button",onClick:this.removeThis,children:"X"})]})}}]),n}(s.a.Component),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={transactionName:e.data.transactionName,amount:e.data.amount,personPaid:e.data.personPaid,personUsed:e.data.personsUsedItem},a.handleRemove=a.handleRemove.bind(Object(l.a)(a)),a.removeUser=a.removeUser.bind(Object(l.a)(a)),a.addUser=a.addUser.bind(Object(l.a)(a)),a}return Object(d.a)(n,[{key:"handleRemove",value:function(){this.props.removeData(this.props.numKey)}},{key:"removeUser",value:function(e){this.props.removePersonUsed(this.props.numKey,e)}},{key:"addUser",value:function(e){this.props.addPersonUsed(this.props.numKey,e)}},{key:"componentDidMount",value:function(){var e,t=Object(o.a)(this.props.ignorePerson);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.removeUser(n)}}catch(a){t.e(a)}finally{t.f()}}},{key:"render",value:function(){var e=this,t=this.props.validPersonList.slice();return Object(m.jsxs)("div",{className:"transaction-entry",owner:this.state.personPaid,children:[Object(m.jsxs)("div",{className:"UpperBox",children:[Object(m.jsxs)("div",{className:"TitleAndOwner",children:[Object(m.jsxs)("div",{className:"EntryName",children:["Item ",this.props.entryNum,": ",Object(m.jsx)("span",{children:this.state.transactionName})]}),Object(m.jsxs)("div",{className:"OwnedBy",children:["Paid By: ",Object(m.jsx)("span",{children:this.state.personPaid})]})]}),Object(m.jsxs)("div",{className:"PersonUsed",children:[this.props.data.personsUsedItem.map((function(n){return t=t.filter((function(e){return e!==n})),Object(m.jsx)(j,{personName:n,remove:e.removeUser})})),t.map((function(t){return Object(m.jsx)(p,{personName:t,add:e.addUser})}))]})]}),Object(m.jsxs)("div",{className:"AmountAndDelete",children:[Object(m.jsxs)("div",{className:"Amount",children:["$",Object(m.jsx)("span",{children:this.state.amount}),"  "]}),Object(m.jsx)("button",{onClick:this.handleRemove,children:"X"})]})]})}}]),n}(s.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return"paidFor"===this.props.record.type?Object(m.jsxs)("div",{className:"Record",transactionsign:"positive",children:[Object(m.jsx)("div",{className:"RecordNameAndShare",children:Object(m.jsx)("div",{className:"RecordTransactionName",children:this.props.record.transactionName})}),Object(m.jsx)("div",{className:"RecordAmountAndCross",children:Object(m.jsxs)("div",{className:"RecordAmount",children:["+",Math.round(100*this.props.record.amount)/100]})})]}):this.props.record.sharedWith>1?Object(m.jsxs)("div",{className:"Record",transactionsign:"negative",children:[Object(m.jsxs)("div",{className:"RecordNameAndShare",children:[Object(m.jsx)("div",{className:"RecordTransactionName",children:this.props.record.transactionName}),Object(m.jsxs)("div",{className:"SharedWith",children:[Object(m.jsxs)("div",{children:["Original: ",Object(m.jsx)("span",{children:Math.round(this.props.record.amount*this.props.record.sharedWith)})]}),Object(m.jsxs)("div",{children:["Shared with ",Object(m.jsx)("span",{children:this.props.record.sharedWith-1})," other people"]})]})]}),Object(m.jsx)("div",{className:"RecordAmountAndCross",children:Object(m.jsx)("div",{className:"RecordAmount",children:Math.round(100*this.props.record.amount)/100})})]}):Object(m.jsxs)("div",{className:"Record",transactionsign:"negative",children:[Object(m.jsx)("div",{className:"RecordNameAndShare",children:Object(m.jsx)("div",{className:"RecordTransactionName",children:this.props.record.transactionName})}),Object(m.jsx)("div",{className:"RecordAmountAndCross",children:Object(m.jsx)("div",{className:"RecordAmount",children:Math.round(100*this.props.record.amount)/100})})]})}}]),n}(s.a.Component),O=v;var f=function(e){return e.total>=0?Object(m.jsxs)("div",{className:"Total",children:[Object(m.jsxs)("div",{className:"TotalDescription",children:["Should ",Object(m.jsx)("span",{children:"Receive: "})]}),Object(m.jsx)("div",{className:"TotalAmount",children:e.total})]}):Object(m.jsxs)("div",{className:"Total",children:[Object(m.jsxs)("div",{className:"TotalDescription",children:["Should ",Object(m.jsx)("span",{children:"Pay: "})]}),Object(m.jsx)("div",{className:"TotalAmount",children:-e.total})]})},x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={Name:a.props.personName,Records:a.props.records,Total:0},a.getListOfRecords=a.getListOfRecords.bind(Object(l.a)(a)),a.getTotal=a.getTotal.bind(Object(l.a)(a)),a}return Object(d.a)(n,[{key:"getListOfRecords",value:function(){return this.props.records.map((function(e){return Object(m.jsx)(O,{record:e})}))}},{key:"getTotal",value:function(){var e=0;return this.props.records.map((function(t){if("number"!==typeof t.amount)return alert("ERROR: IndividiualTransaction.js getTotal(): record.amount is not a number"),!1;e+=t.amount})),e}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"IndividualTransaction",children:[Object(m.jsx)("div",{className:"PersonName",children:this.state.Name}),Object(m.jsx)("div",{className:"Records",children:this.getListOfRecords()}),Object(m.jsx)(f,{total:Math.round(100*this.getTotal())/100})]})}}]),n}(s.a.Component),N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={statements:a.props.statements},a}return Object(d.a)(n,[{key:"render",value:function(){return this.props.statements.map((function(e){return Object(m.jsx)(x,{personName:e.personName,records:e.records})}))}}]),n}(s.a.Component);function y(e){return"0"===e||"1"===e||"2"===e||"3"===e||"4"===e||"5"===e||"6"===e||"7"===e||"8"===e||"9"===e||"."===e||"$"===e}function g(e,t){if("("!==e[t]&&"\uff08"!==e[t])return!1;t++;for(var n="";void 0!==e[t];){var a=e[t];if(" "===a)t++;else{if(")"===a||"\uff09"===a)return n;if("("===a||"\uff08"===a)return!1;if("\n"===a)return!1;n+=a,t++}}return!1}function T(e,t){if(!y(e[t]))return!1;for(var n="";void 0!==e[t];){var a=e[t];if(y(a))n+=a,t++;else{if(" "!==a)return("("===a||"\uff08"===a)&&n;for(var s=t+1;;){if(" "!==e[s])return"("===e[s]||"\uff08"===e[s]?n:(y(e[s]),!1);s++}}}return!1}var P=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).removeThis=a.removeThis.bind(Object(l.a)(a)),a}return Object(d.a)(n,[{key:"removeThis",value:function(e){this.props.removeThis(this.props.newPersonName)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"new-person",children:[Object(m.jsx)("div",{className:"new-person-name",children:Object(m.jsx)("span",{children:this.props.newPersonName})}),Object(m.jsx)("button",{onClick:this.removeThis,children:"X"})]})}}]),n}(s.a.Component),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={textAreaText:"",personList:[]},a.handlePersonAdd=a.handlePersonAdd.bind(Object(l.a)(a)),a.handleTextAreaChange=a.handleTextAreaChange.bind(Object(l.a)(a)),a.removePerson=a.removePerson.bind(Object(l.a)(a)),a.handleEnterKey=a.handleEnterKey.bind(Object(l.a)(a)),a}return Object(d.a)(n,[{key:"handlePersonAdd",value:function(){var e=this,t=this.state.textAreaText;this.state.personList.includes(t.toUpperCase())?alert("Person to add already exist."):this.setState((function(e){return{textAreaText:"",data:e.personList.push(t.toUpperCase())}}),(function(){e.props.updatePersonList(e.state.personList)}))}},{key:"handleEnterKey",value:function(e){13===e.keyCode&&(e.preventDefault(),this.handlePersonAdd())}},{key:"handleTextAreaChange",value:function(e){this.setState({textAreaText:e.target.value})}},{key:"removePerson",value:function(e){this.setState((function(t){var n=t.personList.filter((function(t){return t!==e}));return this.props.updatePersonList(n),{personList:n}}))}},{key:"render",value:function(){var e=this;return this.props.isIgnore?Object(m.jsxs)("div",{className:"NameSelector name-selector-ignore",children:[Object(m.jsxs)("div",{className:"name-entry-prompt name-entry-prompt-ignore",children:["The following names will be ignored from all transcations. ",Object(m.jsx)("br",{}),"i.e. They did not use any of the ledger items. ",Object(m.jsx)("br",{}),"You can still add their names back to individual entries later. ",Object(m.jsx)("br",{})]}),Object(m.jsx)("div",{className:"name-entry-prompt",children:"Enter the names to ignore:"}),Object(m.jsxs)("div",{className:"name-entry",children:[Object(m.jsx)("textarea",{onChange:this.handleTextAreaChange,value:this.state.textAreaText,onKeyDown:this.handleEnterKey}),Object(m.jsx)("button",{className:"ledger-button",onClick:this.handlePersonAdd,children:Object(m.jsx)("span",{children:"+"})})]}),Object(m.jsx)("div",{className:"new-name-list",children:this.state.personList.map((function(t){return Object(m.jsx)(P,{newPersonName:t,removeThis:e.removePerson})}))})]}):Object(m.jsxs)("div",{className:"NameSelector",children:[Object(m.jsx)("div",{className:"name-entry-prompt",children:"Enter the names to look for:"}),Object(m.jsxs)("div",{className:"name-entry",children:[Object(m.jsx)("textarea",{onChange:this.handleTextAreaChange,value:this.state.textAreaText,onKeyDown:this.handleEnterKey}),Object(m.jsx)("button",{className:"ledger-button",onClick:this.handlePersonAdd,children:Object(m.jsx)("span",{children:"+"})})]}),Object(m.jsx)("div",{className:"new-name-list",children:this.state.personList.map((function(t){return Object(m.jsx)(P,{newPersonName:t,removeThis:e.removePerson})}))})]})}}]),n}(s.a.Component),A=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"MainTextAreaDiv",children:[Object(m.jsx)(k,{updatePersonList:this.props.updatePersonList,isIgnore:!1}),Object(m.jsx)(k,{updatePersonList:this.props.updateIgnorePerson,isIgnore:!0}),Object(m.jsxs)("div",{className:"main-text-area",children:[Object(m.jsx)("div",{className:"main-text-area-prompt",children:"Copy and Paste transcation record here:"}),Object(m.jsx)("textarea",{className:"MainTextArea",value:this.props.textAreaTextEntry,onChange:this.props.handleTextAreaChange})]}),Object(m.jsx)("button",{className:"SubmitButton ledger-button",onClick:this.props.handleSubmit,children:"Submit"})]})}}]),n}(s.a.Component),U=A;var C=function(e){return Object(m.jsxs)("div",{className:"AppHeader",children:[Object(m.jsx)("div",{className:"AppTitle",children:"Ledger App"}),Object(m.jsx)("div",{className:"AppSubTitle",children:"A React Application, Produced by Saber Athena"})]})},S=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).keyCount=0,a.personList=["Fox","Tommy","Rex"],a.state={personList:[],data:[],finaStatement:[],textEntry:"",ignorePerson:[]},a.updatePersonList=a.updatePersonList.bind(Object(l.a)(a)),a.updateIgnorePerson=a.updateIgnorePerson.bind(Object(l.a)(a)),a.getListFromData=a.getEntriesFromParseString.bind(Object(l.a)(a)),a.removeData=a.removeData.bind(Object(l.a)(a)),a.updateFinaStatement=a.updateFinaStatement.bind(Object(l.a)(a)),a.handleTextAreaChange=a.handleTextAreaChange.bind(Object(l.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(l.a)(a)),a.fromTransactionsToStatement=a.fromTransactionsToStatement.bind(Object(l.a)(a)),a.removePersonUsed=a.removePersonUsed.bind(Object(l.a)(a)),a.addPersonUsed=a.addPersonUsed.bind(Object(l.a)(a)),a}return Object(d.a)(n,[{key:"handleTextAreaChange",value:function(e){this.setState({textEntry:e.target.value})}},{key:"updatePersonList",value:function(e){this.setState({personList:e})}},{key:"updateIgnorePerson",value:function(e){this.setState({ignorePerson:e})}},{key:"handleSubmit",value:function(){var e;!1!==(e=function(e,t){for(var n=0,a=0,s=[],r=0,i=t.map((function(e){return e.toUpperCase()}));n<e.length;)if("\n"!==e[n]){for(var c="",d={transactionName:"",amount:"",personPaid:"",personsUsedItem:[],key:void 0},l="amount";"\n"!==e[n]&&n<e.length;){var u=e[n];if(y(u)){var h=T(e,n);if(!1!==h){if("amount"!==l)return alert("Line "+a+" ("+c+") : Expected '"+l+"' While received amount"),!1;d.amount=parseFloat(h),n+=h.length,l="player";continue}}if("("!==u&&"\uff08"!==u)"amount"===l&&(c+=u),n++;else{var m=g(e,n);if(!1===m)return void alert("Line "+a+" ("+c+") : Invalid Name format encountered after '('");if("player"!==l)return alert("Line "+a+" ("+c+") : Expected '"+l+"' While received name of person who paid"),!1;if(!i.includes(m.toUpperCase()))return alert("Line "+a+" ("+c+") : Encountered Unidentified Person: '"+m+"'"),!1;d.personPaid=m,n+=m.length+2,l="newline"}}if("amount"===l)return alert("Line "+a+" ("+c+") : Has no transaction amount"),!1;if("player"===l)return alert("Line "+a+" ("+c+") : Has no name of person paid. Please make sure the payer's name is wrapped in brackets. E.g. (John)"),!1;""===c&&alert("Line "+a+": Has no transaction name"),a++,d.transactionName=c.trim();var p,j=d.transactionName.toUpperCase(),b=!1,v=Object(o.a)(t);try{for(v.s();!(p=v.n()).done;){var O=p.value;j.includes(O.toUpperCase())&&(b=!0,d.personsUsedItem.push(O))}}catch(f){v.e(f)}finally{v.f()}!1===b&&(d.personsUsedItem=t),d.key=r,r++,s.push(d),n++}else n++,a++;return s}(this.state.textEntry,this.state.personList))&&this.setState({data:e})}},{key:"getEntriesFromParseString",value:function(){var e=this,t=0;return this.state.data.map((function(n){return t++,Object(m.jsx)(b,{data:n,validPersonList:e.state.personList,numKey:n.key,entryNum:t,ignorePerson:e.state.ignorePerson,removeData:e.removeData,removePersonUsed:e.removePersonUsed,addPersonUsed:e.addPersonUsed},n.key)}))}},{key:"updateFinaStatement",value:function(){var e=this.fromTransactionsToStatement();this.setState({finaStatement:Object(m.jsx)(N,{statements:e})})}},{key:"fromTransactionsToStatement",value:function(){var e,t=[],n=Object(o.a)(this.state.personList);try{for(n.s();!(e=n.n()).done;){var a=e.value,s={personName:a,records:[]};s.personName=a;var r,i=Object(o.a)(this.state.data);try{for(i.s();!(r=i.n()).done;){var c=r.value;c.personPaid.toUpperCase()===a.toUpperCase()&&s.records.push({transactionName:c.transactionName,amount:c.amount,type:"paidFor",sharedWith:void 0}),c.personsUsedItem.includes(a)&&s.records.push({transactionName:c.transactionName,amount:-c.amount/c.personsUsedItem.length,type:"used",sharedWith:c.personsUsedItem.length})}}catch(d){i.e(d)}finally{i.f()}t.push(s)}}catch(d){n.e(d)}finally{n.f()}return t}},{key:"removeData",value:function(e){this.setState((function(t){return{data:t.data.filter((function(t){return t.key!==e}))}}))}},{key:"removePersonUsed",value:function(e,t){this.setState((function(n){var a,s=n.data,r=Object(o.a)(s);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(i.key===e)for(var c=0;c<i.personsUsedItem.length;c++)if(i.personsUsedItem[c]===t){for(var d=[],l=0;l<i.personsUsedItem.length;l++)l!==c&&d.push(i.personsUsedItem[l]);return i.personsUsedItem=d,{data:s}}}}catch(u){r.e(u)}finally{r.f()}}))}},{key:"addPersonUsed",value:function(e,t){this.setState((function(n){var a,s=n.data,r=Object(o.a)(s);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(i.key===e&&!i.personsUsedItem.includes(t)){i.personsUsedItem.push(t);break}}}catch(c){r.e(c)}finally{r.f()}return{data:s}}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(C,{}),Object(m.jsx)(U,{handleTextAreaChange:this.handleTextAreaChange,handleSubmit:this.handleSubmit,textAreaTextEntry:this.state.textEntry,updatePersonList:this.updatePersonList,updateIgnorePerson:this.updateIgnorePerson}),Object(m.jsx)("div",{className:"TransactionList",children:this.getEntriesFromParseString(this.data)}),Object(m.jsx)("button",{className:"ledger-button update-button",onClick:this.updateFinaStatement,children:"UPDATE"}),Object(m.jsx)("div",{className:"FinaStatements",children:this.state.finaStatement})]})}}]),n}(s.a.Component);i.a.render(Object(m.jsx)(S,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.31d583d8.chunk.js.map