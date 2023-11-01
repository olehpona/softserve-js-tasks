let win = window.open("","aboba","width=300,height=300");
setTimeout(()=>{win.resizeTo(500,500)},2000);
setTimeout(()=>{win.moveTo(200,200)},4000);
setTimeout(()=>{win.close()},6000);