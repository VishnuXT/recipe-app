import React from "react";
import "../App.css";

const RecipeForm = () => {
  return (
    <div className="body-container-form">
      <div className="header-content">Recipe Form</div>
      <div className="container boder-white">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label ">
                  Recipe title
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Recipe Title"
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  The Creator
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the Creator"
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Description
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="form-control"
                  placeholder="Enter a Description"
                ></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Upload Image
                </label>
                <input type="file" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Recipe Type
                </label>
                <select name="" id="" className="form-select">
                  <option value="">Select Recipe Type</option>
                  <option value="1">Vegetarian</option>
                  <option value="2">Non-Vegetarian</option>
                </select>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Ingredients
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Ingredients"
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 button-justify">
                <button className="btn btn-success">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeForm;
