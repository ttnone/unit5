const url='https://randomuser.me/api/?results=12&inc=picture,name,location,email,dob,cell&format=json';
const fu = document.getElementById("card-img-container");
const btn = document.getElementById("so");
function work(url) {
    const teto =  new XMLHttpRequest();
    teto.open("GET",url);
    teto.onload= ()=>{
        if ( teto.status ==200){
           var xmpaper =JSON.parse(teto.responseText);
           return callback(xmpaper);
    //creates access to the url array;
	       const nf0 =Object.values(xmpaper.results[0].name.first);
         const nL0=Object.values(xmpaper.results[0].name.last);
		 const lc0=Object.values(xmpaper.results[0].location.city);
		 const ls0=Object.values(xmpaper.results[0].location.state);
		 const lst0=Object.values(xmpaper.results[0].location.street);
		 const lp0=Object.values(xmpaper.results[0].location.postcode);
		 const e0=Object.values(xmpaper.results[0].email);
		 const c0=Object.values(xmpaper.results[0].cell);
		 const db0=Object.values(xmpaper.results[0].dob);
		 
		   const nf1 =Object.values(xmpaper.results[1].name.first);
         const nl1=Object.values(xmpaper.results[1].name.last);
		 const lc1=Object.values(xmpaper.results[1].location.city);
		 const ls1=Object.values(xmpaper.results[1].location.state);
		 const lst1=Object.values(xmpaper.results[1].location.street);
		 const lp1=Object.values(xmpaper.results[1].location.postcode);
		 const e1=Object.values(xmpaper.results[1].email);
		 const c1=Object.values(xmpaper.results[1].cell);
		 const db1=Object.values(xmpaper.results[1].dob);
		 
		   const nf2 =Object.values(xmpaper.results[2].name.first);
         const nl2=Object.values(xmpaper.results[2].name.last);
		 const lc2=Object.values(xmpaper.results[2].location.city);
		 const ls2=Object.values(xmpaper.results[2].location.state);
		 const lst2=Object.values(xmpaper.results[2].location.street);
		 const lp2=Object.values(xmpaper.results[2].location.postcode);
		 const e2=Object.values(xmpaper.results[2].email);
		 const c2=Object.values(xmpaper.results[2].cell);
		 const db2=Object.values(xmpaper.results[2].dob);
		 
		   const nf3=Object.values(xmpaper.results[3].name.first);
         const nl3=Object.values(xmpaper.results[3].name.last);
		 const lc3=Object.values(xmpaper.results[3].location.city);
		 const ls3=Object.values(xmpaper.results[3].location.state);
		 const lst3=Object.values(xmpaper.results[3].location.street);
		 const lp3=Object.values(xmpaper.results[3].location.postcode);
		 const e3=Object.values(xmpaper.results[3].email);
		 const c3=Object.values(xmpaper.results[3].cell);
		 const db3=Object.values(xmpaper.results[3].dob);
		 
		   const nf4 =Object.values(xmpaper.results[4].name.first);
         const nl4=Object.values(xmpaper.results[4].name.last);
		 const lc4=Object.values(xmpaper.results[4].location.city);
		 const ls4=Object.values(xmpaper.results[4].location.state);
		 const lst4=Object.values(xmpaper.results[4].location.street);
		 const lp4=Object.values(xmpaper.results[4].location.postcode);
		 const e4=Object.values(xmpaper.results[4].email);
		 const c4=Object.values(xmpaper.results[4].cell);
		 const db4=Object.values(xmpaper.results[4].dob);
		 
		   const nf5=Object.values(xmpaper.results[5].name.first);
         const nl5=Object.values(xmpaper.results[5].name.last);
		 const lc5=Object.values(xmpaper.results[5].location.city);
		 const ls5=Object.values(xmpaper.results[5].location.state);
		 const lst5=Object.values(xmpaper.results[5].location.street);
		 const lp5=Object.values(xmpaper.results[5].location.postcode);
		 const e5=Object.values(xmpaper.results[5].email);
		 const c5=Object.values(xmpaper.results[5].cell);
		 const db5=Object.values(xmpaper.results[5].dob);
		 
		   const nf6 =Object.values(xmpaper.results[6].name.first);
         const nl6=Object.values(xmpaper.results[6].name.last);
		 const lc6=Object.values(xmpaper.results[6].location.city);
		 const ls6=Object.values(xmpaper.results[6].location.state);
		 const lst6=Object.values(xmpaper.results[6].location.street);
		 const lp6=Object.values(xmpaper.results[6].location.postcode);
		 const e6=Object.values(xmpaper.results[6].email);
		 const c6=Object.values(xmpaper.results[6].cell);
		 const db6=Object.values(xmpaper.results[6].dob);
		 
		   const nf7=Object.values(xmpaper.results[7].name.first);
         const nl7=Object.values(xmpaper.results[7].name.last);
		 const lc7=Object.values(xmpaper.results[7].location.city);
		 const ls7=Object.values(xmpaper.results[7].location.state);
		 const lst7=Object.values(xmpaper.results[7].location.street);
		 const lp7=Object.values(xmpaper.results[7].location.postcode);
		 const e7=Object.values(xmpaper.results[7].email);
		 const c7=Object.values(xmpaper.results[7].cell);
		 const db7=Object.values(xmpaper.results[7].dob);
		 
		   const nf8 =Object.values(xmpaper.results[8].name.first);
         const nl8=Object.values(xmpaper.results[8].name.last);
		 const lc8=Object.values(xmpaper.results[8].location.city);
		 const ls8=Object.values(xmpaper.results[8].location.state);
		 const lst8=Object.values(xmpaper.results[8].location.street);
		 const lp8=Object.values(xmpaper.results[8].location.postcode);
		 const e8=Object.values(xmpaper.results[8].email);
		 const c8=Object.values(xmpaper.results[8].cell);
		 const db8=Object.values(xmpaper.results[8].dob);
		 
		   const nf9=Object.values(xmpaper.results[9].name.first);
         const nl9=Object.values(xmpaper.results[9].name.last);
		 const lc9=Object.values(xmpaper.results[9].location.city);
		 const ls9=Object.values(xmpaper.results[9].location.state);
		 const lst9=Object.values(xmpaper.results[9].location.street);
		 const lp9=Object.values(xmpaper.results[9].location.postcode);
		 const e9=Object.values(xmpaper.results[9].email);
		 const c9=Object.values(xmpaper.results[9].cell);
		 const db9=Object.values(xmpaper.results[9].dob);
		 
		   const nf10 =Object.values(xmpaper.results[10].name.first);
         const nln10=Object.values(xmpaper.results[10].name.last);
		 const lc10=Object.values(xmpaper.results[10].location.city);
		 const ls10=Object.values(xmpaper.results[10].location.state);
		 const lst10=Object.values(xmpaper.results[10].location.street);
		 const lp10=Object.values(xmpaper.results[10].location.postcode);
		 const e10=Object.values(xmpaper.results[10].email);
		 const c10=Object.values(xmpaper.results[10].cell);
		 const db10=Object.values(xmpaper.results[10].dob);
		 
		  const nf11 =Object.values(xmpaper.results[11].name.first);
         const nLa1=Object.values(xmpaper.results[11].name.last);
		 const lc11=Object.values(xmpaper.results[11].location.city);
		 const ls11=Object.values(xmpaper.results[11].location.state);
		 const lst11=Object.values(xmpaper.results[11].location.street);
		 const lp11=Object.values(xmpaper.results[11].location.postcode);
		 const e11=Object.values(xmpaper.results[11].email);
		 const c11=Object.values(xmpaper.results[11].cell);
		 const db11=Object.values(xmpaper.results[11].dob);
		 
    //creates join
        const gnf0 =nf0.join("");
		const gnL0 =nL0.join("");
		const glc0 =lc0.join("");
		const gls0 =ls0.join("");
		const glst0=lst0.join("");
		const glp0 =lp0.join("");
		const  ge0= e0.join("");
        const  gc0=c0.join("");
        const  gdb0=db0.join("");

        const gnf1 =nf1.join("");
		const gnl1 =nl1.join("");
		const glc1 =lc1.join("");
		const gls1 =ls1.join("");
		const glst1=lst1.join("");
		const glp1 =lp1.join("");
		const  ge1= e1.join("");
        const  gc1=c1.join("");
        const  gdb1=db1.join("");			
		
		 const gnf2 =nf2.join("");
		const gnl2 =nl2.join("");
		const glc2 =lc2.join("");
		const gls2 =ls2.join("");
		const glst2=lst2.join("");
		const glp2 =lp2.join("");
		const  ge2= e2.join("");
        const  gc2=c2.join("");
        const  gdb2=db2.join("");	
		
		 const gnf3 =nf3.join("");
		const gnl3 =nl3.join("");
		const glc3 =lc3.join("");
		const gls3 =ls3.join("");
		const glst3=lst3.join("");
		const glp3 =lp3.join("");
		const  ge3= e3.join("");
        const  gc3=c3.join("");
        const  gdb3=db3.join("");	
		
		 const gnf4 =nf4.join("");
		const gnl4 =nl4.join("");
		const glc4 =lc4.join("");
		const gls4 =ls4.join("");
		const glst4=lst4.join("");
		const glp4 =lp4.join("");
		const  ge4= e4.join("");
        const  gc4=c4.join("");
        const  gdb4=db4.join("");	
		
		 const gnf5 =nf5.join("");
		const gnl5 =nl5.join("");
		const glc5 =lc5.join("");
		const gls5 =ls5.join("");
		const glst5=lst5.join("");
		const glp5 =lp5.join("");
		const  ge5= e5.join("");
        const  gc5=c5.join("");
        const  gdb5=db5.join("");	
		
		 const gnf6 =nf6.join("");
		const gnl6 =nl6.join("");
		const glc6 =lc6.join("");
		const gls6 =ls6.join("");
		const glst6=lst6.join("");
		const glp6 =lp6.join("");
		const  ge6= e6.join("");
        const  gc6=c6.join("");
        const  gdb6=db6.join("");	
		
		 const gnf7 =nf7.join("");
		const gnl7 =nl7.join("");
		const glc7 =lc7.join("");
		const gls7 =ls7.join("");
		const glst7=lst7.join("");
		const glp7 =lp7.join("");
		const  ge7= e7.join("");
        const  gc7=c7.join("");
        const  gdb7=db7.join("");	
		
		 const gnf8 =nf8.join("");
		const gnl8 =nl8.join("");
		const glc8 =lc8.join("");
		const gls8 =ls8.join("");
		const glst8=lst8.join("");
		const glp8 =lp8.join("");
		const  ge8= e8.join("");
        const  gc8=c8.join("");
        const  gdb8=db8.join("");	
		
		 const gnf9 =nf9.join("");
		const gnl9 =nl9.join("");
		const glc9 =lc9.join("");
		const gls9 =ls9.join("");
		const glst9=lst9.join("");
		const glp9 =lp9.join("");
		const  ge9= e9.join("");
        const  gc9=c9.join("");
        const  gdb9=db9.join("");
       
	   const gnf10 =nf10.join("");
		const gnln10 = nln10.join("");
		const glc10 =lc10.join("");
		const gls10 =ls10.join("");
		const glst10=lst10.join("");
		const glp10 =lp10.join("");
		const  ge10= e10.join("");
        const  gc10=c10.join("");
        const  gdb10=db10.join("");	

        const gnf11 =nf11.join("");
		const gnLa1 =nLa1.join("");
		const glc11 =lc11.join("");
		const gls11 =ls11.join("");
		const glst11=lst11.join("");
		const glp11 =lp11.join("");
		const  ge11= e11.join("");
        const  gc11=c11.join("");
        const  gdb11=db11.join("");	
		
	   
        	const px = document.getElementsByClassName("card-img")[0];
			const inerdiv = document.getElementsByClassName("card-info-container")[0];
			
             
	   
		// the arrays 
		var arrnaf =[gnf0,gnf1,gnf2,gnf3,gnf4,gnf5,gnf6,gnf7,gnf8,gnf9,gnf10,gnf11];
		var arrnl =[gnL0,gnl1,gnl2,gnl3,gnl4,gnl5,gnl6,gnl7,gnl8,gnl9,gnln10,gnLa1];
		var arrlc =[glc0,glc1,glc2,glc3,glc4,glc5,glc6,glc7,glc8,glc9,glc10,glc11];
		var arrls =[gls0,gls1,gls2,gls3,gls4,gls5,gls6,gls7,gls8,gls9,gls10,gls11];
		var arrlst = [glst0,glst1,glst2,glst3,glst4,glst5,glst6,glst7,glst9,glst10,glst11];
		var arrlp = [glp0,glp1,glp2,glp3,glp4,glp5,glp7,glp8,glp9,glp10,glp11];
        var arre = [ge0,ge1,ge2,ge3,ge4,ge5,ge6,ge7,ge8,ge9,ge10,ge11];
        var arrc = [gc0,gc1,gc2,gc3,gc4,gc5,gc6,gc7,gc8,gc9,gc10,gc11];
        		
				 //this is a array
				 
             
	   //create an array
        }
    }
     teto.send();
}


