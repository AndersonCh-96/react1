import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

/* FUNCION PRINCIPAL Y PÁGINA DE INICIO
1. Usamos el hook useState para el cambio de estado de una variable en este caso el arreglo
asignamos el arreglo con un dato por defecto 
2. La funcion addCategory se ejecuta conjuntamente con el componente AddCategory 
La palabra a buscar se envia desde el componente addCategory y se recibe en el compoente
principal, setCategory va ha ser el nuevo valor 
*/
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon ball z"]);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>Aplicación de prueba</h1>
      {/* COMPONENTE */}
      <AddCategory onNewCategory={addCategory} />
      {/* COMPONENTE */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
