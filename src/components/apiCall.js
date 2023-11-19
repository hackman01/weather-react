
import axios from 'axios'


const[response,setResponse]=useState([])
const[list,setList]=useState([])
const[citi,setCiti]=useState('')
useEffect(async()=>{
   const res=await axios.get(url);
   setResponse(res.data);
   setList(res.data.list);
   setCiti(res.data.city);
 
},[]);



let arr=[]

function removeDuplicates(ar) { 
   let unique = []; 
   let data = [];
   ar.forEach(element => { 
       if (!unique.includes(element.dt_txt.substring(0,11))) { 
           unique.push(element.dt_txt.substring(0,11));
           data.push(element); 
       } 
       
       
   }); 
   let data2=[]
   for(let i=1;i<data.length;i++)
   {
      data2.push(data[i]);
   }
   return data2; 
} 

 setArr(removeDuplicates(list));

},[list])


