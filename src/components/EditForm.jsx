import { useForm } from "react-hook-form";
import { useContext } from "react";
import AppContext from "../data/AppContext";
import { useNavigate } from "react-router-dom";

function EditForm({ defaultValues }) {
  const { dispatch } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch({ type: "edit", payload: data });
    navigate("/lab3");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <h2>Edit Record</h2>

      <input type="hidden" {...register("id")} />

      <div className="mb-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="birth">Birth Date</label>
        <input
          type="date"
          id="birth"
          {...register("birth", { required: "Birth date is required" })}
          className="form-control"
        />
        {errors.birth && <p className="text-danger">{errors.birth.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="eyes">Eye Color</label>
        <input
          type="text"
          id="eyes"
          {...register("eyes", { required: "Eye color is required" })}
          className="form-control"
        />
        {errors.eyes && <p className="text-danger">{errors.eyes.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          {...register("rating", {
            required: "Rating is required",
            min: { value: 1, message: "Rating must be at least 1" },
            max: { value: 10, message: "Rating must be at most 10" },
          })}
          className="form-control"
        />
        {errors.rating && (
          <p className="text-danger">{errors.rating.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Save Changes
      </button>
    </form>
  );
}

export default EditForm;
