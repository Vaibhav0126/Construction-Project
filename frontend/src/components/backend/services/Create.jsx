import React from "react";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiurl, token } from "../../common/http";
import { toast } from "react-toastify";

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const res = await fetch(apiurl + "services", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.status == true) {
      toast.success(result.message);
      navigate("/admin/services");
    } else {
      toast.success(result.message);
    }

    console.log(result);
  };
  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              {/* sidebar */}
              <Sidebar />
            </div>
            <div className="col-md-9 ">
              {/* dashboard */}
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between">
                    <h5>Services/Create</h5>
                    <Link to="/admin/services" className="btn btn-primary">
                      Back
                    </Link>
                  </div>
                  <hr />
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Name
                      </label>
                      <input
                        {...register("title", {
                          required: "The Title field is required",
                        })}
                        type="text"
                        className={`form-control ${
                          errors.title && "is-invalid"
                        }`}
                      />
                      {errors.title && (
                        <p className="invalid-feedback">
                          {errors.title?.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Slug
                      </label>
                      <input
                        {...register("slug", {
                          required: "The Slug field is required",
                        })}
                        type="text"
                        className={`form-control ${
                          errors.slug && "is-invalid"
                        }`}
                      />
                      {errors.slug && (
                        <p className="invalid-feedback">
                          {errors.slug?.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Short Description
                      </label>
                      <textarea
                        {...register("short_desc")}
                        rows={4}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Content
                      </label>
                      <textarea
                        {...register("content")}
                        rows={4}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Status
                      </label>
                      <select {...register("status")} className="form-control">
                        <option value="1">Active</option>
                        <option value="0">Block</option>
                      </select>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Create;
