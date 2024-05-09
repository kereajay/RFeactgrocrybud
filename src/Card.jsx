import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import {toast} from "react-toastify";
const Card = () => {
    const [inputval, setInputval] = useState("");
    const [additem, setAdditem] = useState([]);
    // const [checkval,setCheckval]=useState(false);

    const localgrocery = JSON.parse(localStorage.getItem("Grocery"));
    if (localgrocery) {
        if (localgrocery.length > 0 && additem.length === 0) {
            setAdditem(localgrocery);
        }
    }
    const addGrocery = () => {
        if(inputval===""){
            toast.error("Grocery input can't be empty",{
                position: "top-center",
                autoClose: 1500,
               

            } )
            return
        }
        const updatedinput = [...additem, {
             inputval,
            id: uuidv4(),
            isChecked: false,
        }];
        setAdditem(updatedinput);
        toast.success("Grocery added successfully",{
            position: "top-center",
            autoClose: 1500,

        })
        localStorage.setItem("Grocery", JSON.stringify(updatedinput));
        setInputval("");
       
    }
    const deletegrocery=(id)=>{
        const updatedinput = additem.filter((items) => items.id !== id);
        setAdditem(updatedinput);
        localStorage.setItem("Grocery", JSON.stringify(updatedinput));
        toast.success("Grocery item deleted successfully",{
            position:"top-center",
            autoClose: 1500,
            
        })
    }

    const strikeitem=(id)=>{
        const updatestrike=additem.map((items)=>{
            if(items.id===id){
                items.isChecked=!items.isChecked
            }
            return items
            
        })
        setAdditem(updatestrike);
        localStorage.setItem("Grocery", JSON.stringify(updatestrike));

    }

    return (
        <>
            <div className="w-[50%] m-auto shadow-2xl  mt-16 text-center">
                <h1 className="text-2xl">Grocery Bud</h1>
                <br />
                <div className=" flex flex-row  justify-center " >
                    <br />
                    <input type="text" className="border-2 border-black w-96" value={inputval} onChange={(e) => setInputval(e.target.value)} />
                    <button className="bg-blue-300  border-4 border-blue-300" onClick={addGrocery}>Add item</button>

                </div>

                <br />
                <br />
                {
                    additem.map((item,idx) => {
                        return (
                            <>
                                <div className="w-[50%] flex flex-row justify-between m-auto text-center items-center bg-slate-400 p-2" key={idx}>
                                    <input type="checkbox" onChange={()=>strikeitem(item.id)} checked={item.isChecked} />
                                    <p style={{ textDecoration: item.isChecked ? "line-through" : "none" }}>{item.inputval}</p>
                                    
                                    <button className="bg-black text-white w-28 p-1 ml-4" onClick={()=>deletegrocery(item.id)}>Delete</button>
                                </div>
                                <br />
                            </>
                        )


                    })
                }

            </div>
        </>
    )
}
export default Card;