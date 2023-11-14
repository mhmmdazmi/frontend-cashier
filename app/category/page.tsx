import AddProduct from "./AddProduct";

export const metadata = {
  title: "Category",
};

import axios from 'axios'
import Link from 'next/link'
import { cache } from "react";

type Category = {
  id: number;
  name: string;
};

async function getCategory() {
  const res = await axios.get("http://127.0.0.1:8000/api/category", {
  });
  return res.data.data;
}

export default async function CategoryList() {
  const category: Category[] = await getCategory();
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddProduct />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {category.map((category, index) => (
            <tr key={category.id}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>Edit | Hapus</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// import AddProduct from "./AddProduct";
// export const metadata ={
//     title: "Category",
// }

// import axios from 'axios'
// import Link from 'next/link'

// type Category = {
//     id: number;
//     name: string;
// }
// const getCategory = async () => {
//     const res = await axios.get("http://127.0.0.1:8000/api/category");
//   return res.data.data
// }
// const CategoryList = async () => {
//     const category: Category[] = await getCategory()
//   return (
//     <div className="py-10 px-10">
//         <div className="py-2">
//             <AddProduct />
//         </div>
//         <table className="table w-full">
//             <thead>
//                 <tr>
//                     <th>No.</th>
//                     <th>Nama Kategori</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {category.map((category, index)=>(
//                     <tr key={category.id}>
//                         <td>{index + 1}</td>
//                         <td>{category.name}</td>
//                         <td>Edit | Hapus</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
//   );
// }

// export default CategoryList
