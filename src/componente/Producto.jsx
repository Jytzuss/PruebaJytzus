import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Navegacion from "./Navegacion";
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);
function Producto() {
  const [productos, setproducto] = useState([]);
  useEffect(() => {
    getproduct();
  }, []);
  async function getproduct() {

    const { data, error } = await supabase
    .from("productos")
    .select("*")
    .eq("categoria","Tecnología")

    if (error) console.error("Error:", error);
    setproducto(data);
  }
  return (
    <div className="container">
      <ul className="productoslist">
      {productos.map((p) => (
          <li key={p.id} className="li">
              <h2>{p.nombre_producto}</h2>
               <h5>{p.categoria}</h5>
               <h3>{p.precio}</h3>
             <hr />
              <img src={p.imagen} alt="" /> </li>
      ))}
    <Navegacion></Navegacion>
    </ul>
    </div>
  );
}
export default Producto;