function generateHTML(xmpaper) {
       const pic0 = xmpaper.results[0].picture.thumbnail;
	   const pic1 = xmpaper.results[1].picture.thumbnail;
	   const pic2 = xmpaper.results[2].picture.thumbnail;
	   const pic3 = xmpaper.results[3].picture.thumbnail;
	   const pic4 = xmpaper.results[4].picture.thumbnail;
	   const pic5 = xmpaper.results[5].picture.thumbnail;
	   const pic6 = xmpaper.results[6].picture.thumbnail;
	   const pic7 = xmpaper.results[7].picture.thumbnail;    
	   const pic8 = xmpaper.results[8].picture.thumbnail;
	   const pic9 = xmpaper.results[9].picture.thumbnail;
	   const pic10 = xmpaper.results[10].picture.thumbnail;
	   const pic11 = xmpaper.results[11].picture.thumbnail;
	  
	  const pc0 = new Image();
	   pc0.setAttribute("src",pic0);
	   pc0.decode()
	  const pc1 = new Image();
	   pc1.setAttribute("src",pic1);
	   pc1.decode()
	 const  pc2 = new Image();
	   pc2.setAttribute("src",pic2);
	   pc2.decode()
	   const  pc3 = new Image();
	   pc3.setAttribute("src",pic3);
	   pc3.decode()
	   const  pc4 = new Image();
	   pc4.setAttribute("src",pic4);
	   pc4.decode()
	   const  pc5 = new Image();
	   pc5.setAttribute("src",pic5);
	   pc5.decode()
	   const  pc6 = new Image();
	   pc6.setAttribute("src",pic6);
	   pc6.decode()
	   const  pc7 = new Image();
	   pc7.setAttribute("src",pic7);
	   pc7.decode()
	   const  pc8 = new Image();
	   pc8.setAttribute("src",pic8);
	   pc8.decode()
	   const  pc9 = new Image();
	   pc9.setAttribute("src",pic9);
	   pc9.decode()
	   const  pc10 = new Image();
	   pc10.setAttribute("src",pic10);
	   pc10.decode()
	   const  pc11 = new Image();
	   pc11.setAttribute("src",pic11);
	   pc11.decode()
	   var hard = [pc0,pc1,pc2,pc3,pc4,pc5,pc6,pc7,pc8,pc9,pc10,pc11];
				 for(var t=0; t <hard.length; t++){
				 fu.append(hard[t],px)
				 }
}
work();
generateHTML(xampaper);

/*btn.addEventListener('click', (event) => {
     work(url)
    .then(generateHTML)
    .catch( err => console.log(err) )
event.target.remove() 
});*/
























/*const url='https://randomuser.me/api/?results=12&inc=picture,name,location=city,state,email,dob&format=json';
const fu = document.getElementById("so");
function work() {
    const teto =  new XMLHttpRequest();
    teto.open("GET",url);
    teto.onload= ()=>{
        if ( teto.status ==200){
           var xmpaper =JSON.parse(teto.responseText);
          console.log(xmpaper);
           
  const x = require("x-value");
       fu.innerHTML= x(xmpaper);
        }
    }
     teto.send();
}
work();*/







/*const url='https://randomuser.me/api/?results=12&inc=picture,name,location,email,dob&format=json';
const no= document.getElementById("so");
function work() {
    const teto =  new XMLHttpRequest();
    teto.open("GET",url);
    teto.onload= ()=>{
        if ( teto.status ==200){
           var xmpaper =JSON.parse(teto.responseText);
           for(var x in xmpaper){
          so.innerHTML=xmpaper[x].name+"<br>"+ xmpaper[x].location;
           }
           }
    }
     teto.send();
}
work();*/