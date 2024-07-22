import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";

// const notify = () => toast("Here is your toast.");

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (valeus, actions) => {
    setQuery(valeus.query);
    actions.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            placeholder="Search images and photos"
            type="search"
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const searchData = e.target.elements.search.value;
//   if (!searchData) {
//     toast("Write.... and we will find it 😉", {
//       duration: 3000,
//     });
//     return;
//   }
//   onSubmit(searchData);
//   e.target.reset();
// };
// return (
//   <header className={s.container}>
//     <form onSubmit={handleSubmit}>
//       <input
//         name="search"
//         type="text"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search images and photos"
//       />
//       <button type="submit">Search</button>
//     </form>
//     <Toaster position="top-right" reverseOrder={true} />
//   </header>
// );
